import { apiBase, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadWorkouts = () => fetch(`${apiBase}/api/workouts/`).then(parseJsonResponse)

export default function Workouts() {
  return <ResourceList title="Workouts" loadItems={loadWorkouts} />
}