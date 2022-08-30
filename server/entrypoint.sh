#!/bin/sh
echo "#RUNNING PRISMA GENERATE#"
npx prisma generate &
PID=$!
wait $PID
echo "#RUNNING PRISMA MIGRATE#"
npx prisma migrate dev &
PID2=$!
wait $PID2
echo "#START SERVER#"
yarn start