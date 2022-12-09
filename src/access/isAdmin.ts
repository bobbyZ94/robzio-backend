import { Access, FieldAccess } from 'payload/types'
import { User } from '../payload-types'

export const isAdmin: Access<any, User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'))

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'))

const conditions: User['roles'] = ['admin', 'editor']
export const isAdminOrEditor: Access<any, User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin or editor role
  Boolean(conditions.some((el) => user?.roles?.includes(el)))
