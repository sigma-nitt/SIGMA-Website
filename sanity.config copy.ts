// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

// export default defineConfig({
//   name: 'default',
//   title: 'sanityt1',

//   projectId: 'jnqvatdi',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })


import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanityt1',

  projectId: 'vdzzonmk',
  dataset: 'production',
  basePath: "/uploadData",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})