// basic data for search & suggestions
const drinks = [
  { name: "Orange Blast", page: "drinks/orange_blast.html" },
  { name: "Jeera Fresh", page: "drinks/jeera_fresh.html" },
  { name: "Guava Punch", page: "drinks/guava_punch.html" },
  { name: "Apple Mint", page: "drinks/apple_mint.html" },
  { name: "Lemon Zing", page: "drinks/lemon_zing.html" },
  { name: "Berry Mix", page: "drinks/berry_mix.html" },
  { name: "Amla Boost", page: "drinks/amla_boost.html" },
  { name: "Pineapple Wave", page: "drinks/pineapple_wave.html" },
  { name: "Coconut Cooler", page: "drinks/coconut_cooler.html" },
  { name: "Watermelon Splash", page: "drinks/watermelon_splash.html" }
];

// DOM refs
const input = document.getElementById("searchInput");
const suggestionBox = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchBtn");

// suggestions logic
input && input.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  suggestionBox.innerHTML = "";
  if (!q) { suggestionBox.style.display = "none"; return; }

  const matched = drinks.filter(d => d.name.toLowerCase().includes(q));
  if (!matched.length) { suggestionBox.style.display = "none"; return; }

  matched.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d.name;
    li.addEventListener("click", () => {
      window.location.href = d.page;
    });
    suggestionBox.appendChild(li);
  });
  suggestionBox.style.display = "block";
});

// search button exact match
searchBtn && searchBtn.addEventListener("click", () => {
  const q = input.value.trim().toLowerCase();
  const exact = drinks.find(d => d.name.toLowerCase() === q);
  if (exact) window.location.href = exact.page;
  else alert("Drink not found. Try another name or click a suggestion.");
});

// close suggestions if click outside
document.addEventListener("click", (e) => {
  if (!e.target.closest('.search-wrap')) suggestionBox.style.display = "none";
});

// set year in footer
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear())