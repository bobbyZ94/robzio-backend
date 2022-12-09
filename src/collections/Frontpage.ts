import { GlobalConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const Frontpage: GlobalConfig = {
  slug: 'frontpage',
  label: 'Frontpage',
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  graphQL: {
    name: 'Frontpage',
  },
  fields: [
    {
      name: 'hero',
      label: 'Hero. Titel of website/Text of hero banner',
      type: 'text',
      required: true,
    },
    {
      name: 'keywords', // required
      type: 'array', // required
      label: 'Keywords',
      labels: {
        singular: 'Keyword',
        plural: 'Keywords',
      },
      admin: {
        components: {
          RowLabel: ({ data }) => data?.keyword || data.keyword,
        },
      },
      fields: [
        // required
        {
          name: 'keyword',
          type: 'text',
          label: 'Keyword',
          required: true,
        },
      ],
    },
  ],
}

export default Frontpage
