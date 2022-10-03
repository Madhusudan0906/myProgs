//getRandomInt is returning an integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// this runs computer code what computer wants rock,paper,scissor.
function runComputer(){
    let comp=getRandomInt(1,4);
    if(comp==1){
        return 'rock';
    }else if(comp==2){
        return "paper";
    }else{
        return "scissor"
    }
}

//this event is for rock image
document.querySelector('#one').addEventListener('click',function(){
    appnd('rock');
})

//this event is for paper image
document.querySelector('#two').addEventListener('click',function(){
    appnd('paper');
})

//this event is for scissor image
document.querySelector('#three').addEventListener('click',function(){
    appnd('scissor');
})

//this is reset button code
document.querySelector('#btn').addEventListener('click',function(){
    document.querySelector('#userInput').style.display='flex';
    document.querySelector('#btn').style.display="none";
    document.querySelector('#result').innerHTML=null;
    document.querySelector('#Computer').innerHTML=null;
    document.querySelector('#User').innerHTML=null;
    document.querySelector('#result').style.backgroundColor='transparent';
})

//it tells who is the winner
function wins(user1,user2){
    return user1==user2? "tie":user1=='rock'&&user2=='paper'?"Computer is the winner":user1=='paper'&&user2=='scissor'?"Computer is the winner":user1=='scissor'&&user2=='rock'?"Computer is the winner":"You are the winner";
}


// this is the main code
function appnd(user1){
    let uimg=document.createElement('img');
    uimg.setAttribute('src',`${user1}.jpg`);
    let user=document.querySelector('#User');
    user.innerHTML=null;
    user.append(uimg);
    let user2=runComputer();
    let cimg=document.createElement('img');
    cimg.setAttribute('src',`${user2}.jpg`);
    let computer=document.querySelector('#Computer');
    computer.innerHTML=null;
    computer.append(cimg);
    let w=document.createElement('h1');
    w.innerHTML=wins(user1,user2);
    document.querySelector('#result').innerHTML=null;
    document.querySelector('#result').append(w);
    document.querySelector('#result').style.backgroundColor='goldenrod';
    document.querySelector('#userInput').style.display='none';
    document.querySelector('#btn').style.display="block";
}