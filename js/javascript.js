let spriteList = [];
const ALIEN_COUNT = 1;
// attendre que la page soit chargée
window.addEventListener("load", () => {
    spriteList.push(new Alien("alien")); // creer une instance de Frame et l'ajoute dans la liste
    let alienNode = document.querySelector("#alien");

    tick();

})

const tick = () => { // boucle infinie qui s'appelle elle-mm a chaque 30ms
    //setTimeout(tick, 30); (not used anymore)
    for(let i = 0; i < spriteList.length; i++) {
        // passe dans tt les sprites, leur dit de faire tick un à un
        const node = spriteList[i];
        node.tick(); // pas le mm que const tick, se réfère a une méthode tick dans class Ball
    }
    window.requestAnimationFrame(tick); // facon moderne qui remplace setTimeout
    // permet aux écrans avec un meilleur refresh rate, l'animation s'adaptera aussi pour être smooth
    // écran au cegep est 60fps donc tick sera appelé aux 60ms

}