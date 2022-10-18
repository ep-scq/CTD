

/*
 * Complete the 'countAnimals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. string[] listOfAnimals
 *  2. string animalToCount - optional
 */

//let listOfAnimals = ["papagaio","mamute","bicho preguiça"];

function countAnimals(listOfAnimals, animalToCount = undefined) {
    let soma = 0;
        for( animal in listOfAnimals){
        if(animalToCount){
           if(animal == animalToCount){
                soma++;
            } 
        }
        else{
            soma++;
        }
        
        
        }
        return soma;
}
console.log(countAnimals (["papagaio","mamute","bicho preguiça"]))

function main() {
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

const listOfAnimalsCount = parseInt(readLine().trim(), 10);

let listOfAnimals = [];

for (let i = 0; i < listOfAnimalsCount; i++) {
    const listOfAnimalsItem = readLine();
    listOfAnimals.push(listOfAnimalsItem);
}

const animalToCount = readLine();

try {
    const result = countAnimals(listOfAnimals, animalToCount);
    ws.write(result + '\n');
} catch (e) {
    ws.write(e.message + '\n');
}

ws.end();
}
