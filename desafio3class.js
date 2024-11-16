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

const hero1 = new hero("caio", 23, "guerreiro");
const hero2 = new hero("rafael", 27, "mago");
const hero3 = new hero("gabriel", 23, "monge");
const hero4 = new hero("eduardo", 23, "ninja");


hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()