import java.util.ArrayList;
import java.util.List;

public class PizzaComposta extends Pizza{

    private List<Pizza> pizzas;
    //ENCAPSULAMENTO LIST (INTERFACE) < TIPO/CLASSE > NOME_VARIAVEL

    public PizzaComposta(String nome, String descricao) {
        super(nome, descricao);
        this.pizzas = pizzas;
    }

    public void adicionarPizza(Pizza pizzaSimples) {
        if (pizzas == null) {
            this.pizzas = new ArrayList<>();
        }
        if (pizzas.size() >= 2){
            throw new IllegalArgumentException();
        }

        pizzas.add(pizzaSimples);

    };

    @Override
    public double calculaPreco() {
        double valor = 0;

        this.pizzas.forEach(System.out::println);

        for (Pizza pizza : this.pizzas) {
            valor += pizza.calculaPreco();
        }
        return valor / this.pizzas.size();
    }

}
