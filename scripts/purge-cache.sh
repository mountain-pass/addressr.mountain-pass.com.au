#! /bin/sh

curl -X POST "https://api.cloudflare.com/client/v4/zones/6606f9996fdf71704b119c4dafda47d8/purge_cache" \
     -H "X-Auth-Email: ${CLOUDFLARE_EMAIL}" \
     -H "X-Auth-Key: ${CLOUDFLARE_TOKEN}" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'