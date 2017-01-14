#!/bin/sh

# Put your OAuth2 codes here.
export GITHUB_CLIENT_ID=
export GITHUB_CLIENT_SECRET=
export GOOGLE_CLIENT_ID=
export GOOGLE_CLIENT_SECRET=
export NODE_ENV=prod_dev

case "$1" in
'defaults')
  docpad run
  ;;
'update')
  docpad update
  ;;
'upgrade')
  docpad upgrade
  ;;
'clean')
  docpad clean
  ;;
'')
  echo "ERROR: No argument provided (defaults|update|upgrade|clean)."
  exit 1
  ;;
esac
exit 0
