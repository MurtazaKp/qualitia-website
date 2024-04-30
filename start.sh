#!/bin/sh
ssh -o StrictHostKeyChecking=no ubuntu@34.205.172.139
pm2 delete cubyts-api &&
pm2 start yarn --name "cubyts-api" -- develop
