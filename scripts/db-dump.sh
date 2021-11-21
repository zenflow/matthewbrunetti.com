#!/bin/sh
set -e

[ -z "$MONGODB_URI" ] && echo "MONGODB_URI not defined" && exit 1;

rm -rf db
mongodump --uri=$MONGODB_URI --out=db/temp
mv db/temp/*/* db
rm -rf db/temp
