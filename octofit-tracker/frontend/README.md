# Octofit Tracker Frontend

React 19 presentation tier for the Octofit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend uses `import.meta.env.VITE_CODESPACE_NAME` to call the backend at `https://<codespace>-8000.app.github.dev`. If `VITE_CODESPACE_NAME` is unset, API requests safely fall back to `http://localhost:8000`.

## API Resources

The app routes with `react-router-dom` and requests these backend endpoints:

- `/api/activities/`
- `/api/leaderboard/`
- `/api/teams/`
- `/api/users/`
- `/api/workouts/`

Resource views support both plain array responses and paginated responses with a `results` array.
