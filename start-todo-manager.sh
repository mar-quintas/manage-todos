#!/bin/bash
if [ "$1" = "fast" ];
then
  (cd src/backend ; npm start) &
  sleep 10
  (cd src/frontend ; npm start)
else
  npm install ; cd src/frontend ; npm install ; cd ..
  (cd backend ; npm start) &
  sleep 10
  (cd frontend ; npm start)
fi
exec bash
