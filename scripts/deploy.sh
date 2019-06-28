#!/bin/sh

set -e

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"

. ${SCRIPT_DIR}/terraform-base.sh


echo "initialising terraform ..."
${TERRAFORM_BASE} -e TF_WORKSPACE="test" ${TERRAFORM_IMAGE} init
echo "... done initialising terraform"

echo "selecting workspace ${TF_WS} ..."
$TERRAFORM workspace select ${TF_WS} 
echo "... selected"
# # this is needed to force re-deployment, because terraform
# # doesn't do a check to see if the provisioning scripts change.
# if [ -z "${TF_PLAN_ONLY}" -a "$1" != '--destroy' ]; then
#     echo "tainting server \`aws_instance.superlife\` to force recreation ..."
#     $TERRAFORM taint -allow-missing aws_instance.superlife
#     echo "... tainted"
# fi

echo "planning ..."
$TERRAFORM plan -out=plan -input=false $*
echo "... planned"

if [ -z "${TF_PLAN_ONLY}" ]; then
    echo "applying ..."
    $TERRAFORM apply -input=false plan 
    echo "... applied"
fi

