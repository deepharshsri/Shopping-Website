$(()=>{
    let root=$('#card')
    let cart=$('#cart')
    let item=$('#item')
    let mja1=$('#mja1')
    let mja2=$('#mja2')
    let mja3=$('#mja3')
    let mja4=$('#mja4')
    let mja5=$('#mja5')
    let mja6=$('#mja6')
    let mja7=$('#mja7')
    let mja8=$('#mja8')
    let mja9=$('#mja9')
    let mja10=$('#mja10')
    let mja11=$('#mja11')
    let mja12=$('#mja12')
    let mja13=$('#mja13')
    let mja14=$('#mja14')
    let mja15=$('#mja15')
    let mja16=$('#mja16')
    let mja17=$('#mja17')
    let mja18=$('#mja18')
    let mja19=$('#mja19')
    let mja20=$('#mja20')
    let mja21=$('#mja21')
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
     
   mja1.click(()=>{
      let image=$(mja1).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
      let brand=$(mja1).parent('div').parent('div').parent('div').find('h5').text()
      let price=$(mja1).parent('div').parent('div').parent('div').find('h6').text()
      let name=$(mja1).parent('div').parent('div').parent('div').find('p.empty').text()
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
    mja2.click(()=>{
       let image=$(mja2).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja2).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja2).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja2).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja3.click(()=>{
       let image=$(mja3).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja3).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja3).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja3).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja4.click(()=>{
       let image=$(mja4).parent('div').parent('div').parent('div').parent('div').find('mjeans').attr('src')
       let brand=$(mja4).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja4).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja4).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja5.click(()=>{
       let image=$(mja5).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja5).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja5).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja5).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja6.click(()=>{
       let image=$(mja6).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja6).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja6).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja6).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja7.click(()=>{
       let image=$(mja7).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja7).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja7).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja7).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja8.click(()=>{
       let image=$(mja8).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja8).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja8).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja8).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja9.click(()=>{
       let image=$(mja9).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja9).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja9).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja9).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja10.click(()=>{
       let image=$(mja10).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja10).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja10).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja10).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja11.click(()=>{
       let image=$(mja11).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja11).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja11).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja11).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja12.click(()=>{
       let image=$(mja12).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja12).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja12).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja12).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja13.click(()=>{
       let image=$(mja13).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja13).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja13).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja13).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja14.click(()=>{
       let image=$(mja14).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja14).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja14).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja14).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja15.click(()=>{
       let image=$(mja15).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja15).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja15).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja15).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja16.click(()=>{
       let image=$(mja16).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja16).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja16).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja16).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja17.click(()=>{
       let image=$(mja17).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja17).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja17).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja17).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja18.click(()=>{
       let image=$(mja18).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja18).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja18).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja18).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
 
     mja19.click(()=>{
       let image=$(mja19).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja19).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja19).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja19).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
 
     mja20.click(()=>{
       let image=$(mja20).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja20).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja20).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja20).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
     mja21.click(()=>{
       let image=$(mja21).parent('div').parent('div').parent('div').parent('div').find('.mjeans').attr('src')
       let brand=$(mja21).parent('div').parent('div').parent('div').find('h5').text()
       let price=$(mja21).parent('div').parent('div').parent('div').find('h6').text()
       let name=$(mja21).parent('div').parent('div').parent('div').find('p.empty').text()
    
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
 
 