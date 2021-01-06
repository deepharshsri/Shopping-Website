window.onload=$(()=>{
   let root=$('#card')
   let cart=$('#cart')
   let item=$('#item')
   let tv1=$('#tv1')
   let tv2=$('#tv2')
   let tv3=$('#tv3')
   let tv4=$('#tv4')
   let tv5=$('#tv5')
   let tv6=$('#tv6')
   let tv7=$('#tv7')
   let tv8=$('#tv8')
   let tv9=$('#tv9')
   let tv10=$('#tv10')
   let tv11=$('#tv11')
   let tv12=$('#tv12')
   let tv13=$('#tv13')
   let tv14=$('#tv14')
   let tv15=$('#tv15')
   let tv16=$('#tv16')
   let tv17=$('#tv17')
   let tv18=$('#tv18')
   let tv19=$('#tv19')
   let tv20=$('#tv20')
   let tv21=$('#tv21')
   let t=$('.total')
   let tt=$('.titem')
   let not=$('#notification')
   let ten=$('#ten')
   let final=$('#final')
   let appl=$('#appl')
   let twenty=$('#twenty')
   let thirty=$('#thirty')
   let debit=$('#debit')
   let credit=$('#credit')
   let gpay=$('#gpay')
   let apay=$('#apay')
   let paypal=$('#paypal')
   let cod=$('#cod')
   let aupi=$('#aupi')
   let gupi=$('#gupi')
   let pupi=$('#pupi')
   let dbox=$('#dbox')
   let cbox=$('#cbox')
   $.get('/cart',
     (datas)=>{
        // window.alert("Cart Successfully")
        createitem(datas)
        
     })
     let total=0; 
     let titem=0;
 function createitem(datas){
     let i=0;
    for(item of datas){
       root.append(
          $(`<div class="card"  style="margin:40px">
          <div class="row row-cols-6">
          <div class="col" style="height:100px;width:80px;padding:20px"> 
          <img src="${item.image}" class="card-img-top" alt="..."style="height:100px;width:80px" >
          </div>

          <div class="card-body col" style="margin-left:50px;">
            <p class="card-text" style="font-size:20px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">${item.name}</p> 
            <p class="card-text" style="font-size:20px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">${item.brand}</p>       
            <p class="card-text" style="font-size:15px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">Rs. ${item.price}</p>
            <button id="myBtn${i}" onclick="myFunction${i}()" class="btn btn-primary">Remove</button>
            </div>
            </div>
          </div>`)
         )
         i++;
      }  
    
      for(item of datas){
         total=total+item.price
         titem++;
            }
      tt.text(titem)
      not.text(titem)
      t.text(total)
      dbox.hide()
      cbox.hide()
   }
   ten.click(()=>{
     appl.text("Applied")
     let f=parseInt( 0.9*total);
      final.text(f)
      debit.attr('disabled',false)
      debit.css('text-decoration','none')
     credit.attr('disabled',false)
     credit.css('text-decoration','none')
     gpay.attr('disabled',false)
     gpay.css('text-decoration','none')
     paypal.attr('disabled',false)
     paypal.css('text-decoration','none')
     cod.attr('disabled',false)
     cod.css('text-decoration','none')
     apay.attr('disabled',false)
     apay.css('text-decoration','none')
      aupi.show()
      gupi.show()
      pupi.show()
     
   })
   twenty.click(()=>{
    appl.text("Applied")
    let f=parseInt( 0.8*total);
     final.text(f)
     debit.attr('disabled',true)
     debit.css('text-decoration','line-through')
     credit.attr('disabled',true)
     credit.css('text-decoration','line-through')
     gpay.attr('disabled',true)
     gpay.css('text-decoration','line-through')
     paypal.attr('disabled',true)
     paypal.css('text-decoration','line-through')
     cod.attr('disabled',true)
     cod.css('text-decoration','line-through')
     apay.attr('disabled',false)
     apay.css('text-decoration','none')
     aupi.show()
     gupi.hide()
     pupi.hide()
     dbox.hide()
     cbox.hide()
  })
  thirty.click(()=>{
    appl.text("Applied")
    let f=parseInt( 0.75*total);
     final.text(f)
     debit.attr('disabled',false)
     debit.css('text-decoration','none')
     credit.attr('disabled',false)
     credit.css('text-decoration','none')
     gpay.attr('disabled',true)
     gpay.css('text-decoration','line-through')
     paypal.attr('disabled',true)
     paypal.css('text-decoration','line-through')
     cod.attr('disabled',true)
     cod.css('text-decoration','line-through')
     apay.attr('disabled',true)
     apay.css('text-decoration','line-through')
     aupi.hide()
     gupi.hide()
     pupi.hide()
     cbox.hide()
     dbox.hide()
  })
  apay.click(()=>{
   if(!apay.attr('disabled')){
     
   }})
   debit.click(()=>{
     if(!debit.attr('disabled')){
       dbox.show()
       
     }
   })
   credit.click(()=>{
     if(!credit.attr('disabled')){
       cbox.show()
       
     }
   })
  tv1.click(()=>{
     let image=$(tv1).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
     let brand=$(tv1).parent('div').parent('div').parent('div').find('h6').text()
     let price=$(tv1).parent('div').parent('div').parent('div').find('p').text()
     let name=$(tv1).parent('div').parent('div').parent('div').find('h5').text()
     
     $.post('/cart',{
     image:image,
     price:price,
     name:name,
     brand:brand
     },
     window.location.reload()
     )
     window.alert("Item added Successfully")
     

   })
   tv2.click(()=>{
      let image=$(tv2).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv2).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv2).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv2).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv3.click(()=>{
      let image=$(tv3).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv3).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv3).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv3).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv4.click(()=>{
      let image=$(tv4).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv4).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv4).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv4).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv5.click(()=>{
      let image=$(tv5).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv5).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv5).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv5).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv6.click(()=>{
      let image=$(tv6).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv6).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv6).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv6).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv7.click(()=>{
      let image=$(tv7).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv7).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv7).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv7).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv8.click(()=>{
      let image=$(tv8).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv8).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv8).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv8).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv9.click(()=>{
      let image=$(tv9).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv9).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv9).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv9).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv10.click(()=>{
      let image=$(tv10).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv10).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv10).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv10).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv11.click(()=>{
      let image=$(tv11).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv11).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv11).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv11).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv12.click(()=>{
      let image=$(tv12).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv12).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv12).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv12).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv13.click(()=>{
      let image=$(tv13).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv13).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv13).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv13).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv14.click(()=>{
      let image=$(tv14).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv14).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv14).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv14).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv15.click(()=>{
      let image=$(tv15).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv15).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv15).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv15).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv16.click(()=>{
      let image=$(tv16).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv16).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv16).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv16).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv17.click(()=>{
      let image=$(tv17).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv17).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv17).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv17).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv18.click(()=>{
      let image=$(tv18).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv18).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv18).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv18).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })

    tv19.click(()=>{
      let image=$(tv19).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv19).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv19).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv19).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })

    tv20.click(()=>{
      let image=$(tv20).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv20).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv20).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv20).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })
    tv21.click(()=>{
      let image=$(tv21).parent('div').parent('div').parent('div').parent('div').find('.card-img-top').attr('src')
      let brand=$(tv21).parent('div').parent('div').parent('div').find('h6').text()
      let price=$(tv21).parent('div').parent('div').parent('div').find('p').text()
      let name=$(tv21).parent('div').parent('div').parent('div').find('h5').text()
      
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
      window.location.reload()
     )
     window.alert("Item added Successfully")
      
  
    })





})

