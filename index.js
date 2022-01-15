import {Cliente} from "./Cliente.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 25437510893, 10000);
const gerente = new Gerente("Ricardo", 17845212575, 6000);
const cliente = new Cliente("Laís", 98542578914, "5684");

// SENHAS CADASTRADAS - FUNCIONÁRIOS
diretor.cadastrarSenha("2543");
gerente.cadastrarSenha("1714");
//cliente.cadastrarSenha("5684"); - Método cadastrarSenha não existe na CLASSE_CLIENTE
//O PARÂMETRO_SENHA_CLIENTE é recebido diretamente na autenticação dos logins   

//  AUTENTICAÇÃO LOGINS 
const diretorLogado = SistemaAutenticacao.login(diretor, "2543");
const gerenteLogado = SistemaAutenticacao.login(gerente, "1784"); 
const clienteLogado = SistemaAutenticacao.login(cliente, "5684"); // Último PARÂMETRO  consiste na SENHA_CLIENTE
// A SENHA_CLIENTE É RECEBIDA DIRETAMENTE DO CONSTRUTOR DA CLASSE_CLIENTE

console.log("\n");
console.log(" ********** DIRETOR: ********** ");
console.log(diretorLogado);
console.log(" ********** GERENTE: ********** ");
console.log(gerenteLogado);
console.log(" ********** CLIENTE: ********** ");
console.log(clienteLogado);















































/* import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js"; */

/* const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

// INSTANCIANDO O OBJETO_CONTA_POUPANCA_RICARDO 
const contaPoupancaRicardo = new ContaPoupanca(1001, cliente1, 50);
contaPoupancaRicardo.sacar(10);

// INSTANCIANDO O OBJETO_CONTA_SALÁRIO_RICARDO 
const contaSalarioRicardo = new ContaSalario(120, cliente1, 6000);
contaSalarioRicardo.sacar(500);

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo); */
