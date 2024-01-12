/*let username;
let age;
let job;

document.getElementById('buton').onclick = function(){
   

    if(document.getElementById('ch').checked == true){
        username = document.getElementById('inputt').value;
    document.getElementById('id').innerHTML = 'Name:'+ username

    age = document.getElementById('agee').value
    document.getElementById('id2').innerHTML = 'Age: '+age

    job = document.getElementById('jobb').value
    document.getElementById('id3').innerHTML = 'Job: '+job
        document.getElementById('ALLDONE').innerHTML = 'Agreed and All checked'
    }
    else{
        document.getElementById('ALLDONE').innerHTML = 'Not Complete :('
    }

}

let user;


document.getElementById('bc').onclick = function(){
    user = document.getElementById('nam').value
    if(!(user == '' || user == null)){
        document.getElementById('tt').innerHTML = 'Greetings '+user
    }
    else(
        document.getElementById('tt').innerHTML = 'ENter It Please..'
    )    
    }

let btn1;
let btn2;
let btn3;

document.getElementById('btt').onclick = function(){
    btn1 = Math.floor(Math.random()*10 );
    document.getElementById('roll1').innerHTML = btn1;
    
    btn2 = Math.floor(Math.random()* 10);
    document.getElementById('roll2').innerHTML = btn2;
    
    btn3 = Math.floor(Math.random()* 10);
    
    document.getElementById('roll3').innerHTML = btn3;
    


}*/
    

let numm;
const onum = Math.floor(Math.random() * 20 + 1);
let numoftimes = 0;

document.getElementById('sub').onclick = function(){
    numm = document.getElementById('myinp').value;
    Number(numm)
    numoftimes+=1;
    
    if(numm == onum){
        
        document.getElementById('res').innerHTML = `You're right,the number was ${numm}! `
        document.getElementById('amount').innerHTML = `You took ${numoftimes} guesses to guess it right!`;
    

    }
    else if(numoftimes >= 4){
        document.getElementById('truth').innerHTML = `The Number Was :${onum}`;
    }
    
    else{
    
        document.getElementById('res').innerHTML = `Wrong the number wasn't ${numm}`
        document.getElementById('amount').innerHTML = `${numoftimes}'s guess....,`

    }

}