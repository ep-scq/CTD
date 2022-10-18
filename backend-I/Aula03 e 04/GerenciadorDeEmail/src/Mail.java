public class Mail {
    private String origem;
    private String destino;
    private String assunto;

    public Mail(String origem, String destino, String assunto) {
        this.origem = origem;
        this.destino = destino;
        this.assunto = assunto;
    }

    public String getOrigem() {
        return origem;
    }

    public String getDestino() {
        return destino;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }


}
