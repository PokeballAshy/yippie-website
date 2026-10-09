// Array of tea menu items
const teas = [
    {
        name: "Iron Golem Oolong",
        category: "oolong",
        origin: "Anxi, Fujian • Spring Harvest",
        notes: "Floral, orchid aromatics with a smooth, heavy mineral finish."
    },
    {
        name: "Aster Dragon Tears",
        category: "green-tea",
        origin: "Zhejiang, China • First Flush",
        notes: "Hand-rolled green tea pearls infused with fresh night-blooming jasmine."
    },
    {
        name: "Eldritch Horror Grey Reserve",
        category: "black-tea",
        origin: "Sri Lanka • Single Estate",
        notes: "Bold black tea scented with double-pressed bergamot oil and cornflower."
    },
    {
        name: "Chamomile Shabang Diva Blend",
        category: "herbal",
        origin: "Edfu, Egypt • Organic",
        notes: "Caffeine-free golden chamomile heads with lavender and lemongrass."
    }
];

// Part 2: Render thingy IM TIRED GRAMPA
const menuGrid = document.getElementById("menu-grid");

function renderMenu(items) {
    menuGrid.innerHTML = ""; // Clear existing cards
    
    items.forEach(tea => {
        const card = document.createElement("article");
        card.className = "tea-card";
        card.setAttribute("data-category", tea.category);
        
        card.innerHTML = `
            <span class="card-tag">${tea.category.replace("-", " ")}</span>
            <h3>${tea.name}</h3>
            <p class="origin">${tea.origin}</p>
            <p class="notes">${tea.notes}</p>
        `;
        
        menuGrid.appendChild(card);
    });
}

// Initial render on page load
renderMenu(teas);

// Part 3: Filter Buttons Logic
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Toggle active button style
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        if (category === "all") {
            renderMenu(teas);
        } else {
            const filteredTeas = teas.filter(tea => tea.category === category);
            renderMenu(filteredTeas);
        }
    });
});