public class Ponto {
    private Double latitude;
    private Double longitude;

    public Ponto(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Double calcularDistancia(Ponto pontoFinal) {
            double distancia = Math.abs(this.latitude - pontoFinal.latitude) + Math.abs(this.longitude - pontoFinal.longitude);
            return distancia;
    }


}
