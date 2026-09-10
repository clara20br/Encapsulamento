export class Aluno{
    #id;
    #nome;
    #senha;
    constructor(id,nome,senha){
        this.#id = id;
        this.nome = nome;
        this.senha = senha;
    }
    get id(){
        return "id: " + this.#id;
    }
    set nome(nome){
        this.#nome = nome;

    }
    get nome(){
        return this.#nome;
    }
    set senha(senha){
        if(senha.length == 6){
            this.#senha = senha;
        }else{
            throw new Error("Senha Invalida: ela deve possuir 6 caracteres!");
        }
    }
    get senha(){
        return this.#senha;
    }
    info(){
        return "id: " + this.#id + " - nome:" + this.#nome +" - senha:"+this.#senha;
    }



}