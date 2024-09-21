var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})


closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// SEARCH BAR CODE

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")

var productList = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) 
            {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "inline"
        }
    }
})