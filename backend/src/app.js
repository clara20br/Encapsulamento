/*
import { Usuario } from "./models/Usuario.js";

const usuario = new Usuario(1, 'Juliano Alves', "123")
console.log(usuario.info());
usuario.isAdmin = false;
usuario.senha = "9832552";
console.log(usuario.info());


// encapsular senha, validação ára que receba pelo menos 6 caracteres

*/

import { Aluno } from "./models/Aluno.js";

try{
    const aluno = new Aluno(1, "Pedro Alves", "123456");
    console.log(aluno.info())
    aluno.senha = "1234"
    console.log(aluno.info())
}catch(e){
    console.log(e.message)

}