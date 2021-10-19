

$(document).ready(function(){
    $('.btn-lan').on('click',function(){
       
        $('.div-text').toggleClass('active')
        // $('.btn-text').toggleClass('active')
    })
})

const form=document.querySelectorAll('.form')
const formInput=document.querySelectorAll('.test__input')

$(form).addEventListener("submit",function(event){
    console.log('sent form');
    if (!formInput.value){
        console.log('valid form')
        event.preventDefault();
    };
});
