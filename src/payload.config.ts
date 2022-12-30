import { buildConfig } from 'payload/config'
import path from 'path'
import Users from './collections/Users'
import Settings from './collections/Settings'
import Frontpage from './collections/Frontpage'
import Blogposts from './collections/Blogposts'
import Media from './collections/Media'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  csrf: [
    'http://localhost',
    'http://robzio.com',
    'http://*.robzio.com',
  ],
  telemetry: false,
  upload: {
    limits: {
      fileSize: 15000000, // 15MB, written in bytes
    },
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- RobZio',
      // favicon: '/assets/favicon-32x32.png',
      // ogImage: '/assets/logo.png',
    },
    // components: {
    //   graphics: {
    //     Icon,
    //     Logo,
    //   },
    // },
  },
  collections: [
    Blogposts,
    Users,
    Media,
  ],
  globals: [Frontpage, Settings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
