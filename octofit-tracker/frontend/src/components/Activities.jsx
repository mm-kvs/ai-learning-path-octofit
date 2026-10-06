import { buildApiUrl, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadActivities = () => fetch(buildApiUrl('/api/activities/')).then(parseJsonResponse)

export default function Activities() {
  return <ResourceList title="Activities" loadItems={loadActivities} />
}