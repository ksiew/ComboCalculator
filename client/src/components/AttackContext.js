import { createContext } from "react"

export class result {
    constructor(attack1, attack2, adv){
        if(attack1 == null){
            if(attack2 != null){
                this.counter = false
                this.winner = 2
                this.adv = attack2.onHit
            }
        }else{
            if(attack2 == null){
                this.counter = false
                this.winner = 1
                this.adv = attack1.onHit
            }else if (attack2.startup == attack1.startup){
                this.counter = false
                this.winner = 0
                this.adv = 0
            }else{
                this.counter = true
                if(attack1.startup + adv > attack2.startup){
                    this.winner = 1
                    this.adv = attack1.onHit + 2
                }else{
                    this.winner = 2
                    this.adv = attack2.onHit + 2
                }
            }
        }
        this.attack1= attack1
        this.attack2= attack2
    }
}

export class Attack{
    constructor(image,input, startup, damage, onHit, onBlock){
        this.image = image
        this.input = input
        this.startup = startup
        this.damage = damage
        this.onHit = onHit
        this.onBlock = onBlock
    }

    static compare(attack1, attack2, adv=0){
        if(attack1 == null && attack2 == null) return null
        return new result(attack1, attack2, adv)
    }
}
