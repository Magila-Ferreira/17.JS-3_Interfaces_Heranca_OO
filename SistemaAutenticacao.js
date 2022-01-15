/* 
    SER AUTENTICÁVEL SIGNIFICA TER UM MÉTODO "AUTENTICAR"
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    } 
}