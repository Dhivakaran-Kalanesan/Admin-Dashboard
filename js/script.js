




//   Sidebar Toggle Button


var sidebarToggler = document.getElementById("bar");

var sidebar = document.getElementById("sidebar");

sidebarToggler.onclick = () => {

    sidebar.classList.toggle("sidebar-toggle");

}


var sidebarCtoggler = document.getElementById("close");

var sidebar = document.getElementById("sidebar");

sidebarCtoggler.onclick = () => {

    sidebar.classList.replace("sidebar-toggle", "sidebar");

}


// Dropdown Box

var logo = document.getElementById("logo");

var dB = document.getElementById("dropdown-box");


logo.onclick = () => {

    dB.classList.toggle("dropdown-box-visible");

}



// Mobar


var mobar = document.getElementById("mobar");

var header = document.getElementById("header");

var content = document.getElementById("content");

var footer = document.getElementById("footer");


mobar.onclick = () => {
    sidebar.classList.toggle("st");
    header.classList.toggle("ht");
    footer.classList.toggle("ft");

    content.classList.toggle("ct");

}


//  First N numbers Total

function nt(n) {

    var total = 0;

    for (var i = 0; i <= n; i++) {

        total = total + i;

    }

    //  Formula Method

    // var total = n * (n + 1)/ 2;


    console.log(total);

}

nt(10);


// Factorial

function factorial(f) {

    for (var j = 1; j <= f; j++) {

        if (j == 1) {
            var t = j * j;
        } else {
            var t = t * j;
        }

    }
    console.log(t);
}

factorial(5);



// Fibonacci

function fibonacci(f)
{
var num1 = 0;
var num2 = 1;

var nextNum;

for (var i = 1; i <= f; i++) {

    console.log(num1);

    nextNum = num1 + num2;

    num1 = num2;

    num2 = nextNum;

}
}

fibonacci(5);


// Odd or Even

function ore(n){

    if(n % 2 == 0){
        console.log(n +" is Even Number");
    }else{
        console.log(n +" is Odd Number");

    }
    
}

ore(1);