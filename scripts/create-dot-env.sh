#! /bin/sh


echo "AUTH0_DOMAIN=${AUTH0_DOMAIN}" > .env.production
echo "AUTH0_CLIENTID=${AUTH0_CLIENTID}" >> .env.production
echo "AUTH0_CALLBACK=${AUTH0_CALLBACK}" >> .env.production
echo "AUTH0_LOGGED_OUT=${AUTH0_LOGGED_OUT}" >> .env.production