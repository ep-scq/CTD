import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Casas casa = new Casas(1, "Rua x, 25", LocalDate.of(2022,01,01), LocalDate.of(2022,05,01), LocalDate.of(2022,06,22), 300.0, 3, 4);

        System.out.println(casa);

    }
}
