import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class Programa {

    public static void main(String[] args) {

        List<Funcionario> funcionarioList = new ArrayList<>();


        Funcionario f1 = new Funcionario("Jorge","Machado","321.544.897-10",2254.12);
        Funcionario f2 = new Funcionario("Ana","Bitencourt","547.889.631-55",3450.65);
        Funcionario f3 = new Funcionario("Patrick","Moraes","444.654.985-87",6541.50);
        Funcionario f4 = new Funcionario("Paula","Moura","411.541.887-50",5200.40);


        funcionarioList.add(f1);
        funcionarioList.add(f2);
        funcionarioList.add(f3);
        funcionarioList.add(f4);

        Empresa e1 = new Empresa("02.521.652/0001-95","DH School",funcionarioList);

        // Salvando as coleções
        FileOutputStream fo1 = null;
        try {
            fo1 = new FileOutputStream("OutputFileEmp.txt");
            ObjectOutputStream dos = new ObjectOutputStream(fo1);
            dos.writeObject(e1);

            fo1.close();
        } catch (FileNotFoundException e) {
            System.out.println("ERROR:" + e.getMessage());
        }catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
        }
//
//        FileOutputStream fo2 = null;
//        try {
//            fo2 = new FileOutputStream("OutputFileFunc.txt");
//            ObjectOutputStream dos = new ObjectOutputStream(fo2);
//            dos.writeObject(funcionarioList);
//
//        } catch (FileNotFoundException e) {
//            System.out.println("ERROR:" + e.getMessage());
//        }catch (Exception e) {
//            System.out.println("ERROR:" + e.getMessage());
//        }

        // recuperando as coleções dos arquivos
        Empresa e2 = null;
        FileInputStream fi1 = null;
        try {
            fi1 = new FileInputStream("OutputFileEmp.txt");
            ObjectInputStream objectInput = new ObjectInputStream(fi1);

            e2 = (Empresa) objectInput.readObject();
            fi1.close();
        } catch (FileNotFoundException e) {
            System.out.println("ERROR:" + e.getMessage());
        }catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
        }
        System.out.println(e2.getCNPJ() + " - " +
                e2.getRazaoSocial());
        for(Funcionario func: e2.getFuncionarioList())
            System.out.println(func.getNome() + " " +
                    func.getSobrenome() + " - " +
                    func.getCpf() + " - " +
                    func.getSalario());



        //Começando a escrever funcionario editado
        FileWriter arq = null;
        try {
            arq = new FileWriter("funcionarioEditado.txt");
            PrintWriter gravarArq = new PrintWriter(arq);
            for (Funcionario funcionario : funcionarioList) {
                gravarArq.println(funcionario.getNome() + " " +
                        funcionario.getSobrenome() + " - " +
                        funcionario.getCpf() + " - " +
                        funcionario.getSalario()+"");

            }

            gravarArq.println("Hoje caiu um pé de agua");

            arq.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<String>linhas = new ArrayList<>();
        try {
           linhas = Files.readAllLines(Path.of("funcionarioEditado.txt"));
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Imprimindo Linhas do arquivo");
        for(String linha : linhas)
            System.out.println(linha);


    }

}
