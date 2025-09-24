#!/bin/bash

SRC="src/content/blog/en/002.md"
DEST="src/content/blog/en/"

for i in $(seq -w 4 45); do
  cp "$SRC" "${DEST}0${i}.md"
  echo "Created ${DEST}${i}.md"
done
