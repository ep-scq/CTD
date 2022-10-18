import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente("Rodrigo", "de Maria", "362632", 300);
        try {
            cliente.comprar(400d);
        }
        catch (ClientesException exception) {
            System.out.println(exception.getMessage());
            System.out.println("Operação não foi realizada valor solicitado: " + 400d);
        }
    }
}