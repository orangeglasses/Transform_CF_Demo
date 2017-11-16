#!/bin/bash

ls
if ! ( grep -iw 'starscream\|megatron\|soundwave\|devastator' resource-git/autobots.json )
then
  echo "all is well."
  exit 0
fi
exit 1
