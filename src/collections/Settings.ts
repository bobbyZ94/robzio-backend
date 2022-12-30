import { GlobalConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'
import { DescriptionSettingsMetadata, DescriptionSettingsContactInformation } from '../components/Description'

const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Settings',
  access: {
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  graphQL: {
    name: 'Settings',
  },
  fields: [
    {
      type: 'ui',
      name: 'description',
      admin: {
        components: {
          Field: DescriptionSettingsContactInformation,
        },
      },
    },
    {
      name: 'owner',
      label: 'Name of Owner',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      label: 'Name of Company. Optional',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
      label: 'City number(PLZ) and City',
      required: true,
    },
    {
      name: 'street',
      type: 'text',
      label: 'Street and house number',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail',
      required: true,
    },
    {
      name: 'mobile',
      type: 'text',
      label: 'Mobilephone number. Optional',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telephone number. Optional',
    },
    {
      name: 'tax',
      type: 'text',
      label: 'Tax number. Optional',
    },
    {
      type: 'ui',
      name: 'description',
      admin: {
        components: {
          Field: DescriptionSettingsMetadata,
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title of website',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Short description of website',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author of website',
      required: true,
    },
    {
      name: 'keywords',
      type: 'text',
      label: 'List of keywords for SEO. Seperate keywords with comma. E.g.: title, wedothis, wedothat',
      required: true,
    },
    {
      name: 'web',
      type: 'text',
      label: 'Inernet adress of website as URL, e.g. : "www.website-name.com"',
      required: true,
    },
  ],
}

export default Settings
