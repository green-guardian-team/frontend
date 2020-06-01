#!/bin/bash
docker run -it -v $(pwd):/src -w /src -p 8089:8089 \
    --rm --name green-guardian-frontend  \
    node:10 bash -c "npm i && npm run build"

cp --recursive ./dist/*  /var/www/html/ 
