const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function buildApiUrl(path) {
  return `${apiBase}${path.startsWith('/') ? path : `/${path}`}`
}

export async function parseJsonResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export function getResourceItems(data) {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.results)) return data.results
  if (Array.isArray(data?.items)) return data.items
  if (Array.isArray(data?.data)) return data.data

  return []
}