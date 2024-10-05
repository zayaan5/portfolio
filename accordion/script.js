const headings = document.querySelectorAll("h2")
// headings[0]
// headings[1]
// headings[2]
 for( let i= 0 ;i < 3;i++) {
    // console.log (headings[i])
    headings[i].addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else{
            this.classList.add("active");
        }
    })
 }

