let cartdata = [];
let jsondata = localStorage.getItem('cartdata');
if (jsondata){
    cartdata = JSON.parse(jsondata)
}
let likedata = JSON.parse(localStorage.getItem('likedata'))
console.log(likedata)
let totalprice = 0;
let price = document.createElement('h3')
let displayprice=()=>{
price.innerText = `Total Price : $${totalprice}`
}
let productblock = document.getElementById('pblock')
likedata.forEach(element => {
    totalprice += element.price;
    productblock.innerHTML += `<div>
    <img src=${element.images[0]} height='200px' width='150px'>
    <p>${element.title}</p>
    <strong>Price : $${element.price}</strong>
    <div>
    <button class='cartbtns' id='${element.id}'>Add to cart</button>
    <button class='likebtns' id=${element.id}>Remove from like</button>
    </div>
    </div>`
    displayprice()
    let likebtns = document.getElementsByClassName('likebtns')
    for (let i=0; i<likebtns.length; i++){
        likebtns[i].addEventListener('click', () => {
            let jdata=likedata.find(ele=>parseInt(likebtns[i].id)==ele.id)
            likedata = likedata.filter(ele => ele.id!=parseInt(likebtns[i].id));
            localStorage.setItem('likedata', JSON.stringify(likedata));
            likebtns[i].parentElement.parentElement.style.display = 'none';
            totalprice=totalprice-jdata.price;
            displayprice()
        })
    }
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
});

productblock.appendChild(price)