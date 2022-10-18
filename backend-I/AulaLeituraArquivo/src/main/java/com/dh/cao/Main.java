package com.dh.cao;

import com.dh.cao.model.Cao;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Cao> listaCao = new ArrayList<>();

        listaCao.add(new Cao("Pluto", 14));
        listaCao.add(new Cao("Buchecha", 8));
        listaCao.add(new Cao("Snoopy", 10));

        //Salvando dentro de uma lista
        FileOutputStream fileOut = null;

        try{
            fileOut = new FileOutputStream("cachorro.txt");
            ObjectOutputStream objectOut = new ObjectOutputStream(fileOut);

            objectOut.writeObject(listaCao);

            fileOut.close();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        //Recuperando dados

        List<Cao> listCao2 = new ArrayList<>();
        FileInputStream fileInput = null;

        try{
            fileInput = new FileInputStream("cachorro.txt");
            ObjectInputStream objectInput = new ObjectInputStream(fileInput);

            listCao2 = (ArrayList) objectInput.readObject();

            fileInput.close();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Cao cao : listCao2){
            System.out.println(cao.getNome() + " : " + cao.getIdade());
        }

    }
}
