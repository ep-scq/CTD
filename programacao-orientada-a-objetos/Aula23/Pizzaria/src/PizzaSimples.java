public class PizzaSimples extends Pizza{

    private double precoBase;
    private boolean eGrande;


    public PizzaSimples(String nome,
                        String descricao,
                        double precoBase,
                        boolean eGrande) {
        super(nome, descricao);
        this.precoBase = precoBase;
        this.eGrande = eGrande;
    }

    @Override
    public double calculaPreco() {
        return eGrande ? precoBase * 2 : precoBase;

        // if (eGrande) {
        // return precoBrase * 2;
        // }
        // else {
        // return precoBrase;
        // }
    }
}
