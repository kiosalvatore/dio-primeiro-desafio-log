class hero {
    constructor(name, idade, tipo){
        this.name = name; 
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){

        if(this.tipo == "guerreiro"){
            console.log(`o ${this.tipo} atacou usando espada`)
        } else if(this.tipo == "mago") {
            console.log(`o ${this.tipo} atacou usando magia`)
        } else if(this.tipo == "monge") {
            console.log(`o ${this.tipo} atacou usando artes marciais`)
        } else if(this.tipo == "ninja") {
            console.log(`o ${this.tipo} atacou usando shurikens`)
        } else {
            console.log(`o atacante atacou usando as mãos`)
        }
    }
}

let heroAttack = new hero("caio", 23, "monge");

heroAttack.atacar()