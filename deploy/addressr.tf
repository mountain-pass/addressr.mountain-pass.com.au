variable "domain_name" {
  description = "My site"
  default     = "mountain-pass.com.au"
}

variable "site_name" {
  description = "My site"
  default     = "addressr"
}

resource "aws_s3_bucket" "logs" {
  bucket        = "${terraform.workspace}-${var.site_name}.${var.domain_name}-site-logs"
  acl           = "log-delivery-write"
  force_destroy = true
}

resource "aws_s3_bucket" "site" {
  bucket = "${terraform.workspace}-${var.site_name}.${var.domain_name}"
  acl    = "public-read"

  logging {
    target_bucket = "${aws_s3_bucket.logs.bucket}"
    target_prefix = "${terraform.workspace}-${var.site_name}.${var.domain_name}/"
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {
    Name        = "${terraform.workspace}-${var.site_name}.${var.domain_name}"
    Environment = "${terraform.workspace}"
  }

  #  lifecycle {
  #   create_before_destroy = true
  # }
}

resource "cloudflare_record" "cname" {
  domain  = "${var.domain_name}"
  name    = "${terraform.workspace}-${var.site_name}"
  value   = "${aws_s3_bucket.site.website_endpoint}"
  type    = "CNAME"
  proxied = true
}

output "website_endpoint" {
  value = "${aws_s3_bucket.site.website_endpoint}"
}

output "host" {
  value = "http://${cloudflare_record.cname.hostname}"
}
