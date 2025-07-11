import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'


import promocao from './schemas/promocao' 
import assuntoDaSemana from './schemas/assuntoDaSemana' 
import blockContent from './schemas/blockContent'
import secaoNovidades from './schemas/secaoNovidades' 

const schemaTypes = [promocao, assuntoDaSemana, blockContent, secaoNovidades]

export default defineConfig({
  name: 'default',
  title: 'martorisite',

  projectId: 'x4w1q20m',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
