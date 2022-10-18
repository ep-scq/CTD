import java.util.ArrayList;
import java.util.List;

public class Usuario implements Observable, UploadDeImagens {

    //OBSERVABLE == EMISSOR/PUBLICADOR
    //OBSERVADOR == RECEPTOR/OUVINTE
    private List<Observador> observadores;
    private String nome;
    private String sobrenome;
    private boolean temFotoPerfil;

    private List<Usuario> seguidores;

    public Usuario(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public void uploadFoto() {
        //LOGICA ABSTRAIDA PARA UPLOAD DE IMAGENS
        System.out.println("Usuário fez o upload da imagem");
        this.temFotoPerfil = true;
        notificar(this);

    }

    @Override
    public void notificar(Usuario usuario) {
        for (Observador observador : this.observadores){
            System.out.println(observador.atualizar(usuario));
        }
    }

    @Override
    public void incluir(Observador observador) {
        if (this.observadores == null) {
            this.observadores = new ArrayList<>();
        }
        this.observadores.add(observador);
    }

    @Override
    public void remover(Observador observador) {
        this.observadores.remove(observador);
    }

    public void adicionarSeguidor(Usuario usuario){
        if (this.seguidores == null) {
            this.seguidores = new ArrayList<>();
        }
        this.seguidores.add(usuario);
    }


    public List<Observador> getObservadores() {
        return observadores;
    }

    public void setObservadores(List<Observador> observadores) {
        this.observadores = observadores;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    //IS, HAS, HAVE (VERDADEIRO OU FALSO)
    public boolean isTemFotoPerfil() {
        return temFotoPerfil;
    }

    public void setTemFotoPerfil(boolean temFotoPerfil) {
        this.temFotoPerfil = temFotoPerfil;
    }

    public List<Usuario> getSeguidores() {
        return seguidores;
    }

    public void setSeguidores(List<Usuario> seguidores) {
        this.seguidores = seguidores;
    }
}
