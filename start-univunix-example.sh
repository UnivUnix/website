#!/bin/bash

# Put your OAuth2 codes here.
export GITHUB_CLIENT_ID=
export GITHUB_CLIENT_SECRET=
export GOOGLE_CLIENT_ID=
export GOOGLE_CLIENT_SECRET=
export NODE_ENV=development

DOCPAD=node_modules/docpad/bin/docpad

case "$1" in
'run')
  "$DOCPAD" run "${*:2}"
  ;;
'install')
  "$DOCPAD" install "${*:2}"
  ;;
'uninstall')
  "$DOCPAD" uninstall "${*:2}"
  ;;
'update')
  "$DOCPAD" update
  ;;
'upgrade')
  "$DOCPAD" upgrade
  ;;
'clean')
  "$DOCPAD" clean
  ;;
'')
  echo "ERROR: No argument provided (run|install|uninstall|update|upgrade|clean)."
  exit 1
  ;;
esac
exit 0
