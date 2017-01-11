//Things to play with:
//FONT SIZE
//FONT COLOR
//ROTATE
//IMAGE BLUR


// GET ALL INPUT ELEMENTS
const allInput = document.querySelectorAll(".container input");
console.log(allInput);

allInput.forEach(function(input) {
    input.addEventListener("change", function(){
        console.log(this);
        const sizing = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value+sizing);
        console.log(this.name +": "+this.value +sizing);
    });

})


//TODO: Find image to properly test for blur
//TODO: add required styles for intended effect - color, blur
//TODO: add comments to help practice and explain your code
