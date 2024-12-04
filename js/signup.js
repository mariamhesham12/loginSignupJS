var nameInput=document.getElementById("name")
var emailInput=document.getElementById("email")
var passwordInput=document.getElementById("password")
var signupBtn=document.getElementById("signup")
var requiredInput=document.getElementById("requiredInput")
var successInput=document.getElementById("successInput")
var existEmailInput=document.getElementById("existEmailInput")
var validEmailFormat=document.getElementById("validEmailFormat")
var validNameFormat=document.getElementById("validNameFormat")
var userList=[]

if(localStorage.getItem("userContainer")){
    userList=JSON.parse(localStorage.getItem("userContainer"))
}

signupBtn.addEventListener("click",function(){
   if(!validationInputs()&&!validationEmail()&&!emailRegex()&&!nameRegex()){
    var user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    userList.push(user)
    localStorage.setItem("userContainer",JSON.stringify(userList))
    

   }
       
})

function validationInputs(){
    if(nameInput.value===''||emailInput.value===''||passwordInput.value===''){
        requiredInput.classList.replace("d-none","d-block")
        successInput.classList.replace("d-block","d-none")
        return true
    }else{
        requiredInput.classList.replace("d-block","d-none")
        successInput.classList.replace("d-none","d-block")
        return false
    }
}

function validationEmail(){
    for(var i=0;i<userList.length;i++){
        if(userList[i].email===emailInput.value){
            existEmailInput.classList.replace("d-none", "d-block");
            successInput.classList.replace("d-block", "d-none");  
            return true
        }
    }
    existEmailInput.classList.replace("d-block", "d-none");
    return false
}

function emailRegex(){
    var regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var enteredEmail=emailInput.value
    if(!regex.test(enteredEmail)){
        validEmailFormat.classList.replace("d-none","d-block")
        successInput.classList.replace("d-block","d-none")
        existEmailInput.classList.replace("d-block","d-none")
        return true
    }
    else{
        validEmailFormat.classList.replace("d-block","d-none")
        return false
    }
}

function nameRegex(){
    var regex=/^[a-zA-Z0-9_]{3,20}$/;
    var content=nameInput.value
    if(!regex.test(content)){
        validNameFormat.classList.replace("d-none","d-block")
        successInput.classList.replace("d-block","d-none")
        existEmailInput.classList.replace("d-block","d-none")
        return true
    }else{
        validNameFormat.classList.replace("d-block","d-none")
        return false
    }
}

