let health = document.getElementById("health")
let ennemyAttack=false
// health.value -= 10;


function damage() {
  if(ennemyAttack==false){

    console.log(health.value)
    health.value -= 10;
    if(health.value <=0){
      window.location=("./youwon.html");
    }
    
      let id = null;
      const elem = document.getElementById("nidorinopng");  
      let posbottom = 4;
      let posleft = 12 ;
      let reverse = 1;
      clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (posbottom == 50) {
      //   clearInterval(id);
      //   elem.style.top = "4vh"; 
      //   elem.style.right = "12vw"; 
      reverse=-1
      posbottom--
      } else {
        posbottom+=1*reverse; 
        posleft+= 1.3*reverse; 
        elem.style.bottom = posbottom + "vh"; 
        elem.style.left = posleft + "vw";
        if (posbottom==4){
            clearInterval(id);
                  elem.style.bottom = "-4px"; 
                elem.style.left = "50px"; 
        }
  
      }

    }
ennemyAttack=true
    setTimeout(() => {
          damageyou()
          setTimeout(() => {
            ennemyAttack=false
          }, 1000);

    }, 1000);

}
setTimeout(() => {
  if(health.value <=0){
alert("you won")
}
}, 1000);


  }



function damage2() {
  if(ennemyAttack==false){
      console.log(health.value)
      if (Math.random() * 4<1) {
        health.value -=0;
        alert("you missed you attack")
      } else {
      health.value -= 20;
      
      }
    if(health.value <=0){
      window.location=("./youwon.html");
    }
  
    let id = null;
    const elem = document.getElementById("nidorinopng");  
    let posbottom = 4;
    let posleft = 12 ;
    let reverse = 1;
    clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (posbottom == 50) {
    //   clearInterval(id);
    //   elem.style.top = "4vh"; 
    //   elem.style.right = "12vw"; 
    reverse=-1
    posbottom--
    } else {
      posbottom+=1*reverse; 
      posleft+= 1.3*reverse; 
      elem.style.bottom = posbottom + "vh"; 
      elem.style.left = posleft + "vw";
      if (posbottom==4){
          clearInterval(id);
                elem.style.bottom = "-4px"; 
              elem.style.left = "50px"; 
      }

    }
  }
  // if (Math.random() * 5>1) {
  //   health.value -=0
  // } else {
  // health.value -= 20;
  // alert("you missed you attack")
    
  }
  ennemyAttack=true
    setTimeout(() => {
          damageyou()
          setTimeout(() => {
            ennemyAttack=false
          }, 1000);

    }, 1000);

}
setTimeout(() => {
  if(health.value <=0){
alert("you won")
// stop
}
}, 1000);


    


function reset() {
    console.log("reset")
    health.value = 100;
}

// var playerHealth = $('#playerHealth'),
//     attackBTN = $('#personAttack'),
//     damage;

let healthyou = document.getElementById("healthyou")

function damageyou() {
    console.log(healthyou.value)
    // setTimeout(1000)
  //   if(healthyou.value <=0){
  //     window.location=("./gameover.html");
  // }
  if (Math.random() * 3<1) {
    healthyou.value -=0;
    alert("foe missed attack")
  } else {
    if (Math.random() * 2<1) {
      healthyou.value -=20
    } else {
    healthyou.value -= 10;
      
    }

    
  }
    // if (Math.random() * 2>1) {
    //   healthyou.value -=20
    // } else {
    // healthyou.value -= 10;
      
    // }


        {let id = null;
        const elem = document.getElementById("gengarpng");  
        let postop = 4;
        let posright = 12 ;
        let reverse = 1;
        clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
        if (postop == 60) {
        //   clearInterval(id);
        //   elem.style.top = "4vh"; 
        //   elem.style.right = "12vw"; 
        reverse=-1
        postop--
        } else {
          postop+=1*reverse; 
          posright+= 1.3*reverse; 
          elem.style.top = postop + "vh"; 
          elem.style.right = posright + "vw";
          if (postop==4){
              clearInterval(id);
                    elem.style.top = "4vh"; 
                  elem.style.right = "12vw"; 
          }
    
        }
      }
    }
    // if (Math.random() * 5>1) {
    //   healthyou.value -=0;
    // } else {
    // healthyou.value -= 20;
    // alert("foe missed attack")
      
    // }

    setTimeout(() => {
          if(healthyou.value <=0){
      alert("you lost")
      if(healthyou.value <=0){
        window.location=("./gameover.html");
    }
  }
    }, 1000);

}

function resetyou() {
        console.log("reset")
        healthyou.value = 100;
}

// function damageyou(){
//   if(healthyou.value==0){
//   alert("you are dead")
// }
// }














