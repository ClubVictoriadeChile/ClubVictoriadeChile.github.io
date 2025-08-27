const categorias = [
  "Cuarta Infantil",
  "Tercera Infantil",
  "Segunda Infantil",
  "Primera Infantil",
  "Rama Femenina",
  "Tercera Adulto",
  "Segunda Adulto",
  "Primera Adulto",
  "Senior",
  "Super Senior",
  "Viejos Tercios"
];

const etiquetasPartidosPorCategoria = {};
categorias.forEach(cat => {
  etiquetasPartidosPorCategoria[cat] = [
    "Estrella del Janequeo",
    "Botafogo",
    "Corporacion Everton",
    "Atlantic Reefer",
    "Flecha Verde",
    "Quinto Sector",
    "Alejandro Navarrete",
    "Juan Carlos Peña",
    "Tres Estrellas",
    "Real Chile",
    "Reñaca Bajo"
  ];
});

const resultadosReales = {
  "Cuarta Infantil": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: ["videos/gol1.mp4"] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Tercera Infantil": {
    1: { resultado: "1 - 1", goleadores: ["Ana (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Segunda Infantil": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Primera Infantil": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Rama Femenina": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Tercera Adulto": {
    1: { resultado: "4 - 1", goleadores: ["Paulo Diaz (2)", "Álvaro (1)", "David Alvarez (1)"], videos: ["videos/gol1.mp4","videos/gol2.mp4"] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Segunda Adulto": {
    1: { resultado: "2 - 0", goleadores: ["Martin", "Roberto"], videos: [] },
    2: { resultado: "1 - 1", goleadores: ["nacho"], videos: [] },
    3: { resultado: "9 - 1", goleadores: ["gazu x4", "cele x2", "martin", "suazo", "Luis"], videos: ["goles/segunda adulto/vs everton/gol7.mp4","goles/segunda adulto/vs everton/gol8.mp4"] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Primera Adulto": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Senior": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Super Senior": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  },
  "Viejos Tercios": {
    1: { resultado: "3 - 1", goleadores: ["Juan (2)", "Pedro (1)"], videos: [] },
    2: { resultado: "0 - 2", goleadores: [], videos: [] },
    3: { resultado: "0 - 2", goleadores: [], videos: [] },
    4: { resultado: "0 - 2", goleadores: [], videos: [] },
    5: { resultado: "0 - 2", goleadores: [], videos: [] },
    6: { resultado: "0 - 2", goleadores: [], videos: [] },
    7: { resultado: "0 - 2", goleadores: [], videos: [] },
    8: { resultado: "0 - 2", goleadores: [], videos: [] },
    9: { resultado: "0 - 2", goleadores: [], videos: [] },
    10: { resultado: "0 - 2", goleadores: [], videos: [] },
    11: { resultado: "0 - 2", goleadores: [], videos: [] },
  }
};

// --- Código para acordeón y mostrar resultados + videos ---
const acordeon = document.getElementById("acordeonCategorias");
const resultadoDisplay = document.getElementById("resultadoDisplay");

function normalizeID(text) {
  return text.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
}

function crearAcordeon() {
  categorias.forEach(categoria => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("acordeon-item");

    const boton = document.createElement("button");
    boton.classList.add("acordeon-titulo");
    boton.textContent = categoria;
    boton.addEventListener("click", () => {
      contenedor.classList.toggle("abierto");
    });

    const contenido = document.createElement("div");
    contenido.classList.add("acordeon-contenido");

    etiquetasPartidosPorCategoria[categoria].forEach((rival, index) => {
      const btnPartido = document.createElement("button");
      btnPartido.textContent = rival;
      btnPartido.classList.add("boton-rival");
      btnPartido.addEventListener("click", () => {
        mostrarResultado(categoria, index + 1);
      });
      contenido.appendChild(btnPartido);
    });

    contenedor.appendChild(boton);
    contenedor.appendChild(contenido);
    acordeon.appendChild(contenedor);
  });
}

function toggleVideo(id) {
  const videoElem = document.getElementById(id);
  if (videoElem.style.display === "none" || videoElem.style.display === "") {
    videoElem.style.display = "block";
  } else {
    videoElem.style.display = "none";
  }
}

function mostrarResultado(categoria, partidoNum) {
  const info = (resultadosReales[categoria] && resultadosReales[categoria][partidoNum]) || {
    resultado: "Sin resultado",
    goleadores: [],
    videos: []
  };

  const rivalNombre = etiquetasPartidosPorCategoria[categoria]
    ? etiquetasPartidosPorCategoria[categoria][partidoNum - 1]
    : "Rival desconocido";

  const escudoClub = "victoria.png";
  const escudoRival = `escudos/rival${partidoNum}.png`;

  const goleadoresHTML = info.goleadores.length > 0
    ? `<ul>${info.goleadores.map(g => `<li>${g}</li>`).join("")}</ul>`
    : "<p>No hay goleadores registrados.</p>";

  let videosHTML = "";
  if (info.videos && info.videos.length > 0) {
    videosHTML = `
      <div class="videos-container">
        <h3>🎥 Videos de Goles</h3>
        <div class="videos-list">
    `;
    
    info.videos.forEach((video, i) => {
      const videoID = `video_${normalizeID(categoria)}_${partidoNum}_${i}`;
      videosHTML += `
        <div class="video-item">
          <button class="boton-video" onclick="toggleVideo('${videoID}')">
            📹 Ver Gol ${i + 1}
          </button>
          <div class="video-wrapper" id="${videoID}" style="display: none;">
            <video src="${video}" controls>
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>
      `;
    });
    
    videosHTML += `
        </div>
      </div>
    `;
  }

  resultadoDisplay.innerHTML = `
    <div class="partido-info">
      <img src="${escudoClub}" alt="Escudo Club" class="escudo" />
      <div class="resultado-texto">
        <h2>VS ${rivalNombre}</h2>
        <p><strong>Resultado:</strong> ${info.resultado || "Sin resultado"}</p>
        <div class="goleadores-section">
          <strong>⚽ Goleadores:</strong>
          ${goleadoresHTML}
        </div>
      </div>
      <img src="${escudoRival}" alt="Escudo Rival" class="escudo" onerror="this.style.display='none'" />
    </div>
    ${videosHTML}
  `;
}

// Inicializar acordeón al cargar la página
crearAcordeon();