$(()=>{
    let root=$('#card')
    let cart=$('#cart')
    let item=$('#item')
    let ph1=$('#ph1')
    let ph2=$('#ph2')
    let ph3=$('#ph3')
    let ph4=$('#ph4')
    let ph5=$('#ph5')
    let ph6=$('#ph6')
    let ph7=$('#ph7')
    let ph8=$('#ph8')
    let ph9=$('#ph9')
    let ph10=$('#ph10')
    let ph11=$('#ph11')
    let ph12=$('#ph12')
    let ph13=$('#ph13')
    let ph14=$('#ph14')
    let ph15=$('#ph15')
    let ph16=$('#ph16')
    let ph17=$('#ph17')
    let ph18=$('#ph18')
    let ph19=$('#ph19')
    let ph20=$('#ph20')
    let ph21=$('#ph21')
    let rmv=$('.rmv')
     $.get('/cart',
      (datas)=>{
         // window.alert("Cart Successfully")
         createitem(datas)
         
      })
    
  function createitem(datas){
  
     for(item of datas){
        root.append(
           $(`<div class="card"  style="margin:40px">
           <div class="row row-cols-6">
           <div class="col" style="height:500px;width:fit-content"> 
           <img src="${item.image}" class="image" alt="..." style="height:500px;width:fit-content">
           </div>
           <div class="card-body ">
             <p class="card-text" style="font-size:30px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">${item.name}</p> 
             <p class="card-text" style="font-size:30px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">${item.brand}</p>       
             <p class="card-text"style="font-size:20px;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bolder;">${item.price}</p>
             <a href="#" class="btn btn-primary rmv">Remove</a>
             </div>
             </div>
           </div>`)
          )
       }   
       
    }
     
   ph1.click(()=>{
      let image=$(ph1).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
      let brand=$(ph1).parent('div').parent('div').parent('div').find('h5').text()
      let price=$(ph1).parent('div').parent('div').parent('div').find('h6').text()
      let name=$(ph1).parent('div').parent('div').parent('div').find('p.empty').text()
     window.alert("Item added Succesfully")
      $.post('/cart',{
      image:image,
      price:price,
      name:name,
      brand:brand
      },
       window.location.reload()
      )
     window.alert("Item added Succesfully")
 
    })
    ph2.click(()=>{
       let image=$(ph2).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph2).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph2).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph2).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph3.click(()=>{
       let image=$(ph3).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph3).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph3).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph3).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph4.click(()=>{
       let image=$(ph4).parent('div').parent('div').parent('div').parent('div').find('phone').attr('src')
       let brand=$(ph4).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph4).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph4).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph5.click(()=>{
       let image=$(ph5).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph5).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph5).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph5).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph6.click(()=>{
       let image=$(ph6).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph6).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph6).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph6).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph7.click(()=>{
       let image=$(ph7).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph7).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph7).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph7).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph8.click(()=>{
       let image=$(ph8).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph8).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph8).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph8).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph9.click(()=>{
       let image=$(ph9).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph9).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph9).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph9).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph10.click(()=>{
       let image=$(ph10).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph10).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph10).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph10).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph11.click(()=>{
       let image=$(ph11).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph11).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph11).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph11).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph12.click(()=>{
       let image=$(ph12).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph12).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph12).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph12).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph13.click(()=>{
       let image=$(ph13).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph13).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph13).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph13).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph14.click(()=>{
       let image=$(ph14).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph14).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph14).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph14).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph15.click(()=>{
       let image=$(ph15).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph15).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph15).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph15).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph16.click(()=>{
       let image=$(ph16).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph16).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph16).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph16).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph17.click(()=>{
       let image=$(ph17).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph17).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph17).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph17).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph18.click(()=>{
       let image=$(ph18).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph18).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph18).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph18).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
 
     ph19.click(()=>{
       let image=$(ph19).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph19).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph19).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph19).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
 
     ph20.click(()=>{
       let image=$(ph20).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph20).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph20).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph20).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
       window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
     ph21.click(()=>{
       let image=$(ph21).parent('div').parent('div').parent('div').parent('div').find('.phone').attr('src')
       let brand=$(ph21).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(ph21).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(ph21).parent('div').parent('div').parent('div').find('p.empty').text()
    
       $.post('/cart',{
       image:image,
       price:price,
       name:name,
        brand:brand
      },
      window.location.reload()
       )
      window.alert("Item added Succesfully")
   
     })
 
 
 
 
 
 })
 
 