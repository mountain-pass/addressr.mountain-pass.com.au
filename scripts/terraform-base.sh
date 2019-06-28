#!/bin/sh

set -e

# TODO Exit with error if any variables contain a '$' dollar sign or '@' at symbols (e.g. DOCKER_ID_PASS!)

if [ -z "${AWS_ACCESS_KEY_ID}" ]; then
    >&2 echo "ERROR: the 'AWS_ACCESS_KEY_ID' environment variable needs to be set to your AWS Access Key Id."
    exit 1
fi

if [ -z "${AWS_SECRET_ACCESS_KEY}" ]; then
    >&2 echo "ERROR: the 'AWS_SECRET_ACCESS_KEY' environment variable needs to be set to your AWS Secret Access Key."
    exit 1
fi


if [ -z "${CLOUDFLARE_EMAIL}" ]; then
    >&2 echo "ERROR: the 'CLOUDFLARE_EMAIL' environment variable needs to be set to your Cloud Flare login email."
    exit 1
fi

if [ -z "${CLOUDFLARE_TOKEN}" ]; then
    >&2 echo "ERROR: the 'CLOUDFLARE_TOKEN' environment variable needs to be set to your Cloud Flare API Key."
    exit 1
fi

if [ -z "${TERRAFORM_TOKEN}" ]; then
    >&2 echo "ERROR: the 'TERRAFORM_TOKEN' environment variable needs to be set to your Terraform Token."
    exit 1
fi

if [ -z "${TF_CLI_CONFIG_FILE}" ]; then
    TF_CLI_CONFIG_FILE=$HOME/.terraformrc
fi

if [ -z "${TF_WS}" ]; then
    TF_WS=test
fi

echo "credentials \"app.terraform.io\" { token=\"${TERRAFORM_TOKEN}\" }" > "${TF_CLI_CONFIG_FILE}"

SCRIPT_DIR="$( cd "$(dirname "$0")" ; pwd -P )"
SCRIPT_PARENT_DIR=`dirname $SCRIPT_DIR`

TF_CLI_CONFIG_FILE_DIR="$( cd "$(dirname "$TF_CLI_CONFIG_FILE")" ; pwd -P )"

TERRAFORM_BASE="docker run -i -t \
    -v $TF_CLI_CONFIG_FILE_DIR:/root \
    -v $PWD:$PWD \
    -w $PWD/deploy \
    -e TF_IN_AUTOMATION=1 \
    -e TF_WS \
    -e TF_LOG \
    -e AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY \
    -e CLOUDFLARE_EMAIL \
    -e CLOUDFLARE_TOKEN \
    -e MONGODB_ATLAS_USERNAME \
    -e MONGODB_ATLAS_API_KEY \
    -e TF_VAR_PORT=80 \
    -e TF_VAR_SSL_PORT=443 \
    " 

TERRAFORM_IMAGE="mountainpass/terraform-runner:1.1.0"

TERRAFORM="${TERRAFORM_BASE} ${TERRAFORM_IMAGE}"
TERRAFORM_INIT="${TERRAFORM_BASE} -e TF_WORKSPACE="${TF_WS}" ${TERRAFORM_IMAGE} init"

