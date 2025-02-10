import { createContext } from "react"

export class result {
    constructor(attack1, attack2, adv){
        if(attack1 == null){
            if(attack2 != null){
                this.counter = false
                this.winner = 2
                this.adv = attack2.onHit * -1
                this.text = "Enemy hit"
                this.color = "red"
            }else{
                this.counter = false
                this.winner = 0
                this.adv = 0
                this.text = " "
                this.color = "white"
            }
        }else{
            if(attack1 != null && attack1.startup <= adv){
                this.counter = true
                this.winner = 1
                this.adv = attack1.onHit
                this.text = "You Punish hit"
                this.color = "green"
            }else if(attack2 != null && attack2.startup <= (-1 * adv)){
                this.counter = true
                this.winner = 2
                this.adv = attack2.onHit
                this.text = "Enemy Punish hit"
                this.color = "red"
            }else if(attack2 == null){
                this.counter = false
                this.winner = 1
                this.adv = attack1.onHit
                this.text = "You hit"
                this.color = "green"
            }else if (attack2.startup - adv == attack1.startup){
                this.counter = false
                this.winner = 0
                this.adv = 0
                this.text = "Attacks trade"
                this.color = "grey"
            }else{
                if(attack1.startup - adv < attack2.startup){
                    if(attack2.input == "block"){
                        this.winner = 1
                        this.counter = false
                        this.adv = attack1.onBlock
                        this.text = "Enemy blocked"
                        this.color = "white"
                    }else{
                        this.counter = true
                        this.winner = 1
                        this.adv = attack1.onHit + 2
                        this.text = "you counter hit"
                        this.color = "green"
                    }
                }else{
                    if(attack1.input == "block"){
                        this.winner = 2
                        this.counter = false
                        this.adv = attack2.onBlock * -1
                        this.text = "you block"
                        this.color = "white"
                    }else{
                        this.counter = true
                        this.winner = 2
                        this.adv = (attack2.onHit + 2) * -1
                        this.text = "Enemy counter hit"
                        this.color = "red"
                    }
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
        return new result(attack1, attack2, adv)
    }
}
