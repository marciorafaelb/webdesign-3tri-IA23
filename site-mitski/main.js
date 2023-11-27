const bt = document.querySelector('.icone-menu');
const menu = document.querySelector('.menu');

function toggleMenu() {
    bt.classList.toggle('opened');
    menu.classList.toggle('opened');
}

bt.addEventListener('click', toggleMenu);

const dialog = document.querySelector("dialog")
const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")

const album = document.querySelectorAll('.album');


function openAlbum(clickedAlbum) {
    let classOfAlbum = clickedAlbum.getAttribute('class');
    let firstClass = classOfAlbum.split(' ')[1];
    let dialog = document.querySelector(`dialog.${firstClass}`);
    dialog.showModal();
    if(dialog.open){
        document.querySelectorAll('dialog button').forEach(
            bt => bt.addEventListener('click', () => dialog.close()));
    }
}

album.forEach((album) => {
    album.addEventListener('click', () => openAlbum(album));
}
);