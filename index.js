import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

// INSTANCIANDO O OBJETO_CONTA_POUPANCA_RICARDO 
const contaPoupancaRicardo = new ContaPoupanca(1001, cliente1, 50);
contaPoupancaRicardo.sacar(10);

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);
