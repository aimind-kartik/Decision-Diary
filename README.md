# Decision Diary

A personalized multi-criteria decision support system for sustainable consumer choices. Users create comparisons, weight their criteria, score alternatives, and receive a transparent recommendation.

## Run locally

```powershell
npm install
npm run dev
```

Other commands: `npm run check`, `npm test`, `npm run build`.

## Features

- Create, edit, search, delete and persist decisions using browser LocalStorage.
- Weighted score: `Σ(score × weight) / Σ(weights)`, ranked to two decimals.
- Dashboard, comparison, history, sustainability, and settings screens.
- Demonstration data can be restored from Settings.

Environmental scores are user-entered evaluations, not independently verified.
