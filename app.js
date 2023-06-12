var iconbtn = document.querySelector('.icon')
var sidenavbar = document.querySelector('.side-nav')
var x = document.querySelector('.x')
var sidebarclose = document.querySelector('.closebtn')
var body = document.querySelector('.body')

iconbtn.addEventListener('click',()=>{
    sidenavbar.classList.toggle('closebtn')
});

x.addEventListener('click',()=>{
    sidenavbar.classList.remove('closebtn')
});
