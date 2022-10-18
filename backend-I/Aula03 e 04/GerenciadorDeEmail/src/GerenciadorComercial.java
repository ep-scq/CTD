public class GerenciadorComercial extends Gerenciador{
    @Override
    public void verificar(Mail mail) {
        if (mail.getDestino().equalsIgnoreCase("comercial@colmeia.com") ||
                mail.getAssunto().equalsIgnoreCase("Comercial")){
            System.out.println("Enviando ao departamento comercial");
        }else if(this.getSeguinte() != null){
                this.getSeguinte().verificar(mail);
            }

    }
}
