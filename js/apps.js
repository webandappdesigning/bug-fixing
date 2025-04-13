let box = document.getElementsByClassName("container");

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener("click", changeColor);
}

function changeColor() {
  for (var i = 0; i < box.length; i++) {
    box[i].classList.add("btn"); //is main simple classname ko replace kia hai classList.add sa
  }
}

// Reason: className = "btn" purani "container" class hata deta hai, is wajah se agle click pe wo elements loop mein nahi aate.
//classList.add("btn") sirf nayi class add karta hai bina purani class ko hataye, is liye sab elements barabar kaam karte hain.