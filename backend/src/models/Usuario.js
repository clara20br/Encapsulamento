export class Usuario{
    #id
    nome
    #senha
    #isAdmin
    constructor(id,nome,senha){
        this.#id = id;
        this.nome =nome;
        this.senha =senha;
        this.isAdmin = true
    }
    get id(){
        return this.#id;
    }
    set senha(novaSenha){
        if(typeof novaSenha === 'string' && novaSenha.length >= 6 ){
            this.#senha = novaSenha;
        }else{
            console.log("Senha Invalida, Ela é menor que 6 digidos")
        }
    }
    get senha(){
        return this.#senha;
    }


    set isAdmin(status){
        if(typeof status === 'boolean'){
            this.#isAdmin = status;
        }else{
            console.log("Valor Inválido")
        }
    }

    get isAdmin(){
        return;
    }

    info(){
        return "Id: "+ this.#id + " Nome: " + this.nome + " Senha: "  + this.#senha + " Status Atual: " +this.#isAdmin
    }
}