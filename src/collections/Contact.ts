import { GlobalConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'

const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact',
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  graphQL: {
    name: 'Contact',
  },
  fields: [
    {
      name: 'text',
      label: 'Text on contact page.',
      type: 'textarea',
      required: true,
    },
  ],
}

export default Contact
