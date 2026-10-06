import { buildApiUrl, parseJsonResponse } from '../api'
import ResourceList from './ResourceList'

const loadLeaderboard = () => fetch(buildApiUrl('/api/leaderboard/')).then(parseJsonResponse)

export default function Leaderboard() {
  return <ResourceList title="Leaderboard" loadItems={loadLeaderboard} />
}