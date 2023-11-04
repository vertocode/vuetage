set -e
vue-tsc --noEmit && vite build

# For some reason the build of vite is not importing automatically the style.css, this is a treatment to import css correctly.
# TODO: Investigate a better way to do it and remove these lines.
sed -i '' -e 's/from "vue";/from "vue"; import style from/g' dist/vuetage.js
sed -i '' -e 's/style from/style from "style.css"/g' dist/vuetage.js
sed -i '' -e 's/"style.css"/".\/style.css"/g' dist/vuetage.js
sed -i '' -e 's/import style/\nimport style/g' dist/vuetage.js

cp package.json dist
cp README.md dist
cp LICENSE dist