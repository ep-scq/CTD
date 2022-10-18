const { generateText } = require('../listas/util.js');

describe('Validação de texto de saída', () =>{

    test('Saída de nome e idade', () =>{
        const text = generateText('Tiago Gomes', 28);
        expect(text).toBe('Tiago Gomes (28 years old)');
    })
})
