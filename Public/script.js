$(()=>{
const root=$('.root')
const cart=$('#cart')
const item=$('#item')
const add=$('#additem')
   
    cart.click(()=>{
        $.get('/',
     ()=>{
        // window.alert("Cart Successfully")
        window.location.replace('http://localhost:2222/cart.html')
     })
        console.log("Clicked")
    })
   add.click(()=>{
   var brand=$(add).parent('div').parent('div').parent('div').find('h6').text()
   var price=$(add).parent('div').parent('div').parent('div').find('p').text()
  
   root.text(brand)
   console.log(brand+" "+price)
   })
   $(function(){

      $("a").click(function(){
        $(this).after("<img src='./Images/sr.png' alt='loading' />").fadeIn();  
      });
    
    });
})