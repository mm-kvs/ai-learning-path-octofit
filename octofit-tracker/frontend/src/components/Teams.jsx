import { apiBase, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadTeams = () => fetch(`${apiBase}/api/teams/`).then(parseJsonResponse)

export default function Teams() {
  return <ResourceList title="Teams" loadItems={loadTeams} />
}