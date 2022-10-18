public class EmpregadoFactory {
    private static String urlBancoDeDados;

    private static EmpregadoFactory instance;

    private EmpregadoFactory(){}

    public static EmpregadoFactory getInstance() {
        if (instance == null) {
            instance = new EmpregadoFactory();
            urlBancoDeDados = "jdbc::mariadb//localhost";
        }
        return instance;
    }

    public Empregado criarEmpregado(String tipo, String nome) {
        if ("EMP-EXT".equals(tipo)) {
            return new EmpregadoContratado(nome,"sobrenome","arquivo.txt",78,12);
        } else {
            return new EmpregadoRelacaoDep(nome,"sobrenome","arquivo.txt",78);
        }
    }


}
