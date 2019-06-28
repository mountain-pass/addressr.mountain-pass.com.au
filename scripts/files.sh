#! /bin/sh

SRC=$*
COUNT=0

cat << EOM
variable "mime_types" {
  default = {
    htm  = "text/html"
    html = "text/html"
    css  = "text/css"
    js   = "application/javascript"
    map  = "application/javascript"
    json = "application/json"
    png = "image/png"
    jpg = "image/jpeg"
    jpeg = "image/jpeg"
    svg = "image/svg+xml"
    webmanifest = "application/json"
    woff2 = "font/woff2"
    woff = "font/woff"
    ttf = "font/ttf"
    eot = "application/vnd.ms-fontobject"
  }
}
EOM

find $SRC -type f | while read path; do

    cat  << EOM

resource "aws_s3_bucket_object" "file_$COUNT" {
  bucket = "\${aws_s3_bucket.site.bucket}"
  key = "${path#$SRC}"
  source = "$path"
  acl = "public-read"
  content_type = "\${lookup(var.mime_types, "${path##*.}")}"
  etag = "\${filemd5("$path")}"
}
EOM

    COUNT=$(expr $COUNT + 1)

done