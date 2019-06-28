#!/bin/sh

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"

. ${SCRIPT_DIR}/terraform-base.sh

${TERRAFORM} $*