var itemCount=0

let officeArray = [
  {
    img: "images/amia office 1.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "1,925.00",
    id: "c1",
heartID:"heart1"
  },
  {
    img: "images/amia office 2.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "1,362.00",
    id: "c2",
heartID:"heart2"
  },
  {
    img: "images/amia office 3.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "1,154.30",
    id: "c3",
heartID:"heart3"
  },
  {
    img: "images/amia office 4.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "1,362.00",
    id: "c4",
heartID:"heart4"
  },
  {
    img: "images/amia office 5.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "3,044.70",
    id: "c5",
heartID:"heart5"
  },
  {
    img: "images/amia office 6.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "3,044.70",
    id: "c6",
  heartID:"heart6"
  },,

  {
    img: "images/amia office 7.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "3,236.00",
    id: "c7",
heartID:"heart7"
  },
  {
    img: "images/amia office 8.jpg",
    title: "Aima Chairs",
    description: "Office Chair by Richfield",
    price: "3,115.00",
    id: "c7",
heartID:"heart8"
  },

]
let gamingArray = [
  {
    img: "images/amia gaming 1.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "475.00",
    id: "g1",
    heartID:"gh1"
  },
  {
    img: "images/amia gaming 2.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "525.00",
    id: "g2",
    heartID:"gh2"
  },
  {
    img: "images/amia gaming 3.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "850.00",
    id: "g3",
    heartID:"gh3"
  },
  {
    img: "images/amia gaming 4.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "550.00",
    id: "g4",
    heartID:"gh4"
  },
  {
    img: "images/amia gaming 5.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "777.77",
    id: "g5",
    heartID:"gh5"
  },
  {
    img: "images/amia gaming 6.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "1,143.25",
    id: "g6",
    heartID:"gh6"
  },
  {
    img: "images/amia gaming 7.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "1,199.20",
    id: "g7",
    heartID:"gh7"
  },
  {
    img: "images/amia gaming 8.jpg",
    title: "Aima Chairs",
    description: "Gaming chair by Richfeild",
    price: "525.00",
    id: "g8",
    heartID:"gh8"
  },
]
let officeData = ``
officeArray.forEach((e,i) => {
  console.log(i)
  getData(e.img, e.title, e.description,e.price, e.id,e.heartID )
});

function getData(img, title,description, price, id,  heartID) {
  officeData += `
  <div class="col-12  col-md-6 col-sm-7 col-lg-3 col-xl-3 mb-2">
  <div class="course_card d-flex shadow-sm">
    <div class="section-3-icon" title="Wishlist"><i class="fa-regular fa-heart" id="${heartID}"onclick="colorChange(id)"></i></div>

    <div class="course_card_img">
      <img src='${img}' alt='course' class="">
    </div>
    <div class="course_card_content px-4">
      <h2 class="h3 title">${title}</h2>
      <p class="description h6 text-secondary" style="font-size:14px;font-weight:600"> ${description}
        <!--The Aeron chair is an office chair sold by Herman Miller, first released in 1994. In 2010, it was called "America's best-selling chair". It is featured in the Museum of Modern Art's permanent collection.It was designed by Don Chadwick and Bill Stumpf and has received numerous accolades for its industrial design.</p> -->
      <h6 class="text-secondary">Our Price: $<span id="price">${price}</span></h6>
      <div class="course_card_footer">
        <button href="aeron.html" class="nav-item" data-bs-toggle="modal"data-bs-target="#${id}">Add To Cart</button>
      </div>
<!-- modalstart -->
<div id="${id}"class="modal fade border-0">
<div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-center">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">${title}</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="row d-flex justify-content-center align-items-center">
  <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12"><img src="${img}" alt=""class="w-100"></div>
  <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
    <h2 class="h3 title">Aeron Chair</h2>
    <p></p>
      <p class="description h6 text-secondary" style="font-size:14px;font-weight:600"> Office Chair by Richfield
        The Aeron chair is an office chair sold by Herman Miller, first released in 1994. In 2010, it was called "America's best-selling chair". It is featured in the Museum of Modern Art's permanent collection.It was designed by Don Chadwick and Bill Stumpf and has received numerous accolades for its industrial design.</p>
      <h6 class="text-secondary">Our Price: $${price}</h6>
  </div>
</div>
</div>
<div class="modal-footer">
<a href="images/AMIA CHAIR - Copy (1).docx"class="px-3">see more <i class="fa-regular fa-file-word " style="font-size:30px"></i></a>
 <button type="button" class="btn btn-secondary">
 Buy Now
 </button>
 </div>
</div>


</div>

</div>


<!-- modalend -->
    </div>
  </div>

</div>
  `
}
let officeSection = document.getElementById("officeSection")

officeSection.innerHTML = officeData

let gamingData = ``
gamingArray.forEach(e => {
  getDataB(e.img, e.title, e.description,e.price, e.id,e.heartID )
});

function getDataB(img, title,description, price, id,  heartID) {
  gamingData += `
  <div class="col-12  col-md-6 col-sm-7 col-lg-3 col-xl-3 mb-2">
  <div class="course_card d-flex shadow-sm">
    <div class="section-3-icon" title="Wishlist"><i class="fa-regular fa-heart" id="${heartID}"onclick="colorChange(${id})"></i></div>

    <div class="course_card_img">
      <img src='${img}' , alt='course' class="">
    </div>
    <div class="course_card_content px-4">
      <h2 class="h3 title">${title}</h2>
      <p class="description h6 text-secondary" style="font-size:14px;font-weight:600"> ${description}
        <!--The Aeron chair is an office chair sold by Herman Miller, first released in 1994. In 2010, it was called "America's best-selling chair". It is featured in the Museum of Modern Art's permanent collection.It was designed by Don Chadwick and Bill Stumpf and has received numerous accolades for its industrial design.</p> -->
      <h6 class="text-secondary">Our Price: $<span id="price">${price}</span></h6>
      <div class="course_card_footer">
        <button href="aeron.html" class="nav-item" data-bs-toggle="modal"data-bs-target="#${id}"onclick='ATC("${id}")'>Add To Cart</button>
      </div>
<!-- modalstart -->
<!--  -->
 <div id="${id}"class="modal fade border-0">
 <div class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-center">
 <div class="modal-content">
 <div class="modal-header">
 <h5 class="modal-title">${title}</h5>
 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
 </div>
 <div class="modal-body">
 <div class="row d-flex justify-content-center align-items-center">
   <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12"><img src="${img}" alt=""class="w-100"></div>
  <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
     <h2 class="h3 title">Aeron Chair</h2>
     <p></p>
       <p class="description h6 text-secondary" style="font-size:14px;font-weight:600"> Office Chair by Richfield
         The Aeron chair is an office chair sold by Herman Miller, first released in 1994. In 2010, it was called "America's best-selling chair". It is featured in the Museum of Modern Art's permanent collection.It was designed by Don Chadwick and Bill Stumpf and has received numerous accolades for its industrial design.</p>
       <h6 class="text-secondary">Our Price: $${price}</h6>
   </div>
 </div>
 </div>
 <div class="modal-footer">
 <a href="images/AMIA CHAIR - Copy (1).docx"class="px-3">see more <i class="fa-regular fa-file-word " style="font-size:30px"></i></a>
  <button type="button" class="btn btn-secondary">
  Buy Now
  </button>
  </div>
 </div>


 </div>

</div>


<!-- modalend -->
    </div>
  </div>

</div>
  `
}
gamingsection.innerHTML=gamingData



function colorChange(id) {
  cco = document.getElementById(id)
  if (cco.style.color != "red") {
    cco.style.color = "red"
  }
  else {
    cco.style.color = "black"
  }
}
var addToChart = document.getElementById("addToChart")
var hide = document.getElementById("minus")
// var countValue = count.innerHTML = 0
function minus(id) {
  // console.log('in', id)
  var count = document.getElementById('count'+id)
  // console.log('count',count)
addToChart.innerHTML=count
  
  if (itemCount != 0) {
    itemCount--
    count.innerHTML = itemCount
    console.log(itemCount)


  }
}
function plus(id) {
  // console.log('id', id)
  var count = document.getElementById('count'+id)
  // console.log('count',count)
  // console.log('in plus')
  itemCount++
  count.innerHTML = itemCount
  console.log(itemCount)
addToChart.innerHTML=count.innerHTML


}
function topAdd(){

}