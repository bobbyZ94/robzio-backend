import { GlobalConfig } from 'payload/types'
import { isAdminOrEditor } from '../access/isAdmin'
import { DescriptionSettingsContactInformation } from '../components/Description'

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
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'stadt',
      type: 'text',
      label: 'City number(PLZ) and City',
      required: true,
    },
    {
      name: 'strasse',
      type: 'text',
      label: 'Street and house number',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-Mail',
      required: true,
    },
    {
      name: 'mobil',
      type: 'text',
      label: 'Mobilephone number. Optional',
    },
    {
      name: 'telefon',
      type: 'text',
      label: 'Telephone number. Optional',
    },
    {
      name: 'steuer',
      type: 'text',
      label: 'Tax number. Optional',
    },
    {
      name: 'web',
      type: 'text',
      label: 'Inernet adress of website as URL, wie z.B.: "www.website-name.com"',
      required: true,
    },
  ],
}

export default Settings
