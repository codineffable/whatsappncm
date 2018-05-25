$( document ).ready(function() {

console.log("HI");

console.log(name);
$('#submit-form').click(function(event){
  var numero=$("#name").val();
  var mensaje=$("#description").val();

  event.preventDefault();
  console.log(numero+mensaje)
  window.location.href='https://web.whatsapp.com/send?phone='+numero+'&text='+mensaje+'&source=&data=';
})

$('.logoFooter').on('click',function(event){
    window.location.href='https://codineffable.github.io/';

});
});

