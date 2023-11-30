#!/bin/bash

lhtpDir="/Users/epicodus/lhtp"
deployDir="$lhtpDir/deploy"

cd "$lhtpDir" || exit

###### fetch tracks ######
if [ "$#" -gt 0 ]; then
  tracks=("$@")
  npm run fetch "${tracks[@]}" # fetch just the tracks specified
else
  tracks=("full-time" "part-time" "full-time-pre-october" "part-time-evening" "workshops") # no commas
  npm run fetch # fetch all tracks
fi

###### build root site ######
cd "$lhtpDir" || exit
npm run build

###### build sites for each track ######
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  cd "$trackDir" || exit
  echo ""
  echo "**************************************"
  echo "******* BUILDING $track *******"
  echo "**************************************"
  echo ""
  npm run build
done

###### deploy root site ######
cd "$deployDir/lhtp-root" || exit
git pull origin gh-pages
rm -rf *
cp -r "$lhtpDir/build/"* .
git add . && git commit -m "update gh-pages" && git push origin gh-pages

###### deploy sites for each track ######
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  src_dir="$trackDir/build"
  dest_dir="$deployDir/lhtp-$track"
  if [ -d "$src_dir" ] && [ -d "$dest_dir" ]; then
    cd "$dest_dir" || exit
    git pull origin gh-pages
    rm -rf *
    cp -r "$src_dir/"* .
    git add . && git commit -m "update gh-pages" && git push origin gh-pages
  else
    echo "Either $src_dir or $dest_dir does not exist. Skipping."
  fi
done
