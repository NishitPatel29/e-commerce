//
//let cartdata=[];
//let jsondata=localStorage.getItem('cartdata');
//if(jsondata){
//    cartdata = JSON.parse(jsondata)
//}
//let fetchdata = async function(){
//    let result = await fetch('https://dummyjson.com/products');
//    let data = await result.json()
//    displaydata(data);
//}
//
//fetchdata();
//
//let product=document.getElementById('pblock')
//let displaydata=(data)=>{
//    data.products.forEach(element => {
//        //console.log(element)
//        let cartdisable='';
//        if(cartdata.length!=0){
//            cartdata.forEach(ele=>{
//                if(ele.id===element.id){
//                    cartdisable='disabled';
//                }
//            })
//        }
//        let subdiv = document.createElement('div');
//        subdiv.innerHTML = `<img src=${element.images[0]} height='200px' width= '150px'>
//        <p>${element.title}</p>
//        <strong>Price : ${element.price}$</strong>
//        <div>
//        <button>Add to Wishlist</button>
//        <button>Add to Cart</button>
//        </div>`
//        product.appendChild(subdiv)
//
//        //popup
//
//        let popupbox=document.getElementById('popup');
//        subdiv.addEventListener('click',(e) => {
//            e.stopPropagation()
//            popupbox.style.display='flex';
//            popupbox.innerHTML=`<div class="pop">
//            <img src=${element.images[0]} height='200ee4px' width='150px'>
//            <h2>${element.title}</h2>
//            <p>${element.description}</p>
//            <strong>Price: ${element.price}</strong>
//            <strong>Rating: ${element.rating}</strong>
//            <button id='closebtn'>close</button>
//            </div>`
//
//            //js for add to card
//            let cartbtns=document.getElementsByClassName('cartbtns')
//            for(let i=0;i<cartbtns.length;i++){
//                cartbtns[i].addEventListener('click',(e)=>{
//                    e.stopPropagation()
//                    let pid=parseInt(cartbtns[i].id);
//                    console.log(pid)
//                    if(element.id===pid){
//                        cartdata.push(element);
//                        localStorage.setItem('cartdata',JSON.stringify(cartdata));
//                        cartbtns[i].disabled=true;
//
//                    }
//                })
//            }
//
//            let closebtn=document.getElementById('closebtn')
//            closebtn.addEventListener('click',()=>{
//                popupbox.style.display='none'
//            })
//        })     
//    });
//}
//
//
//

document.addEventListener('DOMContentLoaded', function(){
let cartdata = [];
let jsondata = localStorage.getItem('cartdata');
if (jsondata){
    cartdata = JSON.parse(jsondata)
}

let likedata = [];
jsondata = localStorage.getItem('likedata');
if (jsondata){
    likedata = JSON.parse(jsondata)
}

let fetchdata = async function(){
    let result = await fetch('https://dummyjson.com/products')
    let data = await result.json()
    displaydata(data)
}
fetchdata();

let productblock = document.getElementById('pblock')
let displaydata = (data) => {
    data.products.forEach(element => {
        //console.log(element)
        let cartdisable = '';
        if (cartdata.length != 0){
            cartdata.forEach(ele => {
                if (ele.id === element.id){
                    cartdisable = 'disabled';
                }
            })
        }
        let likedisable = '';
        if (likedata.length != 0){
            likedata.forEach(ele => {
                if (ele.id === element.id){
                    likedisable = 'disabled';
                }
            })
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<img  src=${element.images[0]} height='200px' width='150px'>
        <p>${element.title}</p>
        <strong>Price : $${element.price}</strong>
        <div>
        <button class='cartbtns' id='${element.id}'>Add to Cart</button>
        <button class='likebtns' id='${element.id}'>Add to wishlist</button>
        </div>`
        productblock.appendChild(subdiv)

        //popup
        
        let popup = document.getElementById('popup');
        subdiv.addEventListener('click', (e) => {
            e.stopPropagation()
            popup.style.display = 'flex';
            popup.innerHTML = `<div>
            <img src=${element.images[0]} height='200px' width= '150px'>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <strong>Price : $${element.price}</strong>
            <strong>Rating : ${element.rating}/5</strong>
            <button id ='closebtn'>Close</button>
            </div>`


            //js for add to cart

            let cartbtns = document.getElementsByClassName('cartbtns')
            //console.log(cartbtns)
            for (let i = 0; i < cartbtns.length; i++){
                cartbtns[i].addEventListener('click', (e) => {
                    e.stopPropagation()
                    let pid = parseInt(cartbtns[i].id);
                    if (element.id === pid){
                        cartdata.push(element);
                        localStorage.setItem('cartdata', JSON.stringify(cartdata));
                        cartbtns[i].disabled = true;
                    }
                    console.log(cartdata)
                })
            }

            //JS for add to wishlist

            let likebtns = document.getElementsByClassName('likebtns')
            //console.log(cartbtns)
            for (let i = 0; i < likebtns.length; i++){
                likebtns[i].addEventListener('click', (e) => {
                    e.stopPropagation()
                    let fid = parseInt(likebtns[i].id);
                    if (element.id === fid){
                        likedata.push(element);
                        localStorage.setItem('likedata', JSON.stringify(likedata));
                        likebtns[i].disabled = true;
                    }
                    console.log(likedata)
                })
            }


            let closebtn = document.getElementById('closebtn')
            closebtn.addEventListener('click', (e) => {
                popup.style.display = 'none'
            })
        })
    });
}
});