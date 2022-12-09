import { Access } from 'payload/types'
import { User } from '../payload-types'

export const hideToEditors: Access<any, User> = ({ req: { user }, id }) => {
  if (user?.roles.includes('editor') && id === undefined) {
    return false
  }
  return true
}
