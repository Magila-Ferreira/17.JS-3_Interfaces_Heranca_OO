/* 
    SER AUTENTICÁVEL SIGNIFICA TER UM MÉTODO "AUTENTICAR"

    DUCK TYPE - EM LINGUAGENS FRACAMENTE TIPADAS É POSSÍVEL UTILIZAR DIFERENTES TIPOS DE OBJETOS, DESDE QUE POSSUAM AS MESMA PROPRIEDADES
    
    EXEMPLO: o PARÂMETRO_AUTENTICAVEL recebe diferentes objetos:
        diretor, gerente, cliente
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {

        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false;
    } 

    // MÉTODO ESTÁTICO QUE VERIFICA SE, DENTRO DO MÉTODO_AUTENTICAR POSSUI UM OBJETO AUTENTICÁVEL  
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}