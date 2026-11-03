const std = @import("std");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const base_alloc = gpa.allocator();

    var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    defer arena.deinit();

    const args = try std.process.argsAlloc(base_alloc);
    defer std.process.argsFree(base_alloc, args);

    if (args.len < 3) return error.InvalidArgs;
    const manifest_path = args[2];
    const rounds: usize = if (args.len > 3) try std.fmt.parseInt(usize, args[3], 10) else 7;

    const manifest = try std.fs.cwd().readFileAlloc(base_alloc, manifest_path, 1024 * 1024);
    defer base_alloc.free(manifest);

    var lines = std.ArrayList([]const u8).init(base_alloc);
    defer lines.deinit();
    var line_it = std.mem.splitScalar(u8, manifest, '\n');
    while (line_it.next()) |line| {
        const trimmed = std.mem.trim(u8, line, " \t\r\n");
        if (trimmed.len > 0) {
            try lines.append(trimmed);
        }
    }

    const stdout = std.io.getStdOut().writer();
    var sink: u64 = 0;

    try stdout.print("{{\n", .{});

    for (lines.items, 0..) |line, idx| {
        var part_it = std.mem.splitScalar(u8, line, '\t');
        const key = part_it.next().?;
        const path = part_it.next().?;
        const iters_str = part_it.next().?;
        const iters = try std.fmt.parseInt(usize, iters_str, 10);

        const data = try std.fs.cwd().readFileAlloc(base_alloc, path, 32 * 1024 * 1024);
        defer base_alloc.free(data);

        try stdout.print("  \"{s}\": {{\n", .{key});

        const warmup = @max(@as(usize, 3), iters / 4);
        for (0..warmup) |_| {
            _ = arena.reset(.retain_capacity);
            const val = try std.json.parseFromSliceLeaky(std.json.Value, arena.allocator(), data, .{});
            sink +%= switch (val) {
                .object => |o| o.count(),
                .array => |a| a.items.len,
                else => 1,
            };
        }

        var samples = try base_alloc.alloc(f64, rounds);
        defer base_alloc.free(samples);

        for (0..rounds) |r| {
            var timer = try std.time.Timer.start();
            for (0..iters) |_| {
                _ = arena.reset(.retain_capacity);
                std.mem.doNotOptimizeAway(data.ptr);
                const val = try std.json.parseFromSliceLeaky(std.json.Value, arena.allocator(), data, .{});
                sink +%= switch (val) {
                    .object => |o| o.count(),
                    .array => |a| a.items.len,
                    else => 1,
                };
            }
            const elapsed_ns = timer.read();
            samples[r] = (@as(f64, @floatFromInt(elapsed_ns)) / 1000.0) / @as(f64, @floatFromInt(iters));
        }

        std.mem.sort(f64, samples, {}, comptime std.sort.asc(f64));
        const med_us = samples[rounds / 2];
        const min_us = samples[0];
        const ops_s = 1e6 / med_us;
        const mb_s = (@as(f64, @floatFromInt(data.len)) * ops_s) / (1024.0 * 1024.0);

        try stdout.print(
            "      \"std.json (Native Zig)\": {{ \"medianUs\": {d:.4}, \"minUs\": {d:.4}, \"opsPerSec\": {d:.1}, \"mbPerSec\": {d:.2} }}\n",
            .{ med_us, min_us, ops_s, mb_s },
        );

        const comma = if (idx + 1 == lines.items.len) "" else ",";
        try stdout.print("  }}{s}\n", .{comma});
    }

    std.mem.doNotOptimizeAway(&sink);
    try stdout.print("}}\n", .{});
}
