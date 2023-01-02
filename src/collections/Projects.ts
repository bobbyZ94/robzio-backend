import { CollectionConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projects' },
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date'],
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link to project. Optional',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image of project',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Description of project',
      required: true,
      defaultValue: [
        {
          children: [{ text: 'Project entry ...' }],
        },
      ],
      admin: {
        elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'link', 'ol', 'ul', 'indent', 'upload'],
        leaves: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
        upload: {
          collections: {
            media: {
              fields: [],
            },
          },
        },
      },
    },
  ],
}

export default Projects
