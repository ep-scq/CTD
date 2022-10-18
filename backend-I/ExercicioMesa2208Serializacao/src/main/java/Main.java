import com.dh.model.Contato;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {


        List<Contato> listaContato = new ArrayList<>();

        listaContato.add(new Contato("Mozath","123@dh.com","12345678"));
        listaContato.add(new Contato("Lucas","1234@dh.com","123456789"));
        listaContato.add(new Contato("Rafael","12345@dh.com","1234567890"));
        listaContato.add(new Contato("Elissandro","123456@dh.com","12345678901"));

        //Salvando os dados da lista no arquivo

        FileOutputStream fileOutputStream = null;

        try{
            fileOutputStream = new FileOutputStream("Contatos.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);

            objectOutputStream.writeObject(listaContato);

            fileOutputStream.close();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        //Recuperando os dados do arquivo criado anteriomente

        List<Contato> listaContato2 = new ArrayList<>();
        FileInputStream fileInputStream = null;

        try{
            fileInputStream = new FileInputStream("Contatos.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);

            listaContato2 = (ArrayList) objectInputStream.readObject();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Contato contato : listaContato2) System.out.println(contato);

    }
}
