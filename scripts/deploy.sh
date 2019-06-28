#!/bin/sh

set -e

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"

. ${SCRIPT_DIR}/terraform-base.sh

${SCRIPT_DIR}/files.sh $PWD/public > deploy/generated-files.tf

echo "initialising terraform ..."
${TERRAFORM_BASE} -e TF_WORKSPACE="test" ${TERRAFORM_IMAGE} init
echo "... done initialising terraform"

echo "selecting workspace ${TF_WS} ..."
$TERRAFORM workspace select ${TF_WS} 
echo "... selected"

echo "planning ..."
$TERRAFORM plan -out=plan -input=false $*
echo "... planned"

if [ -z "${TF_PLAN_ONLY}" ]; then
    echo "applying ..."
    $TERRAFORM apply -input=false plan 
    echo "... applied"
fi

