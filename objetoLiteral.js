const user = {
    nome: "Andre",
    email: "andre@gmail.com",
    nascimento: "31/03/1995",
    role: "admin",
    ativo: true,
    exibirInfo: function () {
        console.log(this.nome, this.email, this.nascimento)
    }
}


const admin = {
    nome: "Andre Amaral",
    email: "aa@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado!")
    }
}

// Metodo para o Objeto Admin herdar as propriedades do Objeto User
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfo()