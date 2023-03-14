var audio = new Audio('/misc/roblox-cheeseburger-sound-effect-By-Tuna.mp3');

function toggle_meny() {
    document.getElementById('burger_icon').classList.toggle('burger_meny_showing')

    document.getElementById('burger_meny_list').classList.toggle('burger_meny_showing')

    document.getElementById('grid_parent').classList.toggle('burger_meny_showing')
    
    audio.play();
}

document.getElementById('burger_icon').addEventListener('click', toggle_meny)