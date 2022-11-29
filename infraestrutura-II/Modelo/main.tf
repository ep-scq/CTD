terraform {
  required_version = "~>1.3.2"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      //version é opcional, se não setar, pega a versão mais atual
      version = "4.36.1"
    }
  }
}

provider "aws" {
  region = "us-east-2"
  //profile = "pt5aluno53" - criar um profile diferente no arquivo credentials na pasta .aws
}

resource "aws_vpc" "modelo-vpc" {
  cidr_block = "172.16.0.0/20"
  //As duas linhas abaixo é opcional
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags = {
    Name = var.modelo-vpc
  }
}

resource "aws_subnet" "modelo-subrede-publica" {
  vpc_id     = aws_vpc.modelo-vpc.id
  cidr_block = "172.16.15.0/24"
  //Linhas abaixo são opcionais
  availability_zone       = "us-east-2b"
  map_public_ip_on_launch = true //por padrão ele ja vem true
  tags = {
    Name = "Modelo Sub-rede pública"
  }
}

resource "aws_network_interface" "placa-modelo-vpc" {
  subnet_id = aws_subnet.modelo-subrede-publica.id
  //Linhas abaixo é opcional, para setar ip na placa de rede.
  private_ips     = ["172.16.15.150"]
  security_groups = [aws_security_group.SG-modelo.id]

  tags = {
    Name = "placa-modelo-vpc"
  }
}

resource "aws_security_group" "SG-modelo" {
  name        = "SG-modelo"
  description = "Firewal"
  vpc_id      = aws_vpc.modelo-vpc.id

  ingress {
    description      = "SSH from VPC"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTP from VPC"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "SG-modelo"
  }
}

resource "aws_internet_gateway" "IGW-modelo" {
  vpc_id = aws_vpc.modelo-vpc.id
  tags = {
    Name = "IGW-modelo"
  }
}

resource "aws_route_table" "Public_RT" {
  vpc_id = aws_vpc.modelo-vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.IGW-modelo.id
  }
  tags = {
    Name = "Public Routing Table"
  }
}

resource "aws_route_table_association" "Public_RT_Association" {
  subnet_id      = aws_subnet.modelo-subrede-publica.id
  route_table_id = aws_route_table.Public_RT.id
}

resource "aws_key_pair" "deployer" {
  key_name   = "modelo-key"
  public_key = file("./keys/id_rsa.pub")
}

resource "aws_instance" "Modelo-WebSite" {
  instance_type = "t2.micro"
  ami           = data.aws_ami.ubuntu_last.id
  key_name      = aws_key_pair.deployer.key_name
  monitoring    = true

  network_interface {
    network_interface_id = aws_network_interface.placa-modelo-vpc.id
    device_index         = 0
  }

  tags = {
    Name        = "${var.aluno}_${var.name_instacia}"
    Provisioner = "TerraForm"
  }
  user_data = <<-EOF
    #!/bin/bash
    sudo apt update
    sudo apt upgrade -y
    sleep 10
    sudo apt update
    EOF
}

data "aws_ami" "ubuntu_last" {
  most_recent = true

  //Filtros para buscar a imagem na aws
  filter {
    //Esta pesquisando pelo nome porque se eu pegar o id da ami o codigo vai mudar de uma região
    //para outra caso eu use esse código em outra região.
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  //ID do dono para buscar uma imagem oficial da canonica(proprietaria oficial do ubuntu)
  owners = ["099720109477"]
}

output "public_ip" {
  value = aws_instance.Modelo-WebSite.public_ip
}

# terraform init - baixar os modulos do terraform baseado nos seus arquivos
# terraform plan - mostrar o plano a ser feito
# terraform apply - vai aplicar o plano ou seja vai contruir tudo se não tiver erro
# terraform destroy - acabou, já era boa sorte
# terraform output - mostra as saidas do output
# terraform show - mostra como está a sua infra

#ssh -i pasta/nome-da-chave usuario@IP-ou-DNS
# o do professor é: ssh -i .ssh/terraform-aws ubuntu@3.141.85.40
