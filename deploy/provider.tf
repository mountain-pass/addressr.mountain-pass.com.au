provider "aws" {
  version = "~> 2.12"
  region  = "ap-southeast-2"

  //Set AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY env variables
}

provider "cloudflare" {
  version = "~> 1.15"

  //Set CLOUDFLARE_TOKEN and CLOUDFLARE_EMAIL env variables
}
