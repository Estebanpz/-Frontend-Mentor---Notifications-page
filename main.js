const number = document.querySelector('.number');
const markAll = document.getElementById('mark-all-read');
const posts = document.querySelectorAll('.post');
const notifications = document.querySelectorAll('.status');
let numberNotifications = 3;
//Marcar todos como leídos - button
markAll.addEventListener('click', () => {
    number.innerHTML = "0";
    notifications.forEach((read) => {
        read.classList.remove('not-read');
    });
});
// Marcar 1 a uno, y restar
posts.forEach((post) => {
    post.addEventListener('click', () => {
        if(numberNotifications <= 0){
            number.innerText ="0"
        }else{
            number.innerText = `${numberNotifications = numberNotifications - 1}`;
            post.querySelector('.status').classList.remove('not-read');
        };
        console.log(numberNotifications);
    });
});