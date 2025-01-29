import { createContext } from "react"


export class Attack{
    constructor(image,input, startup, damage, onHit, onBlock){
        this.image = image
        this.input = input
        this.startup = startup
        this.damage = damage
        this.onHit = onHit
        this.onBlock = onBlock
    }
}
