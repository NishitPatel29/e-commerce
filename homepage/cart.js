let cartdata = JSON.parse(localStorage.getItem('cartdata'))
console.log(cartdata)
let totalprice = 0;
let price = document.createElement('h3')
let displayprice=()=>{
price.innerText = `Total Price : $${totalprice}`
}
let productblock = document.getElementById('pblock')
cartdata.forEach(element => {
    totalprice += element.price;
    productblock.innerHTML += `<div>
    <img src=${element.images[0]} height='200px' width='150px'>
    <p>${element.title}</p>
    <strong>Price : $${element.price}</strong>
    <div>
    <button class='likebtns' id=${element.id}>Add to wishlist</button>
    <button class='cartbtns' id=${element.id}>Remove from cart</button>
    </div>
    </div>`
    
    displayprice()
    let cartbtns = document.getElementsByClassName('cartbtns')
    for (let i=0; i<cartbtns.length; i++){
        cartbtns[i].addEventListener('click', () => {
            let pdata=cartdata.find(ele=>parseInt(cartbtns[i].id)==ele.id)
            cartdata = cartdata.filter(ele => ele.id!=parseInt(cartbtns[i].id));
            localStorage.setItem('cartdata', JSON.stringify(cartdata));
            cartbtns[i].parentElement.parentElement.style.display = 'none';
            totalprice=totalprice-pdata.price;
            displayprice()
        })
    }
});

productblock.appendChild(price)