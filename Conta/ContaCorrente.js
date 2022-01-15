import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    
    constructor(agencia, cliente) {
        // HERANÇA DAS PROPRIEDADES AGÊNCIA_CLIENTE DA CLASSE_CONTA
        super(agencia, cliente, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    // MÉTODO SOBRESCREVE O COMPORTAMENTO PADRÃO_SACAR DA CLASSE_CONTA
    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
