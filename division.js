// Datos completos con todas las divisiones
const divisiones = [
  {
    nombre: "Cuarta Infantil",
    jugadores: [
      {
        nombre: "Diego Fernández",
        foto: "https://randomuser.me/api/portraits/men/40.jpg",
        edad: 10,
        posicion: "Arquero",
        descripcion: "Gran reflejos y seguridad bajo los tres palos."
      },
      {
        nombre: "Sofía Ramírez",
        foto: "https://randomuser.me/api/portraits/women/41.jpg",
        edad: 11,
        posicion: "Delantera",
        descripcion: "Rápida y precisa, siempre buscando el gol."
      }
    ]
  },
  {
    nombre: "Tercera Infantil",
    jugadores: [
      {
        nombre: "Matías González",
        foto: "https://randomuser.me/api/portraits/men/42.jpg",
        edad: 11,
        posicion: "Mediocampista",
        descripcion: "Control del balón y buen pase."
      },
      {
        nombre: "Isabela Torres",
        foto: "https://randomuser.me/api/portraits/women/43.jpg",
        edad: 12,
        posicion: "Defensora",
        descripcion: "Fuerte y estratégica en defensa."
      }
    ]
  },
  {
    nombre: "Segunda Infantil",
    jugadores: [
      {
        nombre: "Luis Martínez",
        foto: "https://randomuser.me/api/portraits/men/44.jpg",
        edad: 12,
        posicion: "Delantero",
        descripcion: "Potente disparo y buen cabezazo."
      }
    ]
  },
  {
    nombre: "Primera Infantil",
    jugadores: [
      {
        nombre: "Juan Pérez",
        foto: "https://randomuser.me/api/portraits/men/10.jpg",
        edad: 12,
        posicion: "Delantero",
        descripcion: "Jugador rápido y habilidoso, con gran capacidad goleadora."
      },
      {
        nombre: "María López",
        foto: "https://randomuser.me/api/portraits/women/20.jpg",
        edad: 11,
        posicion: "Mediocampista",
        descripcion: "Excelente visión de juego y pase preciso."
      }
    ]
  },
  {
    nombre: "Rama Femenina",
    jugadores: [
      {
        nombre: "Diego Valdivia",
        foto: "https://randomuser.me/api/portraits/women/50.jpg",
        edad: 20,
        posicion: "Arquero",
        descripcion: "Jugador destacado por sus agiles reflejos y sus rapidos movimientos"
      },
    ]
  },
  {
    nombre: "Tercera Adulto",
    jugadores: [
      {
        nombre: "Pedro Castro",
        foto: "https://randomuser.me/api/portraits/men/60.jpg",
        edad: 25,
        posicion: "Mediocampista",
        descripcion: "Jugador versátil y con gran resistencia."
      }
    ]
  },
  {
    nombre: "Segunda Adulto",
    jugadores: [
      {
        nombre: "Diego Valdivia",
        foto: "Jugadores/segunda adulto/diego.jpg",
        edad: 23,
        Dorsal: 1,
        posicion: "Arquero",
        descripcion: "Jugador destacado por sus agiles reflejos y sus rapidos movimientos"
      },
      {
        nombre: "Luis Rebolledo",
        foto: "Jugadores/segunda adulto/luis.jpg",
        edad: 24,
        Dorsal: 15,
        posicion: "Defensa",
        descripcion: "Jugador destacado por su gran fuerza y rapidez defensiva, ademas de un buen juego aereo"
      },
      {
        nombre: "Sebastián Suazo",
        foto: "Jugadores/segunda adulto/suazo.jpg",
        edad: 23,
        Dorsal: 14,
        posicion: "Medio campista ofensivo",
        descripcion: "Jugador destacado por su buen juego de pies, gran habilidad con el balon y buen pase filtrado, puede disparar dentro como fuera del area"
      },
      {
        nombre: "Matias Cisternas (Gazu)",
        foto: "Jugadores/segunda adulto/gazu.jpg",
        edad: 26,
        Dorsal: 10,
        posicion: "Delantero",
        descripcion: "Jugador destacado por sus gran velocidad, gran movilidad con el balon y buena definicio, puede dar un buen centro o encarar y definir el."
      },
    ]
  },
  {
    nombre: "Primera Adulto",
    jugadores: [
      {
        nombre: "Jorge Ramírez",
        foto: "https://randomuser.me/api/portraits/men/70.jpg",
        edad: 29,
        posicion: "Arquero",
        descripcion: "Seguro y líder del equipo."
      }
    ]
  },
  {
    nombre: "Senior",
    jugadores: [
      {
        nombre: "Luis Gómez",
        foto: "https://randomuser.me/api/portraits/men/80.jpg",
        edad: 40,
        posicion: "Defensor",
        descripcion: "Experiencia y solidez en defensa."
      }
    ]
  },
  {
    nombre: "Super Senior",
    jugadores: [
      {
        nombre: "Luis Gómez",
        foto: "https://randomuser.me/api/portraits/men/81.jpg",
        edad: 45,
        posicion: "Defensor",
        descripcion: "Experiencia y solidez en defensa."
      }
    ]
  },
  {
    nombre: "Viejos Tercios",
    jugadores: [
      {
        nombre: "Luis Gómez",
        foto: "https://randomuser.me/api/portraits/men/82.jpg",
        edad: 50,
        posicion: "Defensor",
        descripcion: "Experiencia y solidez en defensa."
      }
    ]
  }
];

const divisionesLista = document.getElementById("divisiones-lista");
const jugadoresButtons = document.getElementById("jugadores-buttons");
const detalleJugador = document.getElementById("detalle-jugador");

// Render divisiones en sidebar
divisiones.forEach((division) => {
  const li = document.createElement("li");
  li.textContent = division.nombre;
  li.addEventListener("click", () => {
    // Marcar active
    document.querySelectorAll("#divisiones-lista li").forEach(el => el.classList.remove("active"));
    li.classList.add("active");

    mostrarJugadores(division.jugadores);
    limpiarDetalle();
  });
  divisionesLista.appendChild(li);
});

function mostrarJugadores(jugadores) {
  jugadoresButtons.innerHTML = "";
  if (jugadores.length === 0) {
    jugadoresButtons.innerHTML = "<p>No hay jugadores en esta división.</p>";
    return;
  }
  jugadores.forEach(jugador => {
    const btn = document.createElement("button");
    btn.textContent = jugador.nombre;
    btn.addEventListener("click", () => mostrarDetalleJugador(jugador));
    jugadoresButtons.appendChild(btn);
  });
}

function mostrarDetalleJugador(jugador) {
  detalleJugador.innerHTML = `
    <h3>${jugador.nombre}</h3>
    <img src="${jugador.foto}" alt="Foto de ${jugador.nombre}" />
    <p><strong>Edad:</strong> ${jugador.edad}</p>
    <p><strong>Posición:</strong> ${jugador.posicion}</p>
    <p>${jugador.descripcion}</p>
  `;
}

function limpiarDetalle() {
  detalleJugador.innerHTML = "<h3>Detalle del Jugador</h3><p>Selecciona un jugador para ver detalles</p>";
}
