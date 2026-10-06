export const apiBase = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function parseJsonResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}