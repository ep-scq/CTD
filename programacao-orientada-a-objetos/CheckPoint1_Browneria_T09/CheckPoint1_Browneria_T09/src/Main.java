import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {


        Cliente luis = new Cliente("Luis Silva", "(11)9999-88888");
        Produto sabores = new Produto(012, 4.00, "Nozes", 40, "Coco", 50);
        Pedido pedido1 = new Pedido(001, luis, sabores, 90, true, LocalDate.of(2022, 06, 17));
        System.out.println(pedido1);
        pedido1.detalhesPedido();

        Browneria browneria = new Browneria("Ao2", "89.345.370/0001-74", sabores, pedido1);
        System.out.println(browneria);

    }
}