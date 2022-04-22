import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new Admin('Andre', 'a@a', '31/03')
console.log(novoUser.exibirInfos())
novoUser.nome = 'Nair'
console.log(novoUser.exibirInfos())
/*
console.log("-------------------------------------------")

const novoAdmin = new Admin('Andre', 'asadsa', '232')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('PHP', 20))

console.log("-------------------------------------------")
const novoEstudante = new Docente('Nair', 'asd@sad', '132131')
console.log(novoEstudante)
console.log(novoEstudante.exibirInfos())
console.log(novoEstudante.aprovaEstudante('Nair', 'Português')) */