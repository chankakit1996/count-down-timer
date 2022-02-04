npm ci
npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist master gh-pages