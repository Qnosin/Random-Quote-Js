var qutoe = [
    "The people who are crazy enough to think they can change the world are the ones who do - Steve Jobs",
    "Your time is limited, so don’t waste it living someone else’s life - Steve Jobs",
    "Don't compare yourself with anyone in this world… if you do so, you are insulting yourself - bill Gates",
    "Life is not fair — get used to it! - Bill Gates"
];
var space = document.getElementById('generate');
var x = 0;
console.log(qutoe[0]);

function Change(){
   x++;
   if(x == 0){
    space.innerHTML =  qutoe[0];
   }
   if(x == 1){
       space.innerHTML =  qutoe[1];
   }
   if(x == 2){
       space.innerHTML =  qutoe[2];
   }
   if(x == 3){
       space.innerHTML =  qutoe[3];
       x=0;
   }

}