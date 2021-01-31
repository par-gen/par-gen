#!/usr/bin/sh

if [ "$(id -u -r)" -ne 0 ]
  then echo "Please run as root"
  exit
fi

case $1 in
  "init")
    echo "Disabling turboboost (echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo)"
    echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
    for i in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
      echo "Setting scaling governor to 'performance' (echo performance > /sys/devices/system/cpu/cpu$i/cpufreq/scaling_governor)"
      echo performance > $i
    done
#     echo "Shielding core 3 and 4 (cset shield -c 2,3 -k on)"
#     cset shield -c 2,3 -k on
    echo "Disabling hyper threading (echo 0 > /sys/devices/system/cpu/cpu3/online))"
    echo 0 > /sys/devices/system/cpu/cpu3/online
    echo "All set, you can now run your benchmarks (cset shield --exec -- taskset -c 2 <your_program>)"
  ;;

  "destroy")
    echo "Enabling turboboost (echo 0 > /sys/devices/system/cpu/intel_pstate/no_turbo)"
    echo 0 > /sys/devices/system/cpu/intel_pstate/no_turbo
    echo "Enabling hyper threading (echo 1 > /sys/devices/system/cpu/cpu3/online))"
    echo 1 > /sys/devices/system/cpu/cpu3/online
    for i in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
      echo "Setting scaling governor to 'schedutil' (echo schedutil > /sys/devices/system/cpu/cpu$i/cpufreq/scaling_governor)"
      echo schedutil > $i
    done
#      echo "Resetting core 3,4 shield (cset shield --reset)"
#      cset shield --reset
    echo "All clear, your system should be as it was before"
  ;;
esac
