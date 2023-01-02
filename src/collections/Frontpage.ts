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
    {
      name: 'showcases', // required
      type: 'array', // required
      label: 'Showcases',
      labels: {
        singular: 'Showcase',
        plural: 'Showcases',
      },
      admin: {
        components: {
          RowLabel: ({ data }) => data?.title || data.title,
        },
      },
      fields: [
        // required
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          required: true,
        },
        {
          name: 'image1',
          type: 'upload',
          label: 'Image1 of showcase',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'image2',
          type: 'upload',
          label: 'Image2 of showcase',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'text',
          type: 'richText',
          label: 'Text',
          required: true,
          defaultValue: [
            {
              children: [{ text: 'Showcase entry ...' }],
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
    },
  ],
}

export default Frontpage
