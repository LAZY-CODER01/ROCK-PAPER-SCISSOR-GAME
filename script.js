let user=document.querySelector("#user");
let container=document.querySelector("#container");
console.log(container);
let text=document.querySelector("#text");
let option=document.querySelector("#option");
console.log(option);
let score=document.querySelector("#score");
let computer=document.querySelector("#computer");
let computerScore=document.querySelector("#computerScore");
let userScore=document.querySelector("#userScore");
let instructionButton=document.querySelector("#instructionButton");
let instruction=document.querySelector( ".instruction" ); 
let back=document.querySelector("#back");
console.dir(computer)

const rps=[
    {
        background: "url('rock.png')",
        name:"Rock"
    },{
        background: "url('paper.png')",
        name:"Paper" 
    },
{
    background: "url('scissor.png')",
    name:"Scissors"
}];


var initialuserScore=0;
var initialcomputerScore=0;
  
function show(){
    option.style.display="flex";
}

function  select(e){
user.style.background=rps[e].background ;
user.style.backgroundRepeat="no-repeat";
user.style.backgroundSize="cover";
text.innerHTML=rps[e].name;

var random=Math.floor(Math.random()*3);
setTimeout(()=>{
   
       computer.style.background=rps[random].background;
       computer.style.backgroundRepeat="no-repeat";
       computer.style.backgroundSize="cover";
       show();
       
  },2000);

  option.style.display="none";

 let load=setInterval(() => {
        var random1=Math.floor(Math.random()*3);
        computer.style.background=rps[random1].background;
        computer.style.backgroundRepeat="no-repeat";
        computer.style.backgroundSize="cover";
    }, 50);
 setTimeout(() => {
     clearInterval(load);
 },1900);

 if((e==0 && random==1) ||(e==1  && random==2) || (random==0 && e==2)){
    initialcomputerScore++;
 }
 else if((e==1 && random==0 )||( random==1 && e==2) || (random==2 && e==0)){
    initialuserScore++;
 }
 else if(e==random){
    console.log("draw");
 };

 setTimeout(() => {
    computerScore.innerHTML=initialcomputerScore;
    userScore.innerHTML=initialuserScore;
 }, 
 2000);


result();

};
instructionButton.addEventListener("click", ()=>{
        //   instruction.style.display="none";
        setTimeout(() => {
              container.style.display="inline-block";
              score.style.display="inline-block";
        },1000);
          instruction.style.opacity="0";
          instruction.style.transform="scale(0)";
          instruction.style.top="0%";
          back.style.display= "inline-block";
    
});
function result() {
    setTimeout(() => {
        
        if( initialcomputerScore===3){
            container.style.display="none";
            score.classList.add('score2');
              alert("BETTER LUCK NEXT TIME");
        }
        
        else if(initialuserScore===3){
            container.style.display="none";
            score.classList.add('score2');
            alert("CONGRATS,YOU WON");
       };
    }, 2000);
}
function reloadPage() {
    location.reload();
}

 




