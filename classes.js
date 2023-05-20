export class Padaria {
    constructor(nome, padeiro, confeiteiro, caixa) {
        this.nome = nome
        this.padeiro = padeiro
        this.confeiteiro = confeiteiro
        this.caixa = caixa
    }

    abrirExpediente() {
        console.log('\n');
        console.log(`Abrindo expediente da padaria ${this.nome}`)
        //padeiro
        this.padeiro.prepararMassa()
        this.padeiro.assarMassa()
        this.padeiro.colocarPaesNaPrateleira()

        //confeiteiro
        this.confeiteiro.pegarIngredientes()
        this.confeiteiro.baterBolos()
        this.confeiteiro.assarBolos()

        //caixa
        this.caixa.separarTroco()
        this.caixa.abrirCaixa()
    }
}

class Colaborador {
    constructor(nome) {
        this.nome = nome
    }
}

export class Padeiro extends Colaborador {
    prepararMassa() {
        console.log(`[${this.nome}] preparando massa`)
    }

    assarMassa() {
        console.log(`[${this.nome}] assando massa`)
    }

    colocarPaesNaPrateleira() {
        console.log(`colocando paes [${this.nome}] na prateleira`)
    }
}


export class Confeiteiro extends Colaborador {
    pegarIngredientes() {
        console.log(`[${this.nome}] pegando ingredientes`)
    }

    baterBolos() {
        console.log(`[${this.nome}] batendo bolos`)
    }

    assarBolos() {
        console.log(`[${this.nome}] preparando mas`)
    }
}

export class Caixa extends Colaborador {
    separarTroco() {
        console.log(`[${this.nome}] preparando mas`)
    }

    abrirCaixa() {
        console.log(`[${this.nome}] abrindo caixa`)
    }
    
}