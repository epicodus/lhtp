#!/bin/bash

parentDir="/Users/epicodus/lhtp"
lhtpDir="$parentDir/lhtp"
tracks=("full-time" "part-time" "full-time-pre-october" "part-time-evening" "workshops")

###### fetch everything ######
cd "$lhtpDir" || exit
npm run fetch

###### build root site ######
cd "$lhtpDir" || exit
npm run build

###### build sites for each track ######
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  cd "$trackDir" || exit
  echo "\n\nBuild $track...\n"
  npm run build
done

###### deploy root site ######
cd "$parentDir/lhtp-root" || exit
rm -rf *
cp -r "$lhtpDir/build/"* .
git add . && git commit -m "update gh-pages" && git push origin gh-pages

###### deploy sites for each track ######
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  src_dir="$trackDir/build"
  dest_dir="$parentDir/lhtp-$track"
  if [ -d "$src_dir" ] && [ -d "$dest_dir" ]; then
    cd "$dest_dir" || exit
    rm -rf *
    cp -r "$src_dir/"* .
    git add . && git commit -m "update gh-pages" && git push origin gh-pages
  else
    echo "Either $src_dir or $dest_dir does not exist. Skipping."
  fi
done
