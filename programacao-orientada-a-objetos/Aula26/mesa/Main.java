public class Main {
    public static void main(String[] args) {
        Ponto congonhas = new Ponto(-23.62892888890594, -46.66150772835736);
        Ponto digitalHouse = new Ponto(-23.532735927069517, -46.77244521834375);

        Locomover caminhar = new Locomover(new CaminharLocomocao());
        caminhar.locomover(congonhas, digitalHouse);

        Locomover locomover = new Locomover(new AutomovelLocomocao());
        locomover.locomover(congonhas, digitalHouse);

        locomover.setLocomocao(new BicicletaLocomocao());
        locomover.locomover(congonhas, digitalHouse);

        LocomocaoStrategy carro = new AutomovelLocomocao();
        LocomocaoStrategy bike = new BicicletaLocomocao();

        carro.locomover(new Ponto(-15.83619364810611, -47.870043386632176), new Ponto(-3.5167189688821026, -38.485686840920934));
        bike.locomover(new Ponto(-15.83619364810611, -47.870043386632176), new Ponto(-3.5167189688821026, -38.485686840920934));
    }
}
