public class AvisarSobreUploadDeFoto implements Observador {

    @Override
    public String atualizar(Usuario usuario) {
        if (usuario.getSeguidores() == null) {
            return usuario.getNome() + " não tem seguidores para serem notificados";
        }
        for (Usuario seguidor : usuario.getSeguidores()) {
            System.out.println("Usuario " + usuario.getNome() + " postou uma foto e notificamos o seguidor(a) " + seguidor.getNome());
        }
        return "\nTodos os seguidores foram notificados\n";
    }
}

//%s string, %d integer
//System.out.printf("Usuario %s postou uma foto e notificamos o seguidor %s%n", usuario.getNome(), seguidor.getNome());
//String.format()