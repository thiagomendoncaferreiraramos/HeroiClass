class Heroi {
    constructor(nome, idade, tipo, forca) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.forca = forca;
    }

    _ataque() { // método "privado" por convenção
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            case "padre monge":
                return "rosário";
            default:
                return "ataques aleatórios";
        }
    }

    atacou() {
        console.log(`O ${this.tipo} atacou usando ${this._ataque()}!`);
    }

    apresentacao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let padrePio = new Heroi("Padre Pio", 50, "padre monge", 1000);

padrePio.apresentacao()
padrePio.atacou();

let chapolin = new Heroi("Chapolin Colorado", 30, "inseto", 500)

chapolin.apresentacao()
chapolin.atacou()

let harryPotter = new Heroi("Harry Potter", 16, "mago", 500)
harryPotter.apresentacao()
harryPotter.atacou()

let reiArthur = new Heroi("Rei Arthur", 32, "guerreiro", 373)
reiArthur.apresentacao()
reiArthur.atacou()

let naruto = new Heroi("Naruto Uzumaki", 12, "ninja", 777)
naruto.apresentacao()
naruto.atacou()

console.log("---------------------------")

let listaDeHerois = [harryPotter,naruto,reiArthur,chapolin,padrePio]

for (i = 0; i < listaDeHerois.length; i++){
    listaDeHerois[i].apresentacao()
    listaDeHerois[i].atacou()
}

console.log("Vamos lá!");
