import { createContext } from "react"

export class Attack{
    constructor(image,attack, startup, damage, onHit, onBlock){
        this.image = image
        this.attack = attack
        this.startup = startup
        this.damage = damage
        this.onHit = onHit
        this.onBlock = onBlock
    }
}
