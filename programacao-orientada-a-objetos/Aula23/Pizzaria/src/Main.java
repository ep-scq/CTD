public class Main {
    public static void main(String[] args) {
        Pizza mussarela = new PizzaSimples("Pizza Mussarela", "Uma ótima pizza", 700d, false);
        Pizza especial = new PizzaSimples("Pizza Especial", "Boa", 850d, false);
        Pizza abacaxi = new PizzaSimples("Pizza Abacaxi", "Rústica", 950d, false);

        Pizza combinacaoMaluca = new PizzaComposta("Combinação maluca","Uma combinação maluca");

        ((PizzaComposta) combinacaoMaluca).adicionarPizza(abacaxi);
        ((PizzaComposta) combinacaoMaluca).adicionarPizza(especial);

        System.out.println(combinacaoMaluca.calculaPreco());
    }
}
