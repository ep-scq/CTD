provider "aws" {
  region     = "us-east-2"
  access_key = ""
  secret_key = ""
}

resource "aws_instance" "nome_do_recurso_terraform" {
  count         = 1
  ami           = "ami-00d96996f01c223a0"
  instance_type = "t2.micro"
  key_name      = "elissandro-terraform-aws"
  tags = {
    "Name" = "elissandro-${count.index}"
  }
}

resource "aws_key_pair" "elissandro_terraform_key" {
  key_name   = "elissandro-terraform-aws"
  public_key = file("terraform-aws.pub")
}

# terraform init - baixar os modulos do terraform baseado nos seus arquivos
# terraform plan - mostrar o plano a ser feito
# terraform apply - vai aplicar o plano ou seja vai contruir tudo se não tiver erro
# terraform destroy - acabou, já era boa sorte
# terraform output - mostra as saidas do output
# terraform show - mostra como está a sua infra

# ssh -i pasta/nome-da-chave usuario@IP-ou-DNS
# ssh -i .ssh/terraform-aws ubuntu@3.141.85.40