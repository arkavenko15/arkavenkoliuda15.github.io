//ADD TO CART
let productsCounter = document.getElementById("products-count");
console.log(productsCounter);
let addToCartButtons = document.querySelectorAll(".button-add-to-cart");
console.log(addToCartButtons);
for(i=0;i<addToCartButtons.length;i++)
{
    addToCartButtons[i].addEventListener("click", function()
    {
        let prevProductsCount = +productsCounter.textContent;
        productsCounter.textContent = prevProductsCount + 1;
    })
}
//LIKE
let like = document.querySelectorAll(".like");
for(i=0;i<like.length;i++)
{
    like[i].addEventListener('click',function()
    {
        this.style.backgroundColor ='#2d73b9';
        this.style.backgroundImage = 'url(images/white-heart-2.png)';
    })

}






