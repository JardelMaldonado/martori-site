import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'x4w1q20m',
    dataset: 'production',
  },
  studio: {
    hostname: 'martori',
  },
  studioHost: 'martori',
  autoUpdates: true,
})

