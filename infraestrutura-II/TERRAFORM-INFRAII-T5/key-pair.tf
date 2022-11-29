resource "aws_key_pair" "elissandro_terraform_key" {
  key_name   = "${var.usuario}-terraform-aws"
  public_key = file("id_rsa.pub")
}