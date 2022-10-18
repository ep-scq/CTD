const { soma } = require('../calc.js');

describe('Testes de soma', () =>{

    test('Soma de dois numeros', () =>{
        expect(soma(1,2)).toBe(3);
    })

    test('Soma de dois zeros', () =>{
        expect(soma(0,0)).toBe(0);
    })
    
    test('Soma de nulos', () =>{
        expect(soma(null,null)).toBe(0);
    })

    test('Soma de strings', () =>{
        expect(soma("a","b")).toBe("ab");
    })

});
