import { createContext } from "react"

export class result {
    constructor(playerAttack, enemyAttack, adv){
        this.tags = []

        if(playerAttack == null){
            if(enemyAttack != null){
                //Only enemy attack selected
                this.counter = false
                this.winner = 2
                this.adv = enemyAttack.onHit * -1
                this.text = "Enemy hit"
                this.color = "red"
            }else{
                //no attacks selected
                this.counter = false
                this.winner = 0
                this.adv = 0
                this.text = " "
                this.color = "white"
            }
        }else{
            if(playerAttack != null && playerAttack.startup <= adv){
                //player attack faster than adv 
                this.counter = true
                this.winner = 1
                this.adv = playerAttack.onHit
                this.text = "You Punish hit"
                this.color = "green"
            }else if(enemyAttack != null && enemyAttack.startup <= (-1 * adv)){
                //enemy attack faster than adv
                this.counter = true
                this.winner = 2
                this.adv = enemyAttack.onHit
                this.text = "Enemy Punish hit"
                this.color = "red"
            }else if(enemyAttack == null){
                //player attacks, enemy doesn't block
                this.counter = false
                this.winner = 1
                this.adv = playerAttack.onHit
                this.text = "You hit"
                this.color = "green"
            }else if (enemyAttack.startup - adv == playerAttack.startup){
                //both players attack and trade
                this.counter = false
                this.winner = 0
                this.adv = 0
                this.text = "Attacks trade"
                this.color = "grey"
            }else{
                if(playerAttack.startup - adv < enemyAttack.startup){
                    if(enemyAttack.input == "block"){
                        //player attacks, enemy blocks
                        this.winner = 1
                        this.counter = false
                        this.adv = playerAttack.onBlock
                        this.text = "Enemy blocked"
                        this.color = "white"
                    }else{
                        //player attacks faster than enemy's attack
                        this.counter = true
                        this.winner = 1
                        this.adv = playerAttack.onHit + 2
                        this.text = "you counter hit"
                        this.color = "green"
                    }
                }else{
                    if(playerAttack.input == "block"){
                        //enemy attacks, player blocks
                        this.winner = 2
                        this.counter = false
                        this.adv = enemyAttack.onBlock * -1
                        this.text = "you block"
                        this.color = "white"
                    }else{
                        //enemy attacks faster than enemy
                        this.counter = true
                        this.winner = 2
                        this.adv = (enemyAttack.onHit + 2) * -1
                        this.text = "Enemy counter hit"
                        this.color = "red"
                    }
                }
            }
        }

        this.tags = {
            distance: false,
            active: false

        }
        if(this.enemyAttack != null && this.playerAttack != null){
            if(this.winner == 1){
                if(this.playerAttack.distance < this.enemyAttack.distance){
                    this.tags.distance = true;
                }
            }
            if(this.winner == 2){
                if(this.playerAttack.distance > this.enemyAttack.distance){
                    this.tags.distance = true;
                }
            }
        }

        this.attack1= playerAttack
        this.attack2= enemyAttack
    }

    static function (attack1, attack2, adv=0){
        return new result(attack1, attack2, adv)
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
        this.distance = 0
    }

    static compare(attack1, attack2, adv=0){
        return new result(attack1, attack2, adv)
    }
}
