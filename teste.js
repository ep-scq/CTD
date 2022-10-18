function makeItBark(name) {
    function Dog (name) {
        this.name = name;
    }

    Dog.bark = function () {
        return this.name + ' says woof hey';
    };

    let scooby = new Dog(name);
    return Dog.bark();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const name = readLine();

    const result = makeItBark(name);

    ws.write(result + '\n');

    ws.end();
}