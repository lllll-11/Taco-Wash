// 🍔 DATOS DEL MENÚ
const menuData = {
    "sections": [
        {
            "title": "LOS CLÁSICOS",
            "icon": "🌮",
            "description": "Nuestros tacos probados y aprobados. Todos los tacos estan echos con tortilla de maiz.",
            "items": [
                {"name": "Taco de pastor", "price": 18.00, "ingredients": "Pastor, cebolla, cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de bistec", "price": 18.00, "ingredients": "Bistec, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de chuleta", "price": 18.00, "ingredients": "Chuleta, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de cesina", "price": 18.00, "ingredients": "Cesina, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de chorizo", "price": 18.00, "ingredients": "Chorizo, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco campechano", "price": 24.00, "ingredients": "Bistec, Chorizo, Cilantro, cebolla.", "stars": 5, "emoji": ""},
            ]
        },
        {
            "title": "ESPECIALES DEL CHEF",
                        "icon": "",
            "description": "Combinaciones únicas y atrevidas, nuestro sello de la casa.",
            "items": [
                {"name": "El 'Soap Suds' (Gratinado)", "price": 35.00, "ingredients": "Bistec y Chorizo, gratinados con queso Oaxaca, sobre tortilla de harina.", "stars": 3, "emoji": ""},
                {"name": "Taco Tijuano", "price": 80.00, "ingredients": "carne al gusto, con una capa de aguacate triturado, sobre tortilla de maiz, al estilo Tijuana.", "stars": 5, "emoji": ""},
                {"name": "Costra 'Dry Clean'", "price": 45.00, "ingredients": "Queso frito crujiente que envuelve carne al pastor, sin tortilla.", "stars": 3, "emoji": ""}
            ]
        },
                {
            "title": "LO QUE SE ANTOJA",
                        "icon": "",
            "description": " Todo lo que necesitas para saciar ese antojo.",
            "items": [
                {"name": "Tlayuda Pequeña", "price": 120.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 4, "emoji": ""},
                {"name": "Tlayuda Mediana", "price": 140.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 4, "emoji": ""},
                {"name": "Tlayuda Grande", "price": 150.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 5, "emoji": ""},
                {"name": "Tlayuda Combinada", "price": 150.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 5, "emoji": ""},
                {"name": "Quesadilla", "price": 35.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, con tortilla de harina a mano.", "stars": 4, "emoji": ""},
                {"name": "Gringas", "price": 45.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, entre dos tortillas de harina", "stars": 3, "emoji": ""}
            ]
        },
    ]
};

// 🌟 FUNCIÓN PARA GENERAR ESTRELLAS
function generateStars(count) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        const star = i < count ? '<i class="fas fa-star star"></i>' : '<i class="fas fa-star star empty"></i>';
        stars += star;
    }
    return stars;
}

// 🚀 LÓGICA DE RENDERIZADO - NUEVO DISEÑO
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.sections.forEach(section => {
        // Crear header de sección
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.innerHTML = `
            <div class="section-icon">${section.icon}</div>
            <h2 class="section-title">${section.title}</h2>
            <p class="section-subtitle">${section.description}</p>
        `;
        container.appendChild(sectionHeader);

        // Crear grid de items
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        section.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item';

            const starsHTML = generateStars(item.stars || 5);

            itemCard.innerHTML = `
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="item-rating">
                    ${starsHTML}
                </div>
                <p class="item-description">${item.ingredients || item.note || ''}</p>
            `;

            itemsGrid.appendChild(itemCard);
        });

        container.appendChild(itemsGrid);
    });
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', renderMenu);