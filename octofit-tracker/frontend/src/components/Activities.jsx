import { apiBase, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadActivities = () => fetch(`${apiBase}/api/activities/`).then(parseJsonResponse)

export default function Activities() {
  return <ResourceList title="Activities" loadItems={loadActivities} />
}