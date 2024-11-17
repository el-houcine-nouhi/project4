function character(name , strenght, health){
       this.name = name;
       this.strenght = strenght;
       this.health = health;
       this.element = new UIelements(this.name);
}

function UIelements(name){
       this.attackBtn = document.querySelector(`.${name}-attack`);
       this.heathBtn = document.querySelector(`.${name}-health-plus`);
       this.progress = document.querySelector(`.${name}-health span`);
       this.alive = document.querySelector(`.${name}-alive`);

}
//attack function
character.prototype.attack = function(oppenent){
      if(oppenent.health > 0){
      oppenent.health -= this.strenght;
      oppenent.element.progress.style.width = `${oppenent.health}%`;
      if(oppenent.health >= 50){
        oppenent.element.progress.style.backgroundColor = "rgb(0, 212, 71)";
      }
      if(oppenent.health < 50){
        oppenent.element.progress.style.backgroundColor = "yellow";
      }
      if(oppenent.health <= 25){
        oppenent.element.progress.style.backgroundColor = "red";
      }
      }else{
        oppenent.element.attackBtn.remove();
        oppenent.element.heathBtn.remove();
        oppenent.element.alive.innerHTML = `${oppenent.name} is dead`
        setTimeout(() => {window.location = "winer.html"},1500);
        
      }
}


//make health function
character.prototype.makehealth = function(){
    if(this.health < 100){
    this.health += 10;
    this.element.progress.style.width = `${this.health}%`;
    if(this.health >= 25){
        this.element.progress.style.backgroundColor = "yellow";
    }
    if(this.health >= 50){
        this.element.progress.style.backgroundColor = "rgb(0, 212, 71)";
    }
    }
    if(this.health > 100){
        this.health = 100;
    }
}

//lets oop
let naruto = new character("naruto",10,100);
let sasuke = new character("sasuke",10,100);

//attack btn event
naruto.element.attackBtn.addEventListener('click', function(){
    naruto.attack(sasuke);
})

sasuke.element.attackBtn.addEventListener('click', function(){
    sasuke.attack(naruto);
})

//health btn event
naruto.element.heathBtn.addEventListener('click', function(){
    naruto.makehealth();
})

sasuke.element.heathBtn.addEventListener('click', function(){
    sasuke.makehealth();
})

