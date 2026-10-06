import { buildApiUrl, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadTeams = () => fetch(buildApiUrl('/api/teams/')).then(parseJsonResponse)

export default function Teams() {
  return <ResourceList title="Teams" loadItems={loadTeams} />
}