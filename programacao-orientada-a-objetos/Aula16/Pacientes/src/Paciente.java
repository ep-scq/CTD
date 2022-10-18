

import java.time.LocalDate;
import java.util.Date;

public class Paciente {
    String nome;
    String sobrenome;
    String historiaClinica;
    LocalDate dataInternacao;
    LocalDate dataAlta;


    Paciente(String nome, String sobrenome, String historiaClinica, LocalDate dataInternacao)
    {   LocalDate hoje= LocalDate.now();
        this.nome=nome;
        this.sobrenome=sobrenome;
        dataAlta=null;
        if (dataInternacao.isBefore(hoje))
        this.dataInternacao=dataInternacao;
    }

    public LocalDate getDataInternacao() {
        return dataInternacao;
    }

    public LocalDate getDataAlta() {
        return dataAlta;
    }

    public void darAlta(LocalDate dataAlta)
    {
        if (dataAlta.isBefore(dataInternacao)) {
            throw new PacienteException("Atenção!!! Data da Alta inferior a data de internação!");
        }
        else {
            System.out.println("Alta OK!");
        }
    }

    public void dataAlta() {
    }

}
