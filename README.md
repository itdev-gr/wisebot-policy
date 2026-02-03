<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1F1SRtNdbLX_qSnK3GydfFHKNEN1lFY_4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Push to GitHub

Για να δουλεύει το **push από το Cursor** (χωρίς να ανοίγεις Terminal), τρέξε **μία φορά** το script με το GitHub Personal Access Token σου:

```bash
GITHUB_TOKEN=ghp_xxxxxxxxxxxx ./scripts/setup-git-push.sh
```

Δημιούργησε token: **GitHub → Settings → Developer settings → Personal access tokens** (scope: `repo`). Μετά το push θα δουλεύει και από Cursor.
