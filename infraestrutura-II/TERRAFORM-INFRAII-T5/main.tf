provider "aws" {
  region = "us-east-2"
  access_key = "AKIAV4YTWNKPKZSH6DTK"
  secret_key = "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"
}

resource "aws_instance" "nome_do_recurso_terraform" {
    count = 1
  ami = "ami-00d96996f01c223a0"
  instance_type = "t2.micro"
  key_name = "elissandro-terraform-aws"
  tags = {
    "Name" = "elissandro-${count.index}"
  }
}

resource "aws_key_pair" "elissandro_terraform_key" {
  key_name = "elissandro-terraform-aws"
  public_key = file("terraform-aws.pub")
}

