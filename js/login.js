var emailInput=document.getElementById("email")
var passwordInput=document.getElementById("password")
var incorrectEmailPass=document.getElementById("incorrectEmailPass")
var requiredInput=document.getElementById("requiredInput")

var userList=[]

if(localStorage.getItem("userContainer")){
    userList=JSON.parse(localStorage.getItem("userContainer"))
}

function login(){
    if(emailInput.value==''||passwordInput.value==''){
        requiredInput.classList.replace("d-none","d-block")
        incorrectEmailPass.classList.replace("d-block","d-none")
    }else{
   for(var i=0;i<userList.length;i++){
    if(userList[i].email===emailInput.value&&userList[i].password===passwordInput.value){
        incorrectEmailPass.classList.replace("d-block","d-none")
        requiredInput.classList.replace("d-block","d-none")
        window.location='./home.html'
        break;
    }
    else{
        requiredInput.classList.replace("d-block","d-none")
        incorrectEmailPass.classList.replace("d-none","d-block")
    }
   }
}
}