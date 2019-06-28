#!/bin/sh

set -e

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"

. ${SCRIPT_DIR}/terraform-base.sh


echo "initialising terraform ..."
${TERRAFORM_BASE} -e TF_WORKSPACE="test" ${TERRAFORM_IMAGE} init
echo "... done initialising terraform"
