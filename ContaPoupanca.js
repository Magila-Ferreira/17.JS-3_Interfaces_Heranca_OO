import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, cliente, saldoInicial) {
        // HERANÇA DAS PROPRIEDADES AGÊNCIA_CLIENTE_SALDO-INICIAL DA CLASSE_CONTA
        super(agencia, cliente, saldoInicial);
    }
}