function loadPlaylist() {
    var ul = document.getElementById("playlist");
    for (var i = 0; i < playlist.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "<a href='#' onclick='playSong(" + i + ")'>" + playlist[i].title + "</a>";
        ul.appendChild(li);
    }
}
loadPlaylist()
