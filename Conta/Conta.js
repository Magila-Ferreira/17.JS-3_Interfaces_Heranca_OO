// CLASSE ABSTRATA
export class Conta {
    constructor(agencia, cliente, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error("Classe Abstrata! Não é possível instanciar um objeto para a classe Conta");
        }

        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // MÉTODO ABSTRATO
    sacar(valor) {
        throw new Error("Método Abstrato! É preciso sobscrever o método dentro da classe que deseja usá-lo.");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}