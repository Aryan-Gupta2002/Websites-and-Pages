// toggle menu button
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
function toggleMenu(){
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}
menu.addEventListener("click", function(e){
    e.preventDefault();
    toggleMenu();
})
// Adding Functionality and changing elements with respect to cars models
const bgVideoList = document.querySelectorAll('.bg-video');
const trailers = document.querySelectorAll('.trailer');
const models = document.querySelectorAll('.model');

function changeVideo(name){
    // Using JS higher order array function forEach
    // Now giving the functionality to change the car in BG with change in gallery image
    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
    // Changing cars name
    models.forEach(model =>{
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });
    // Changing trailer videos
    // trailers.forEach(model =>{
    //     model.classList.remove('active');
    //     if(model.classList.contains(name)){
    //         model.classList.add('active');
    //     }
    // });
}

const items = document.querySelectorAll('.carousel-item');
items.forEach(items => {
    items.addEventListener("click",function(){
        const name = this.getAttribute("data-name");
        changeVideo(name);
    })
})

// Video play and pause button

const pausebtn = document.querySelector('.pause');
const playbtn = document.querySelector('.play');
function toggleplaypause(){
    playbtn.classList.toggle('active');
    pausebtn.classList.toggle('active');
}

pausebtn.addEventListener('click', function(e){
    e.preventDefault();
    bgVideoList.forEach(video=>{
        video.pause();
        // video.style.display='none';
    });
    toggleplaypause();
})
playbtn.addEventListener('click', function(e){
    e.preventDefault();
    bgVideoList.forEach(video=>{
        video.play();
        // video.style.display='block';
    });
    toggleplaypause();
})  