function toggle_meny() {
    document.getElementById('burger_icon').classList.toggle('burger_meny_showing')

    document.getElementById('burger_meny_list').classList.toggle('burger_meny_showing')

    document.getElementById('grid_parent').classList.toggle('burger_meny_showing')
}

document.getElementById('burger_icon').addEventListener('click', toggle_meny)