const menu = document.getElementById('menu-label'); 
const sidebar = document.getElementsByClassName('sidebar')[0]; 

menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
})

document.getElementById('createbutton').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});