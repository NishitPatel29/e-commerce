let regestereddata=JSON.parse(localStorage.getItem('regestereddata'))
console.log(regestereddata)

let email=document.getElementById('email')
let pswd=document.getElementById('pswd')
let btn=document.getElementById('btn')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let userdata=regestereddata.find(ele=>ele.email===email.value && ele.password===pswd.value)
    if(userdata){
        alert('login successfully')
        location.href=('../homepage/index.html')
    }
    else{
        alert('Please enter right details')
    }
})  