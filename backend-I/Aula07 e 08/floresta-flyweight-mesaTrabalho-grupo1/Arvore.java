public class Arvore {
    private String tipo;
    private String cor;
    private double altura;
    private double largura;

    public Arvore(String cor) {
        if(cor.equalsIgnoreCase("verde")){
            this.cor = cor;
            this.altura = 200;
            this.largura = 400;
            this.tipo = "Ornamental";
        } else if(cor.equalsIgnoreCase("vermelho")){
            this.cor = cor;
            this.altura = 500;
            this.largura = 300;
            this.tipo = "Frutífera";
        } else if(cor.equalsIgnoreCase("azul")){
            this.cor = cor;
            this.altura = 100;
            this.largura = 200;
            this.tipo = "Florífera";
        }
    }

    public String getTipo() {
        return tipo;
    }

    @Override
    public String toString() {
        return  tipo
                + " " + cor + ", com "
                + altura + "m de altura e "
                + largura + "m de largura.";
    }
}
