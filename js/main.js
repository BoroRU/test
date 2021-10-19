

$(document).ready(function(){
    $('.btn-lan').on('click',function(){
       
        $('.div-text').toggleClass('active')
        // $('.btn-text').toggleClass('active')
    });
});

$(document).ready(function(){
    const form=document.getElementById('form');
    const formInput=document.getElementById('test__input');

    form.addEventListener("submit",function(event){
    console.log('sent form');
    if (!formInput.value){
        console.log('valid form');
        event.preventDefault();
    };
});

});
