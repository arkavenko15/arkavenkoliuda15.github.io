
//LIKE
// let like = document.querySelectorAll(".like");
// for(i=0;i<like.length;i++)
// {
//     like[i].addEventListener('click',function()
//     {
//         this.style.backgroundColor ='#2d73b9';
//         this.style.backgroundImage = 'url(images/white-heart-2.png)';
//     })

// }
// let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);
// for(i=0;i<likeBtns.length;i++)
// {
//     likeBtns[i].addEventListener('click',function()
//     {

//         if(this.classList.contains("liked"))
//         {
//             this.classList.remove("liked");
//         }
//         else
//         {
//             this.classList.add("liked");
//         }
//     })
// }


let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);
for(i=0;i<likeBtns.length;i++)
{
    likeBtns[i].addEventListener('click',function()
    {
        this.classList.toggle("liked");
    })
}
// MODAL
// let moreDetailsBtns = document.querySelectorAll(".button-more-details");
// console.log(moreDetailsBtns);
// let modalWindow = document.querySelector(".modal");
// for(i=0;i<moreDetailsBtns.length;i++)
// {
//     moreDetailsBtns[i].addEventListener('click',function()
//     {
//         modalWindow.classList.add("show");
//     })
// }
// let closeModalWindow = document.querySelector(".modal-close-btn");
// closeModalWindow.addEventListener('click',function()
// {
//     modalWindow.classList.remove("show");
// })

// MODAL
let moreDetailsBtns = document.querySelectorAll(".button-more-details");
let modalWindow = document.querySelector(".modal");
moreDetailsBtns.forEach(btn=>btn.addEventListener("click",openModal))
let closeModalWindow = document.querySelector(".modal-close-btn");
closeModalWindow.addEventListener('click',closeModal)


function openModal()
{
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");   
}
function closeModal()
{
    
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");       
}
modalWindow.addEventListener("click",function(e)
{
    if(e.target===modalWindow)
    {
        closeModal()
    }
})

function showModalByScroll()
{

    if(window.pageYOffset > document.body.scrollHeight/2)
    {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}
window.addEventListener("scroll",showModalByScroll)

// QUANTITY
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let productsQuantity = document.querySelectorAll(".product-quantity input")[0];


// let currentCount = productsQuantity.value;
// toggleButtonState(currentCount);
// incrementBtns.addEventListener("click",function()
// {
//     let currentCount = +productsQuantity.value;
//     let nextCount = currentCount + 1;
//     productsQuantity.value = nextCount;
//     toggleButtonState(nextCount);
// })
// decrementBtns.addEventListener("click",function() 
// {
//     let currentCount = +productsQuantity.value;
//     let nextCount = currentCount - 1;
//     productsQuantity.value = nextCount;
//     toggleButtonState(nextCount);
// })
// function toggleButtonState(count) 
// {
//     decrementBtns.disabled = count <= 1;
//     incrementBtns.disabled = count >= 10;
// }



// TRY
// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let productsQuantity = document.querySelectorAll(".product-quantity input");
// for(let i = 0;i<productsQuantity.length;i++)
// {
//     let currentCount = productsQuantity[i].value;
//     toggleButtonState(currentCount,i);
// }

// for(let i = 0;i<incrementBtns.length;i++)
// {
// incrementBtns[i].addEventListener("click",function() 
// {
//     productsQuantity[i].value++;
//     toggleButtonState(productsQuantity[i].value,i);   
// })
// }
// for(let i = 0;i<decrementBtns.length;i++)
// {
// decrementBtns[i].addEventListener("click",function() 
// {
    
//     productsQuantity[i].value--;
//     toggleButtonState(productsQuantity[i].value,i);  
// })
// }
// function toggleButtonState(count,i) 
// {
//     decrementBtns[i].disabled = count <= 1;
//     incrementBtns[i].disabled = count >= 10;
// }



//ADD TO CART
let productsCounter = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button-add-to-cart");

for(let i=0;i<addToCartButtons.length;i++)
{
    addToCartButtons[i].addEventListener("click", function()
    {
        productsCounter.textContent = +productsCounter.textContent +  +productsQuantity[i].value;
    })
}
//ADD SLIDER

    $('.slider-block').slick();
 



// QUANTITY
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn,decrementBtn,inputField)
{
    this.domRefs =
    {
        incrementBtn,
        decrementBtn,
        inputField,
    }
    this.toggleButtonState = function()
    {
        const count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <=1;
        this.domRefs.incrementBtn.disabled = count >=10;
    }
    this.toggleButtonState();

    this.increment = function()
    {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount+1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState();
    }
    this.decrement = function()
    {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount-1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState();
    }

    this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this));

}
const counters = [];
productsQuantity.forEach((item,i) => (
    counters[i] = new Counter(incrementBtns[i],decrementBtns[i],productsQuantity[i])
))

