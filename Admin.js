import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nome, vagas) {
        return `Curso de ${nome} criado com ${vagas} vagas!`
    }
}


