import { apiBase, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadUsers = () => fetch(`${apiBase}/api/users/`).then(parseJsonResponse)

export default function Users() {
  return <ResourceList title="Users" loadItems={loadUsers} />
}