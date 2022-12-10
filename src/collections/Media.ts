import { CollectionConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'titel',
      type: 'text',
      label: 'Title',
      required: true,
    },
  ],
  access: {
    create: isAdminOrEditor,
    read: () => true,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}

export default Media
