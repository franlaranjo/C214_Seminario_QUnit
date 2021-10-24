var calculadora = require('../services/CalculadoraService.js');

QUnit.module('calculadora', function(){
  QUnit.test('soma dois numeros', function (assert) {
    assert.equal(calculadora.somar(1, 2), 3);
  });
  
  QUnit.test('subtrai dois numeros', function (assert) {
    assert.equal(calculadora.subtrair(1, 2), -1);
  });
  
  QUnit.test('divide dois numeros', function (assert) {
    assert.equal(calculadora.dividir(4, 2), 2);
  });
  
  QUnit.test('multiplica dois numeros', function (assert) {
    assert.equal(calculadora.multiplicar(3, 2), 6);
  });  
})
