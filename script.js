
var sidebar = document.querySelector('.sidebar');
var menu = document.querySelector('.menu');
var main = document.querySelector('.main');

            
window.addEventListener('load',() => {
    sidebar.style.transform = "translateX(-106%)";
    myfunction();
});

window.addEventListener('resize' , function () {
    myfunction();
})

function myfunction() {
    if (window.innerWidth < 1180) {
        sidebar.style.transform = "translateX(-106%)";
        menu.addEventListener('click' , function () {
        if (sidebar.style.transform == "translateX(-106%)") {
            sidebar.style.transform = "translateX(0%)";
        }
    });
    main.addEventListener('click', function () {
        if (sidebar.style.transform == "translateX(0%)") {
            sidebar.style.transform = "translateX(-106%)";
        }
    });
    }    
    else if (window.innerWidth > 1180) {
        sidebar.style.transform = "translateX(0%)";
        
    }
}