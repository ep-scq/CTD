public class Main {
    public static void main(String[] args) {
        Usuario rodrigo = new Usuario("Rodrigo", "Fazani");

        Usuario alencar = new Usuario("Alencar", "Rodrigues");
        Usuario jessica = new Usuario("Jessica", "Silva");
        Usuario lucas = new Usuario("Lucas", "Gonçalves");
        Usuario andressa = new Usuario("Andressa", "Junior");


        rodrigo.adicionarSeguidor(alencar);
        rodrigo.adicionarSeguidor(lucas);
        rodrigo.adicionarSeguidor(andressa);

        rodrigo.incluir(new AvisarSobreUploadDeFoto());
        rodrigo.incluir(new ContadorDeNotificacoes());

        rodrigo.uploadFoto();

        jessica.incluir(new AvisarSobreUploadDeFoto());
        jessica.incluir(new ContadorDeNotificacoes());
        jessica.uploadFoto();
    }
}