// Carrega o arquivo JSON

fetch('./musicas/playlist.json')

  .then(response => response.json())

  .then(data => {

    const playlist = document.getElementById('playlist');

    const player = document.getElementById('player');

    let currentTrack = 0;

    // Adiciona cada música à lista

    data.forEach((track, index) => {

      const li = document.createElement('li');

      li.innerHTML = `${track.artist} - ${track.title}`;

      li.addEventListener('click', () => {

        currentTrack = index;

        playTrack();

      });

      playlist.appendChild(li);

    });

    // Toca a primeira música da lista

    playTrack();

    // Toca a próxima música quando a atual termina

    player.addEventListener('ended', () => {

      currentTrack++;

      if (currentTrack >= data.length) {

        currentTrack = 0;

      }

      playTrack();

    });

    // Função para tocar a música atual

    function playTrack() {

      const track = data[currentTrack];

      player.src = track.src;

      player.play();

    }

  });

