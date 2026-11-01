(module
 (type $none_=>_none (func))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (memory $0 1)
 (data (i32.const 1036) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1084) "&\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1148) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1212) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (global $assembly/index/table (mut i32) (i32.const 0))
 (global $assembly/index/input (mut i32) (i32.const 0))
 (export "dfa" (func $assembly/index/dfa))
 (start $~start)
 (func $~lib/rt/stub/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   unreachable
  end
  local.get $0
  i32.const 16
  i32.add
  local.tee $2
  i32.const 1073741820
  i32.gt_u
  if
   unreachable
  end
  global.get $~lib/rt/stub/offset
  global.get $~lib/rt/stub/offset
  i32.const 4
  i32.add
  local.tee $4
  local.get $2
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.tee $7
  i32.add
  local.tee $2
  memory.size
  local.tee $5
  i32.const 16
  i32.shl
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.tee $3
  i32.gt_u
  if
   local.get $5
   local.get $2
   local.get $3
   i32.sub
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $3
   local.get $3
   local.get $5
   i32.lt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  local.get $2
  global.set $~lib/rt/stub/offset
  local.get $7
  i32.store
  local.get $4
  i32.const 4
  i32.sub
  local.tee $2
  i32.const 0
  i32.store offset=4
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $4
  i32.const 16
  i32.add
 )
 (func $~lib/typedarray/Int32Array#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 12
  i32.const 3
  call $~lib/rt/stub/__new
  local.tee $1
  i32.eqz
  if
   i32.const 12
   i32.const 2
   call $~lib/rt/stub/__new
   local.set $1
  end
  local.get $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 268435455
  i32.gt_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 18
   i32.const 57
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.shl
  local.tee $3
  i32.const 0
  call $~lib/rt/stub/__new
  local.tee $5
  local.set $0
  local.get $3
  local.set $4
  loop $while-continue|0
   local.get $4
   if
    local.get $0
    local.tee $2
    i32.const 1
    i32.add
    local.set $0
    local.get $2
    i32.const 0
    i32.store8
    local.get $4
    i32.const 1
    i32.sub
    local.set $4
    br $while-continue|0
   end
  end
  local.get $1
  i32.load
  drop
  local.get $1
  local.get $5
  i32.store
  local.get $1
  local.get $5
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $1
 )
 (func $~lib/typedarray/Int32Array#__set (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1168
   i32.const 1232
   i32.const 675
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $start:assembly/index
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 1276
  global.set $~lib/rt/stub/offset
  i32.const 2816
  call $~lib/typedarray/Int32Array#constructor
  local.tee $1
  i32.load offset=4
  local.set $3
  i32.const 0
  local.get $1
  i32.load offset=8
  i32.const 2
  i32.shr_u
  local.tee $2
  local.get $2
  select
  local.set $0
  loop $for-loop|0
   local.get $0
   local.get $2
   i32.lt_s
   if
    local.get $3
    local.get $0
    i32.const 2
    i32.shl
    i32.add
    i32.const 10
    i32.store
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $1
  global.set $assembly/index/table
  global.get $assembly/index/table
  i32.const 97
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 98
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 99
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 100
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 101
  i32.const 0
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 102
  i32.const 0
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 103
  i32.const 2048
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 104
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 105
  i32.const 2304
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 106
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 107
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 108
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 109
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 110
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 353
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 354
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 355
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 356
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 357
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 358
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 359
  i32.const 2048
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 360
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 361
  i32.const 2304
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 362
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 363
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 364
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 365
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 366
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 609
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 610
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 611
  i32.const 0
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 612
  i32.const 0
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 613
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 614
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 615
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 616
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 617
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 618
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 619
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 620
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 621
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 622
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 865
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 866
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 867
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 868
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 869
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 870
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 871
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 872
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 873
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 874
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 875
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 876
  i32.const 256
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 877
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 878
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1121
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1122
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1123
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1124
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1125
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1126
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1127
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1128
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1129
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1130
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1131
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1132
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1133
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1134
  i32.const 256
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1377
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1378
  i32.const 512
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1379
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1380
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1381
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1382
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1383
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1384
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1385
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1386
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1387
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1388
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1389
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1390
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1633
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1634
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1635
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1636
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1637
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1638
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1639
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1640
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1641
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1642
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1643
  i32.const 768
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1644
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1645
  i32.const 1024
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1646
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1889
  i32.const 1280
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1890
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1891
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1892
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1893
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1894
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1895
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1896
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1897
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1898
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1899
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1900
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1901
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 1902
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2145
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2146
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2147
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2148
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2149
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2150
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2151
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2152
  i32.const 1536
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2153
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2154
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2155
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2156
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2157
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2158
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2401
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2402
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2403
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2404
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2405
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2406
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2407
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2408
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2409
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2410
  i32.const 1536
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2411
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2412
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2413
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2414
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2657
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2658
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2659
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2660
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2661
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2662
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2663
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2664
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2665
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2666
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2667
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2668
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2669
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/table
  i32.const 2670
  i32.const 2560
  call $~lib/typedarray/Int32Array#__set
  i32.const 13
  call $~lib/typedarray/Int32Array#constructor
  global.set $assembly/index/input
  global.get $assembly/index/input
  i32.const 0
  i32.const 97
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 1
  i32.const 98
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 2
  i32.const 99
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 3
  i32.const 102
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 4
  i32.const 102
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 5
  i32.const 103
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 6
  i32.const 104
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 7
  i32.const 109
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 8
  i32.const 110
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 9
  i32.const 105
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 10
  i32.const 106
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 11
  i32.const 109
  call $~lib/typedarray/Int32Array#__set
  global.get $assembly/index/input
  i32.const 12
  i32.const 110
  call $~lib/typedarray/Int32Array#__set
 )
 (func $~lib/typedarray/Int32Array#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1168
   i32.const 1232
   i32.const 664
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $assembly/index/dfa (result i32)
  (local $0 i32)
  (local $1 i32)
  i32.const 1792
  local.set $0
  loop $for-loop|0
   local.get $1
   i32.const 13
   i32.lt_s
   if
    global.get $assembly/index/table
    global.get $assembly/index/input
    local.get $1
    call $~lib/typedarray/Int32Array#__get
    local.get $0
    i32.add
    call $~lib/typedarray/Int32Array#__get
    local.set $0
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 256
  i32.eq
  i32.const 1
  local.get $0
  select
 )
 (func $~start
  call $start:assembly/index
 )
)
