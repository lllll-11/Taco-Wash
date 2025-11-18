const menuData = {
    "sections": [                {
                    "title": "Tips",
                    "type": "tips",
                    "icon": "🟢",
                    "description": "Acompáñalos con un buen acompañamiento (tips).",
                    "items": [
                        {"name": "Porción de aguacate", "price": 25.00, "ingredients": "Aguacate fresco para acompañar.", "stars": 5, "emoji": "🥑"},
                        {"name": "Papas a la francesa", "price": 35.00, "ingredients": "Papas crujientes con sal.", "stars": 5, "emoji": "🍟"}
                    ]
                },
                        {
                    "title": "Bebidas",
                    "type": "drinks",
                    "icon": "",
                    "description": "Bebidas y aguas frescas disponibles hoy.",
                    "items": [
                        {"name": "Agua de sabor GRATIS!!", "price": 0.00, "ingredients": "1 litro - disponible hoy, gratis.", "stars": 5, "emoji": ""}
                    ]
                },


        {
            "title": "LOS CLÁSICOS",
            "icon": "🌮",
            "description": "Nuestros tacos probados y aprobados. Todos los tacos estan echos con tortilla de maiz.",
            "items": [
                {"name": "Taco de pastor (2x1)", "price": 18.00, "ingredients": "Pastor, cebolla, cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de bistec", "price": 18.00, "ingredients": "Bistec, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de chuleta", "price": 18.00, "ingredients": "Chuleta, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de cecina", "price": 18.00, "ingredients": "Cecina, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco de chorizo", "price": 18.00, "ingredients": "Chorizo, Cebolla, Cilantro.", "stars": 4, "emoji": ""},
                {"name": "Taco combinado", "price": 20.00, "ingredients": "Carne de su eleccion, Cilantro, cebolla.", "stars": 5, "emoji": ""},
                {"name": "Taco campechano", "price": 24.00, "ingredients": "Bistec, Chorizo, Cilantro, cebolla.", "stars": 5, "emoji": ""},
            ]
        },
        {
            "title": "ESPECIALES DEL CHEF",
                        "icon": "",
            "description": "Combinaciones únicas y atrevidas, nuestro sello de la casa.",
            "items": [
                {"name": "El 'Soap Suds' (Gratinado)", "price": 35.00, "ingredients": "Bistec y Chorizo, gratinados con queso Oaxaca, sobre tortilla de harina.", "stars": 3, "emoji": ""},
                {"name": "Taco Tijuano", "price": 80.00, "ingredients": "Carne de su eleccion, con una capa de aguacate triturado, sobre tortilla de maiz, al estilo Tijuana.", "stars": 5, "emoji": ""},
                {"name": "Costra 'Dry Clean'", "price": 45.00, "ingredients": "Queso frito crujiente que envuelve carne al pastor, sin tortilla.", "stars": 5, "emoji": ""}
            ]
        },
                {
            "title": "LO QUE SE ANTOJA",
                        "icon": "",
            "description": " Todo lo que necesitas para saciar ese antojo.",
            "items": [
                {"name": "Tlayuda sencilla", "price": 100.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 4, "emoji": ""},
                {"name": "Tlayuda doble", "price": 115.00, "ingredients": "Dos carnes de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 4, "emoji": ""},
                {"name": "Tlayuda triple", "price": 130.00, "ingredients": "Tres carnes de su eleccion, con quesillo Oaxaca, frijol, con o sin verdura", "stars": 5, "emoji": ""},
                {"name": "Tlayuda Estilo Oaxaca", "price": 200.00, "ingredients": "Ps una tlayuda estilo Oaxaca", "stars": 5, "emoji": ""},
                {"name": "Quesadilla", "price": 25.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, con tortilla de harina a mano.", "stars": 4, "emoji": ""},
                {"name": "Gringa", "price": 45.00, "ingredients": "Carne de su eleccion, con quesillo Oaxaca, entre dos tortillas de harina", "stars": 3, "emoji": ""}
            ]
        },
        {
            "title": "Tortas",
                        "icon": "",
            "description": "Que no falten nunca las tortas.",
            "items": [
                {"name": "Torta bistec", "price": 60.00, "ingredients": "Bistec, con quesillo Oaxaca, mayonesa, aguacate ", "stars": 5, "emoji": ""},
                {"name": "Torta chuleta", "price": 60.00, "ingredients": "Chuleta, con quesillo Oaxaca, mayonesa, aguacate ", "stars": 5, "emoji": ""},
                {"name": "Torta Choriqueso", "price": 50.00, "ingredients": "Chorizo, con quesillo Oaxaca, mayonesa, aguacate ", "stars": 5, "emoji": ""},
                {"name": "Torta D' Alambre", "price": 65.00, "ingredients": "El alambre de su eleccion, con quesillo Oaxaca, mayonesa, aguacate ", "stars": 5, "emoji": ""},
                {"name": "Torta pastor", "price": 70.00, "ingredients": "Pastor, con quesillo Oaxaca, mayonesa, aguacate ", "stars": 5, "emoji": ""},

            ]
        },
    ]
};

function generateStars(count) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        const star = i < count ? '<i class="fas fa-star star"></i>' : '<i class="fas fa-star star empty"></i>';
        stars += star;
    }
    return stars;
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.sections.forEach(section => {
        const sectionHeader = document.createElement('div');
        const sectionClass = 'section-header' + (section.type ? ' ' + section.type : '');
        sectionHeader.className = sectionClass;
        sectionHeader.innerHTML = `
            <div class="section-icon">${section.icon}</div>
            <h2 class="section-title">${section.title}</h2>
            <p class="section-subtitle">${section.description}</p>
        `;
        container.appendChild(sectionHeader);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        section.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-item' + (section.type ? ' ' + section.type : '');

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

document.addEventListener('DOMContentLoaded', renderMenu);