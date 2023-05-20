import { Padaria, Padeiro, Confeiteiro, Caixa } from "./classes.js"

console.log('iniciando')

const padariaSantaMaria = new Padaria("Santa Maria", new Padeiro('Miller'), new Confeiteiro('Maik'), new Caixa('Leandro'))
padariaSantaMaria.abrirExpediente()

const padariaDonaMarta = new Padaria("Dona Marta", new Padeiro('Marquinho'), new Confeiteiro('Chico'), new Caixa('Marli'))
padariaDonaMarta.abrirExpediente()