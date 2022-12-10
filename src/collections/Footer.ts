import { GlobalConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  graphQL: {
    name: 'Footer',
  },
  fields: [
    {
      name: 'mail',
      label: 'Contact Mail',
      type: 'email',
      required: true,
    },
    {
      name: 'links', // required
      type: 'array', // required
      label: 'Links',
      required: true,
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      admin: {
        components: {
          RowLabel: ({ data }) => data?.title || data.title,
        },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Link title',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link Url. Relative path: E.g.: /about',
          required: true,
        },
      ],
    },
  ],
}

export default Footer
