# portofolio-cv

Portfolio dan CV interaktif yang dibangun dengan Vue.js dan Vite.

## Struktur Proyek

```
interactive-cv/
├── api/                    # Serverless functions untuk Vercel
│   ├── education.js
│   ├── skills.js
│   ├── projects.js
│   └── index.js
├── backend/               # Data dan Express server
│   ├── data.js
│   ├── index.js
│   └── package.json
├── frontend/             # Vue.js application
│   ├── src/
│   ├── public/
│   └── package.json
└── vercel.json          # Vercel configuration
```

## Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### API (Local)
```bash
vercel dev
```

## Deployment

Proyek ini di-deploy ke Vercel dengan:
- Frontend: Vue.js + Vite
- API: Serverless functions di folder `/api`
- Data: Centralized di `backend/data.js`