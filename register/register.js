let uname=document.getElementById('uname')
let email=document.getElementById('email')
let pswd=document.getElementById('pswd')
let btn=document.getElementById('btn')
let regestereddata=[]
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let jsondata= localStorage.getItem('regestereddata')
    if(jsondata){
        regestereddata=JSON.parse(jsondata)
        let userdetails=regestereddata.find(ele=>ele.email===email.value)
        if(userdetails){
            alert('This mail id is already regiserted,login with it or enter new mail id')
        }
        else{
            regestereddata.push({uname:uname.value,email:email.value,password:pswd.value})
            localStorage.setItem('regestereddata',JSON.stringify(regestereddata))
            location.href = "../login/login.html";
        }
    }
    else{
        regestereddata.push({uname:uname.value,email:email.value,password:pswd.value})
        localStorage.setItem('regestereddata',JSON.stringify(regestereddata))
        location.href = "../login/login.html";
    }
});