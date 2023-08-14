#!/bin/bash

# fetch all the tags from the remote
git fetch --tags

# get the latest tag name
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)

# change to dist directory
cd dist

# get all js and css file names, exclude .map files
files=$(ls *.js *.css | grep -v .map)

# generate jsdeliver urls
for file in $files
do
    if [[ $file == *.js ]]
    then
        echo "<script defer src=\"https://cdn.jsdelivr.net/gh/elchinhuseynli/el-cv-animation@$latestTag/dist/$file\"></script>"
    elif [[ $file == *.css ]]
    then
        echo "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/elchinhuseynli//el-cv-animation@$latestTag/dist/$file\"/>"
    fi
done
