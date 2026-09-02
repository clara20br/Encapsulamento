import { Usuario } from "./models/Usuario.js";

const usuario = new Usuario(1, 'Juliano Alves', "123")
console.log(usuario.info());
usuario.isAdmin = false;
usuario.senha = "9832552";
console.log(usuario.info());


// encapsular senha, validação ára que receba pelo menos 6 caracteres