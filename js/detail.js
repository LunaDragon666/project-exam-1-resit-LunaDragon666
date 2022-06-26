// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//API 
const recipeTitle = document.querySelector("title").innerHTML = "Good Food Mood | Recipe";

/*
const detailContainer = document.querySelector(".product-details");
const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get("id");

console.log(id);

const theUrl = "https://tgh.monikalie.no/wp-json/wc/store/products/" + id;

console.log(url);
*/