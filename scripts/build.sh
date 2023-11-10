set -e
vue-tsc --noEmit && vite build

# For some reason the build of vite is not importing automatically the style.css, this is a treatment to import css correctly.
# TODO: Investigate a better way to do it and remove these lines.
echo 'importing css file...'
sed -i '' -e 's/from "vue";/from "vue"; import vuetage from/g' dist/vuetage.es.js
sed -i '' -e 's/vuetage from/vuetage from "vuetage.css"/g' dist/vuetage.es.js
sed -i '' -e 's/"vuetage.css"/".\/vuetage.css"/g' dist/vuetage.es.js
sed -i '' -e 's/import vuetage/\nimport vuetage/g' dist/vuetage.es.js

echo 'importing types...'
# TODO: Investigate why the type is not building correctly, this line is necessary to copy it directly to dist.
cp src/typing/vuetage.d.ts dist/main.d.ts

echo 'build finished'