#!/bin/bash

# Put your OAuth2 codes here.
export GITHUB_CLIENT_ID=
export GITHUB_CLIENT_SECRET=
export GOOGLE_CLIENT_ID=
export GOOGLE_CLIENT_SECRET=
export NODE_ENV=prod_dev

case "$1" in
'run')
  docpad run ${*:2}
  ;;
'install')
  docpad install ${*:2}
  ;;
'uninstall')
  docpad uninstall ${*:2}
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
  echo "ERROR: No argument provided (run|install|uninstall|update|upgrade|clean)."
  exit 1
  ;;
esac
exit 0
