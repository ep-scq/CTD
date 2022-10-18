public class ContadorDeNotificacoes implements Observador {

    private static Long contador = 0L;

    @Override
    public String atualizar(Usuario usuario) {
        if (usuario.getSeguidores() == null) {
            return usuario.getNome() + " não tem seguidores para serem notificados para a contagem";
        }
            contador += usuario.getSeguidores().size();
        return "\nQuantidade de seguidores notificados é: " + contador;
    }
}
