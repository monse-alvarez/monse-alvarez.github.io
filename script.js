/* HAMBURGER MENU */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


/* ARROW */
function HomeArrow() {
    const arrow = document.querySelector(".links");
    arrow.classList.toggle("open")
}

/* DARK MODE FOR DESKTOP */
let darktheme = localStorage.getItem('darktheme')
const themeswitch = document.getElementById('darkmode')

const enableDarkmode = () => {
    document.body.classList.add('darktheme')
    localStorage.setItem('darktheme','active')
}

const enableLightmode = () => {
    document.body.classList.remove('darktheme')
    localStorage.setItem('darktheme', null)
}

if(darktheme == "active") enableDarkmode()

themeswitch.addEventListener("click", () => {
    darktheme = localStorage.getItem('darktheme')
    darktheme != "active" ? enableDarkmode() : enableLightmode()
})

/* DARK MODE FOR MOBILE */
const theme_switch = document.getElementById('darkmobile')
theme_switch.addEventListener("click", () => {
    darktheme = localStorage.getItem('darktheme')
    darktheme != "active" ? enableDarkmode() : enableLightmode()
})

/* FOOTER */
var year = new Date().getFullYear();
var date = `Monserrat Alvarez ${year}`;
document.getElementsByTagName('footer')[0].innerHTML = date; 

/* IMAGE SLIDER 0 */
const images0 = document.querySelectorAll(".project0-slide");
const next0 = document.querySelector(".next-btn0");
const prev0 = document.querySelector(".prev-btn0");
const icons0 = document.querySelectorAll(".slide0-icon");
var counter0 = 0;

next0.addEventListener('click', slideNext0);
function slideNext0(){
    images0[counter0].style.animation = 'next1 0.5s ease-in forwards';
    if(counter0 >= images0.length-1){
        counter0 = 0;
    }
    else{
        counter0++;
    }
    images0[counter0].style.animation = 'next2 0.5s ease-in forwards';
    indicators0();
}

prev0.addEventListener('click', slidePrev0);
function slidePrev0(){
    images0[counter0].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter0 == 0){
        counter0 = images0.length-1;
    }
    else{
        counter0--;
    }
    images0[counter0].style.animation = 'prev2 0.5s ease-in forwards';
    indicators0();
}

function indicators0(){
    for(i = 0; i < icons0.length; i++){
        icons0[i].className = icons0[i].className.replace(' active', '');
    }
    icons0[counter0].className += ' active';
}

function switchImage0(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter0){
    images0[counter0].style.animation = 'next1 0.5s ease-in forwards';
    counter0 = imageId;
    images0[counter0].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter0){
        return;
    }
    else{
    images0[counter0].style.animation = 'prev1 0.5s ease-in forwards';
    counter0 = imageId;
    images0[counter0].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators0();
} 

/* IMAGE SLIDER 1 */
const images1 = document.querySelectorAll(".project1-slide");
const next1 = document.querySelector(".next-btn1");
const prev1 = document.querySelector(".prev-btn1");
const icons1 = document.querySelectorAll(".slide1-icon");
var counter1 = 0;

next1.addEventListener('click', slideNext1);
function slideNext1(){
    images1[counter1].style.animation = 'next1 0.5s ease-in forwards';
    if(counter1 >= images1.length-1){
        counter1 = 0;
    }
    else{
        counter1++;
    }
    images1[counter1].style.animation = 'next2 0.5s ease-in forwards';
    indicators1();
}

prev1.addEventListener('click', slidePrev1);
function slidePrev1(){
    images1[counter1].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter1 == 0){
        counter1 = images1.length-1;
    }
    else{
        counter1--;
    }
    images1[counter1].style.animation = 'prev2 0.5s ease-in forwards';
    indicators1();
}

function indicators1(){
    for(i = 0; i < icons1.length; i++){
        icons1[i].className = icons1[i].className.replace(' active', '');
    }
    icons1[counter1].className += ' active';
}

function switchImage1(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter1){
    images1[counter1].style.animation = 'next1 0.5s ease-in forwards';
    counter1 = imageId;
    images1[counter1].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter1){
        return;
    }
    else{
    images1[counter1].style.animation = 'prev1 0.5s ease-in forwards';
    counter1 = imageId;
    images1[counter1].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators1();
} 

/* IMAGE SLIDER 2 */
const images2 = document.querySelectorAll(".project2-slide");
const next2 = document.querySelector(".next-btn2");
const prev2 = document.querySelector(".prev-btn2");
const icons2 = document.querySelectorAll(".slide2-icon");
var counter2 = 0;

next2.addEventListener('click', slideNext2);
function slideNext2(){
    images2[counter2].style.animation = 'next1 0.5s ease-in forwards';
    if(counter2 >= images2.length-1){
        counter2 = 0;
    }
    else{
        counter2++;
    }
    images2[counter2].style.animation = 'next2 0.5s ease-in forwards';
    indicators2();
}

prev2.addEventListener('click', slidePrev2);
function slidePrev2(){
    images2[counter2].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter2 == 0){
        counter2 = images2.length-1;
    }
    else{
        counter2--;
    }
    images2[counter2].style.animation = 'prev2 0.5s ease-in forwards';
    indicators2();
}

function indicators2(){
    for(i = 0; i < icons2.length; i++){
        icons2[i].className = icons2[i].className.replace(' active', '');
    }
    icons2[counter2].className += ' active';
}

function switchImage2(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter2){
    images2[counter2].style.animation = 'next1 0.5s ease-in forwards';
    counter2 = imageId;
    images2[counter2].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter2){
        return;
    }
    else{
    images2[counter2].style.animation = 'prev1 0.5s ease-in forwards';
    counter2 = imageId;
    images2[counter2].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators2();
}


/* IMAGE SLIDER 3 */

const images3 = document.querySelectorAll(".project3-slide");
const next3 = document.querySelector(".next-btn3");
const prev3 = document.querySelector(".prev-btn3");
const icons3 = document.querySelectorAll(".slide3-icon");
var counter3 = 0;

next3.addEventListener('click', slideNext3);
function slideNext3(){
    images3[counter3].style.animation = 'next1 0.5s ease-in forwards';
    if(counter3 >= images3.length-1){
        counter3 = 0;
    }
    else{
        counter3++;
    }
    images3[counter3].style.animation = 'next2 0.5s ease-in forwards';
    indicators3();
}

prev3.addEventListener('click', slidePrev3);
function slidePrev3(){
    images3[counter3].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter3 == 0){
        counter3 = images3.length-1;
    }
    else{
        counter3--;
    }
    images3[counter3].style.animation = 'prev2 0.5s ease-in forwards';
    indicators3();
}

function indicators3(){
    for(i = 0; i < icons3.length; i++){
        icons3[i].className = icons3[i].className.replace(' active', '');
    }
    icons3[counter3].className += ' active';
}

function switchImage3(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter3){
    images3[counter3].style.animation = 'next1 0.5s ease-in forwards';
    counter3 = imageId;
    images3[counter3].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter3){
        return;
    }
    else{
    images3[counter3].style.animation = 'prev1 0.5s ease-in forwards';
    counter3 = imageId;
    images3[counter3].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators3();
}


/* IMAGE SLIDER 4 */

const images4 = document.querySelectorAll(".project4-slide");
const next4 = document.querySelector(".next-btn4");
const prev4 = document.querySelector(".prev-btn4");
const icons4 = document.querySelectorAll(".slide4-icon");
var counter4 = 0;

next4.addEventListener('click', slideNext4);
function slideNext4(){
    images4[counter4].style.animation = 'next1 0.5s ease-in forwards';
    if(counter4 >= images4.length-1){
        counter4 = 0;
    }
    else{
        counter4++;
    }
    images4[counter4].style.animation = 'next2 0.5s ease-in forwards';
    indicators4();
}

prev4.addEventListener('click', slidePrev4);
function slidePrev4(){
    images4[counter4].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter4 == 0){
        counter4 = images4.length-1;
    }
    else{
        counter4--;
    }
    images4[counter4].style.animation = 'prev2 0.5s ease-in forwards';
    indicators4();
}

function indicators4(){
    for(i = 0; i < icons4.length; i++){
        icons4[i].className = icons4[i].className.replace(' active', '');
    }
    icons4[counter4].className += ' active';
}

function switchImage4(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter4){
    images4[counter4].style.animation = 'next1 0.5s ease-in forwards';
    counter4 = imageId;
    images4[counter4].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter4){
        return;
    }
    else{
    images4[counter4].style.animation = 'prev1 0.5s ease-in forwards';
    counter4 = imageId;
    images4[counter4].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators4();
}