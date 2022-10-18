import com.dh.empresa.model.Empregado;
import com.dh.empresa.model.Empresa;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Empresa> listaEmpresa = new ArrayList<>();

        listaEmpresa.add(new Empresa("Empresa1","16.810.637/0001-83", new Empregado("Denis","Carbone","911.292.560-81",3500)));
        listaEmpresa.add(new Empresa("Empresa2","16.810.637/0002-83", new Empregado("Mozarth","Spier","911.292.560-82",3600)));
        listaEmpresa.add(new Empresa("Empresa3","16.810.637/0003-83", new Empregado("Rafael","Martinez","911.292.560-83",3700)));
        listaEmpresa.add(new Empresa("Empresa4","16.810.637/0004-83", new Empregado("Elissandro","Maciel","911.292.560-84",3800)));

        FileOutputStream fileOutputStream = null;

        try{
            fileOutputStream = new FileOutputStream("Empresas.txt", true);
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);

            objectOutputStream.writeObject(listaEmpresa);

            fileOutputStream.close();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Empresa> listaEmpresa2 = new ArrayList<>();
        FileInputStream fileInputStream = null;

        try{
            fileInputStream = new FileInputStream("Empresas.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);

            listaEmpresa2 = (ArrayList) objectInputStream.readObject();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Empresa empresa : listaEmpresa2) System.out.println(empresa);

    }
}
