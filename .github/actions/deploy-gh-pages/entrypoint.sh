#!/bin/sh
set -e

yarn install
yarn build-storybook -s ./public

REPONAME="$(echo $GITHUB_REPOSITORY | cut -d'/' -f 2)"
OWNER="$(echo $GITHUB_REPOSITORY | cut -d'/' -f 1)"

TARGET_BRANCH="gh-pages"
BUILD_DIR="storybook-static"


echo "### Started deploy to $GITHUB_REPOSITORY/$TARGET_BRANCH"

cp -R $BUILD_DIR $HOME/$BUILD_DIR
cd $HOME

git config --global user.name "gh-pages-deployer"
git config --global user.email "gh-pages-deployer@gmail.com"
git clone --quiet --branch=$TARGET_BRANCH https://${GH_USERNAME}:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git $TARGET_BRANCH > /dev/null


cp -R gh-pages/.git $HOME/.git
rm -rf gh-pages/*
cp -R $HOME/.git gh-pages/.git
cd gh-pages
cp -Rf $HOME/${BUILD_DIR}/* .

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to deploy"
else
  git add -Af .
  git commit -m "$GITHUB_ACTOR published a site update"
  git push -fq https://${GH_USERNAME}:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git $TARGET_BRANCH > /dev/null
fi

echo "### Finished deploy"
