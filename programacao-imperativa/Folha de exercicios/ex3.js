//3 - Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
    let raio = 10
    let area = (Math.pow(raio, 2) * Math.PI).toFixed(2)
    let perimetro = (2 * Math.PI * raio).toFixed(2)
    console.log("Area da circunferência: " + area)
    console.log("Perímetro da circunferência: " + perimetro)