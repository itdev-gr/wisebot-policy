#!/bin/sh
# Ρύθμιση credentials ώστε το `git push` να δουλεύει από Cursor (χωρίς Terminal).
# Τρέξε ΜΙΑ ΦΟΡΑ με το GitHub Personal Access Token σου:
#
#   GITHUB_TOKEN=ghp_xxxxxxxxxxxx ./scripts/setup-git-push.sh
#
# Πώς φτιάχνεις token: GitHub → Settings → Developer settings → Personal access tokens → Generate.
# Δώσε του scope: repo.

set -e
DIR=".cursor"
FILE="$DIR/.git-credentials"

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Πρέπει να ορίσεις GITHUB_TOKEN. Παράδειγμα:"
  echo "  GITHUB_TOKEN=ghp_xxxxxxxxxxxx ./scripts/setup-git-push.sh"
  echo ""
  echo "Δημιούργησε token: GitHub → Settings → Developer settings → Personal access tokens."
  exit 1
fi

mkdir -p "$DIR"
echo "https://x-access-token:${GITHUB_TOKEN}@github.com" > "$FILE"
chmod 600 "$FILE"
echo "OK. Τα credentials αποθηκεύτηκαν στο $FILE. Μπορείς πλέον να κάνεις push από Cursor."
