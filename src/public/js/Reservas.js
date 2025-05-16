
// Datos de los paquetes de tour
const tours = [
    {
        title: "San Pedro Familiar",
        description: "4 días de historia, playa y naturaleza para toda la familia.",
        images: ["./Imagenes/playa-guayacanes.jpg", "./Imagenes/juan-dolio-beach.jpg", "./Imagenes/Laguna-Mallen-picazo.jpg", "./Imagenes/cueva-de-las-maravillas-1024x576.jpg", "./Imagenes/crazy-horse.jpeg"],
        keywords: ["playa", "cueva", "laguna", "ranch"]
    },
    {
        title: "Escapada Romántica",
        description: "Un fin de semana romántico en playas de Juan Dolio con experiencias exclusivas.",
        images: ["./Imagenes/1.jfif", ".Imagenes/2.jpg", "./Imagenes/3.avif", "./Imagenes/4.jpg"],
        keywords: ["cueva", "ron", "playa"]
    },
    {
        title: "Entre Panas y Ron",
        description: "Diversión asegurada entre amigos con playas, buggies y ron premium.",
        images: ["./Imagenes/buggy.jpg", "./Imagenes/barcelo.webp", "./Imagenes/Antiguo_Casino_de_Puerto_Rico_Night.jpg"],
        keywords: ["ron", "casino", "buggy"]
    },
    {
        title: "7 Días de Caribe Cultural",
        description: "Una semana completa explorando cultura, naturaleza y playas.",
        images: ["./Imagenes/1.jfif", "./Imagenes/barcelo.webp", "./Imagenes/cueva-de-las-maravillas-1024x576.jpg", "./Imagenes/2.jpg"],
        keywords: ["cueva", "playa", "ron", "museo"]
    },
    {
        title: "Aventura Activa",
        description: "Para los aventureros: deportes acuáticos, trekking y buggies extremos.",
        images: ["./Imagenes/surf.jpg", "./Imagenes/kayak.avif", "./Imagenes/cueva-de-las-maravillas-1024x576.jpg", "./Imagenes/buggy.jpg"],
        keywords: ["surf", "kayak", "buggy", "cueva"]
    },
    {
        title: "San Pedro Zen",
        description: "Relájate con yoga, cultura y bienestar frente al mar.",
        images: ["./Imagenes/cueva-de-las-maravillas-1024x576.jpg", "./Imagenes/yoga.jpeg", "./Imagenes/Laguna-Mallen-picazo.jpg", "./Imagenes/barcelo.webp"],
        keywords: ["laguna", "cueva", "yoga", "ron"]
    }
];

// Mostrar tours en la página
const toursContainer = document.getElementById('toursContainer');

tours.forEach((tour, index) => {
    const card = document.createElement('div');
    card.className = "tour-card";
    card.innerHTML = `
        <div class="tour-image-container">
            <img src="${tour.images[0]}" alt="${tour.title}">
        </div>
        <div class="tour-content">
            <h3>${tour.title}</h3>
            <p>${tour.description}</p>
            <button>Reservar</button>
        </div>
    `;
    card.addEventListener('click', () => openModal(index));
    toursContainer.appendChild(card);
});

// Modal
const modal = document.getElementById('tourModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const reserveBtn = document.getElementById('reserveBtn');
const closeBtn = document.querySelector('.close');
let currentTourIndex = 0;
let currentImageIndex = 0;

function openModal(index) {
    currentTourIndex = index;
    currentImageIndex = 0;
    updateModal();
    modal.style.display = "block";
}

function updateModal() {
    const tour = tours[currentTourIndex];
    modalImage.src = tour.images[currentImageIndex];
    modalTitle.textContent = tour.title;
    modalDescription.textContent = tour.description;
}

document.getElementById('prevImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + tours[currentTourIndex].images.length) % tours[currentTourIndex].images.length;
    updateModal();
});

document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % tours[currentTourIndex].images.length;
    updateModal();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Buscador
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.tour-card');
    cards.forEach((card, index) => {
        const tour = tours[index];
        if (tour.title.toLowerCase().includes(value) || tour.keywords.some(k => k.includes(value))) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Botón reservar
reserveBtn.addEventListener('click', () => {
    window.location.href = "./Formreservas.ejs"; // Redirecciona a tu formulario de reserva
});
