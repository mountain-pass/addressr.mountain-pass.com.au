variable "site_name" {
  description = "My site"
  default     = "addressr.mountain-pass.com.au"
}

resource "aws_s3_bucket" "logs" {
  bucket = "${terraform.workspace}-${var.site_name}-site-logs"
  acl    = "log-delivery-write"
}

resource "aws_s3_bucket" "site" {
  bucket = "${terraform.workspace}-${var.site_name}"
  acl    = "public-read"

  logging {
    target_bucket = "${aws_s3_bucket.logs.bucket}"
    target_prefix = "${terraform.workspace}-${var.site_name}/"
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {
    Name        = "${terraform.workspace}-${var.site_name}"
    Environment = "${terraform.workspace}"
  }
}

# resource "null_resource" "remove_and_upload_to_s3" {
#   provisioner "local-exec" {
#     command = "aws s3 sync ${path.module}/s3Contents s3://${aws_s3_bucket.site.id}"
#   }
# }

