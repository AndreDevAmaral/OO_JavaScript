function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Andre', 'andre@gmail.com')
//console.log(novoUser.exibirInfos())

function Admin(role) {
    //Metodo "CALL" para Admin receber as proprieddades de USer 
    User.call(this, 'Andre', 'a@a')
    this.role = role || 'estudante'
}

//Passando as propriedade do prototype de User para Admin
Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)