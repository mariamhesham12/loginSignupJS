var logoutBtn=document.getElementById("logout")
var welcomeContainer=document.getElementById("welcome")
var userList=[]

if(localStorage.getItem("userContainer")){
    userList=JSON.parse(localStorage.getItem("userContainer"))
}


logoutBtn.addEventListener("click",function(){
    window.location="./index.html"
})

function display(){
    var cartoona=``
     for(var i=0;i<userList.length;i++){
        cartoona=`<p>Welcome ${userList[i].name}</p>`
    }
    welcomeContainer.innerHTML=cartoona
}
display()