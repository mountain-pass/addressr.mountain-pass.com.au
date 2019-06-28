#!/bin/bash

# Simple script to check the health of a created droplet
fail_count=1

while true
do
  wget --header 'Accept: application/json' --tries=1 --no-check-certificate --timeout=3 -S -q "$1" -O /dev/null

  if [ $? -eq 0 ] ; then
    echo "$(date -u) Server available"
    exit 0
  else
    if [ $fail_count -eq 61 ]; then
      echo "$(date -u) Server unavailable"
      exit 2
    else
      echo "$(date -u) Attempt ${fail_count}/60: Server not yet available"
      sleep 3
      fail_count=$[$fail_count +1]
    fi
  fi
done