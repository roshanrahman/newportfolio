#!/usr/bin/bash

# Copying assets/master.json to src/assets/master.json
cat assets/master.json >src/assets/master.json
git add src/assets/master.json
git commit -m "updated src/assets/master.json"
git push origin master
git push heroku master
