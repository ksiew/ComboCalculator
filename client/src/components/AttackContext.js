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

    static compare(attack1, attack2){
        if(attack1 == null){
            if(attack2 != null){
                return -1
            }else{
                return null
            }
        }else{
            if(attack2 == null){
                return 1
            }else if (attack2.startup == attack1.startup){
                return 0
            }else{
                return attack2.startup - attack1.startup
            }
        }
    }
}
