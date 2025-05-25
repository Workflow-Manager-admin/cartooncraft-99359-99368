#!/bin/bash
cd /home/kavia/workspace/code-generation/cartooncraft-99359-99368/main_container_for_cartooncraft
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

