public class Main {
    public static void main(String[] args) {

        EmpregadoFactory empregadoFactory = EmpregadoFactory.getInstance();
        EmpregadoFactory empregadoFactory2 = EmpregadoFactory.getInstance();
        EmpregadoFactory empregadoFactory3 = EmpregadoFactory.getInstance();
        EmpregadoFactory empregadoFactory4 = EmpregadoFactory.getInstance();

        Empregado empregadoExterno = empregadoFactory.criarEmpregado("EMP-EXT", "Rodrigo");
        Empregado empregadoInterno = empregadoFactory.criarEmpregado("EMP-INT", "Cleber");

    }
}