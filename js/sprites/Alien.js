class Alien{
    constructor(id){
        this.id = id;
        this.alienNode = document.querySelector("#"+this.id);
        this.nbrClickNode = document.querySelector("#input-score");
        this.counterNode = document.querySelector("#input-timer");
        this.clickCounter = 0;
        this.timeCounter = 10;
        this.alienNode.onclick = () => { // rien faire si le compteur est en bas de 1 pour ne pas + le score
            if(this.timeCounter > 0){
                this.clickCounter++;
                this.nbrClickNode.value=this.clickCounter;
                this.move();
            }
        }
        this.countdown();

    }
    countdown()  {
        setInterval(() => {
            this.counter();
        }, 1000);
    }
    move() { // pour repositionner l'alien
        this.alienNode.style.left = 100 + Math.random() * (window.innerWidth - 200) + "px";
        this.alienNode.style.top = "400px";
    }

    counter(){
        this.timeCounter--;
        this.counterNode.value=this.timeCounter;
        if(this.counterNode.value < 0)
            this.counterNode.value=0;
    }
    tick() {
        
    }
}