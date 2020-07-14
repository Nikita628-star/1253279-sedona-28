var button=document.querySelector(".search");var popup=document.querySelector(".hotel-search");button.addEventListener("click",function(a){a.preventDefault();var b=popup.className.split(" ");if(b.length==1){popup.classList.add("hotel-search-remove")}else{popup.classList.remove("hotel-search-remove")}});

