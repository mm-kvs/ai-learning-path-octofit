import { buildApiUrl, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadUsers = () => fetch(buildApiUrl('/api/users/')).then(parseJsonResponse)

export default function Users() {
  return <ResourceList title="Users" loadItems={loadUsers} />
}