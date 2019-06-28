#!/bin/sh

set -e

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"

TF_PLAN_ONLY=1 ${SCRIPT_DIR}/deploy.sh $*

