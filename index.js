const formem = document.getElementById("register")
const scoreem = document.getElementById("score")
const questionem = document.getElementById("question")
const submit = document.getElementById("submit")
const numberem = document.getElementById("number")
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let score = JSON.parse( localStorage.getItem("score"));

// let num1 =math.floor(Math.random()*10);

// let num2 = Math.ceil(math.random()*10)
// console.log("abdi")
if(!score){
    score=0;
}
scoreem.innerText=`score ${score}`

questionem.innerText=`what is ${num1} multiplyed ${num2+1} `
let corectans= num1*num2

formem.addEventListener("submit",()=>{
    
    let user = +formem.value
    if(user === corectans){
        score++
        updatelocalstorage()

    }else{
        alert("waa qaladay")
        updatelocalstorage()
    }

});

function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}