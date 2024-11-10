// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\app\uploadData\[[...tool]]\page.tsx` route
//  */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
// // import {schema} from './sanity/schemaTypes'
// import {schemaTypes} from './schemas/index'
// import {structure} from './sanity/structure'

// export default defineConfig({
//   basePath: '/uploadData',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schemaTypes,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })

"use client"
import {defineConfig} from 'sanity'
import {structure} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'SIGMA Website Data',

  projectId: 'vdzzonmk',
  dataset: 'production',
  basePath: "/uploadData",
  plugins: [structure(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})