const products=[
  { 
    name:"Product1",
    price:100,
    desc:"This is a sample description",
    imageUrl:"https://picsum.photos/400/300"
  },
  { 
    name:"Product2",
    price:50,
    desc:"This is a sample description",
    imageUrl:"https://picsum.photos/400/300?grayscale"
  },
  {
    name:"Product3",
    price:70,
    desc:"This is a sample description",
    imageUrl:"https://picsum.photos/400/300?blur=5"
  }
];

function showProducts(){
  let str=`<div class="row">`
  products.map(e=>{
    str=str+ `
    <div>
   <img src= ${e.imageUrl}/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
  </div>
    `
  })
  str=str+ `</div>`
      root.innerHTML=str;
}