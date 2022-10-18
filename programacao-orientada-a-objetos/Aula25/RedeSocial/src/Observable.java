public interface Observable {

    void notificar(Usuario usuario);

    void incluir(Observador observador);

    void remover(Observador observador);

}
