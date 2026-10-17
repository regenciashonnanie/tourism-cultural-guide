"use strict";

const places = [
  {
    id: "boac-cathedral", name: "Boac Cathedral", municipality: "Boac", category: "Heritage",
    categories: ["heritage"], theme: "heritage", symbol: "⌂",
    summary: "A landmark church above the old town, closely tied to Boac’s history and community life.",
    detail: "The Immaculate Conception Cathedral stands on a hill overlooking Boac. The church and historic town center offer a window into the island’s religious and civic heritage.",
    tip: "This is an active place of worship. Dress modestly, keep voices low, and check locally for visiting hours."
  },
  {
    id: "old-boac", name: "Boac old town", municipality: "Boac", category: "Heritage",
    categories: ["heritage"], theme: "heritage", symbol: "⌂",
    summary: "Take a slow walk through the provincial capital’s streets, plazas, and everyday island life.",
    detail: "Explore Boac on foot to notice its heritage buildings, local shops, and the layered character of the island’s capital. Ask residents or a local guide about the stories behind the streets.",
    tip: "Be considerate around homes, businesses, and church grounds; support local shops along the way."
  },
  {
    id: "luzon-datum", name: "Luzon Datum of 1911", municipality: "Mogpog", category: "Landmark",
    categories: ["heritage", "nature"], theme: "mountain", symbol: "⌖",
    summary: "A geodetic reference marker at Mt. Mataas, an unusual landmark with a wider Philippine story.",
    detail: "The Luzon Datum of 1911 is a geodetic reference point associated with the country’s mapping network, located on Mt. Mataas in Mogpog. Access may require a hike and local coordination.",
    tip: "Confirm access and trail conditions with the municipality or a local guide before setting out."
  },
  {
    id: "paadjao-falls", name: "Paadjao Falls", municipality: "Mogpog", category: "Nature",
    categories: ["nature"], theme: "waterfall", symbol: "≋",
    summary: "A green, freshwater escape tucked into Mogpog’s upland landscape.",
    detail: "Paadjao Falls is a nature stop in Mogpog. Conditions at waterfalls change with rainfall, so check current local advice before visiting or swimming.",
    tip: "Use established paths, avoid slippery rocks, and take all belongings and rubbish back with you."
  },
  {
    id: "tres-reyes", name: "Tres Reyes Islands", municipality: "Gasan", category: "Coast & islands",
    categories: ["nature", "coast"], theme: "island", symbol: "◒",
    summary: "A group of small offshore islands known for clear water and quiet coastal scenery.",
    detail: "The Tres Reyes group lies off Gasan and is commonly associated with the islands of Gaspar, Melchor, and Baltazar. Boat access depends on weather, sea conditions, and local arrangements.",
    tip: "Arrange boats locally, agree on safety details, and avoid disturbing reefs or wildlife."
  },
  {
    id: "gasan-church", name: "Gasan heritage town", municipality: "Gasan", category: "Heritage",
    categories: ["heritage"], theme: "heritage", symbol: "⌂",
    summary: "Discover town heritage and community traditions in a municipality known for local crafts.",
    detail: "Gasan is associated with Marinduque’s craft traditions and festive culture. A respectful town visit is a chance to meet local makers and learn what is being celebrated.",
    tip: "Buy directly from local makers when possible, and ask permission before photographing workshops."
  },
  {
    id: "malindig", name: "Mount Malindig", municipality: "Buenavista", category: "Nature",
    categories: ["nature"], theme: "mountain", symbol: "▲",
    summary: "Marinduque’s prominent volcanic mountain, rising above forest, farms, and coast.",
    detail: "Mount Malindig is the island’s best-known mountain and a destination for nature lovers. Routes and access can vary; plan with local guides and follow current conservation advice.",
    tip: "Check weather and access before a hike. Stay on approved trails and pack out everything you bring."
  },
  {
    id: "bathala-cave", name: "Bathala Caves", municipality: "Buenavista", category: "Nature",
    categories: ["nature"], theme: "mountain", symbol: "◌",
    summary: "A cave system that rewards curious visitors with a guided, careful approach.",
    detail: "Bathala Caves are a natural attraction in Buenavista. Cave conditions are sensitive and can be challenging; visitor access and safe routes should be confirmed locally.",
    tip: "Visit with an authorized local guide. Do not touch formations, leave markings, or enter unsafe passages."
  },
  {
    id: "poctoy", name: "Poctoy Beach", municipality: "Torrijos", category: "Coast & islands",
    categories: ["nature", "coast"], theme: "island", symbol: "≈",
    summary: "A well-loved stretch of sand with a view toward Mount Malindig and the open sea.",
    detail: "Poctoy Beach is a popular Torrijos shoreline for a relaxed swim and a long look at the island landscape. Conditions and facilities vary by season.",
    tip: "Check sea conditions, use designated swimming areas, and leave the beach as you found it."
  },
  {
    id: "pulang-lupa", name: "Pulang Lupa memorial", municipality: "Torrijos", category: "Heritage",
    categories: ["heritage"], theme: "festival", symbol: "✳",
    summary: "A landmark commemorating the Battle of Pulang Lupa and its place in Philippine history.",
    detail: "The Battle of Pulang Lupa took place in 1900 during the Philippine–American War. The memorial in Torrijos honors Filipino forces and invites visitors to learn more about the island’s past.",
    tip: "Treat the memorial as a place of remembrance and follow any guidance posted on site."
  },
  {
    id: "maniwaya", name: "Maniwaya Island", municipality: "Santa Cruz", category: "Coast & islands",
    categories: ["nature", "coast"], theme: "island", symbol: "◒",
    summary: "A laid-back island getaway known for its shore, nearby sandbars, and boat trips.",
    detail: "Maniwaya is reached by boat from Santa Cruz. Nearby sandbars such as Palad Sandbar are tide-dependent and may not be exposed at every visit.",
    tip: "Confirm boat schedules, tides, and weather with local operators. Leave no single-use plastics behind."
  },
  {
    id: "mongpong", name: "Mongpong Island", municipality: "Santa Cruz", category: "Coast & islands",
    categories: ["nature", "coast"], theme: "island", symbol: "⌁",
    summary: "A scenic island stop with striking coastal rock formations and clear-water views.",
    detail: "Mongpong Island is among Santa Cruz’s offshore destinations. Ungab Rock Formation is a noted natural feature in the area; boat access is weather dependent.",
    tip: "Keep a safe distance from wave-washed rocks and follow boat crew instructions."
  }
];

const storageKey = "marinduque-island-list-v1";
const visitedStorageKey = "marinduque-visited-list-v1";
const grid = document.querySelector("#place-grid");
const searchInput = document.querySelector("#place-search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const checklistItems = document.querySelector("#checklist-items");
const checklistEmpty = document.querySelector("#checklist-empty");
const listCount = document.querySelector("#list-count");
const storageNotice = document.querySelector("#storage-notice");
const dialog = document.querySelector("#place-dialog");
let activeFilter = "all";
let storageAvailable = true;
let savedIds = loadSavedIds();
let visitedIds = loadSavedIds(visitedStorageKey);

function loadSavedIds(key = storageKey) {
  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.some((id) => typeof id !== "string")) {
      throw new TypeError("Saved places data is invalid.");
    }
    return [...new Set(parsed)].filter((id) => places.some((place) => place.id === id));
  } catch (error) {
    storageAvailable = false;
    return [];
  }
}

function persistSavedIds() {
  if (!storageAvailable) return;
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(savedIds));
    window.localStorage.setItem(visitedStorageKey, JSON.stringify(visitedIds));
    storageNotice.hidden = true;
  } catch (error) {
    storageAvailable = false;
    storageNotice.textContent = "Your list works for this visit, but this browser could not save it for next time.";
    storageNotice.hidden = false;
  }
}

function createPlaceCard(place) {
  const article = document.createElement("article");
  article.className = "place-card";
  article.dataset.categories = place.categories.join(" ");
  article.dataset.search = `${place.name} ${place.municipality} ${place.category}`.toLowerCase();

  const art = document.createElement("div");
  art.className = "place-art";
  art.dataset.theme = place.theme;
  art.setAttribute("aria-hidden", "true");
  const sun = document.createElement("span");
  sun.className = "art-sun";
  const mountain = document.createElement("span");
  mountain.className = "art-mountain";
  const symbol = document.createElement("span");
  symbol.className = "place-symbol";
  symbol.textContent = place.symbol;
  const label = document.createElement("span");
  label.className = "art-label";
  label.textContent = place.category;
  art.append(sun, mountain, symbol, label);

  const content = document.createElement("div");
  content.className = "place-card-content";
  const meta = document.createElement("div");
  meta.className = "place-meta";
  const town = document.createElement("span");
  town.textContent = place.municipality;
  const category = document.createElement("strong");
  category.textContent = place.category;
  meta.append(town, category);

  const titleRow = document.createElement("div");
  titleRow.className = "place-title-row";
  const title = document.createElement("h3");
  title.textContent = place.name;
  const openButton = document.createElement("button");
  openButton.className = "card-open";
  openButton.type = "button";
  openButton.setAttribute("aria-label", `View details for ${place.name}`);
  openButton.textContent = "↗";
  openButton.addEventListener("click", () => openPlaceDetails(place));
  titleRow.append(title, openButton);

  const summary = document.createElement("p");
  summary.textContent = place.summary;
  const actions = document.createElement("div");
  actions.className = "card-actions";
  const detailsButton = document.createElement("button");
  detailsButton.className = "details-link";
  detailsButton.type = "button";
  detailsButton.textContent = "Explore details";
  detailsButton.addEventListener("click", () => openPlaceDetails(place));
  const addButton = document.createElement("button");
  addButton.className = "add-place";
  addButton.type = "button";
  addButton.dataset.placeId = place.id;
  addButton.setAttribute("aria-pressed", String(savedIds.includes(place.id)));
  addButton.addEventListener("click", () => toggleSaved(place.id));
  actions.append(detailsButton, addButton);
  content.append(meta, titleRow, summary, actions);
  article.append(art, content);
  updateAddButton(addButton, place);
  return article;
}

function updateAddButton(button, place) {
  const isSaved = savedIds.includes(place.id);
  button.setAttribute("aria-pressed", String(isSaved));
  button.innerHTML = isSaved ? "<span aria-hidden=\"true\">✓</span> Added" : "<span aria-hidden=\"true\">＋</span> Add to list";
  button.setAttribute("aria-label", `${isSaved ? "Remove" : "Add"} ${place.name} ${isSaved ? "from" : "to"} my places`);
}

function renderPlaces() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = places.filter((place) => {
    const matchesCategory = activeFilter === "all" || place.categories.includes(activeFilter);
    const text = `${place.name} ${place.municipality} ${place.category} ${place.summary}`.toLowerCase();
    return matchesCategory && text.includes(query);
  });
  grid.replaceChildren(...matches.map(createPlaceCard));
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "place" : "places"} across Marinduque`;
  emptyState.hidden = matches.length !== 0;
}

function renderChecklist() {
  const savedPlaces = savedIds.map((id) => places.find((place) => place.id === id)).filter(Boolean);
  listCount.textContent = `${savedPlaces.length} ${savedPlaces.length === 1 ? "saved place" : "saved places"}`;
  checklistEmpty.hidden = savedPlaces.length !== 0;
  checklistItems.replaceChildren(...savedPlaces.map((place) => {
    const item = document.createElement("li");
    item.className = "checklist-item";
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = visitedIds.includes(place.id);
    checkbox.setAttribute("aria-label", `Mark ${place.name} as visited`);
    const text = document.createElement("span");
    text.textContent = place.name;
    const town = document.createElement("small");
    town.textContent = place.municipality;
    text.append(town);
    label.append(checkbox, text);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) visitedIds = [...visitedIds, place.id];
      else visitedIds = visitedIds.filter((id) => id !== place.id);
      persistSavedIds();
      item.classList.toggle("is-checked", checkbox.checked);
    });
    item.classList.toggle("is-checked", checkbox.checked);
    const remove = document.createElement("button");
    remove.className = "remove-place";
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${place.name} from my places`);
    remove.addEventListener("click", () => toggleSaved(place.id));
    item.append(label, remove);
    return item;
  }));
}

function toggleSaved(id) {
  if (savedIds.includes(id)) savedIds = savedIds.filter((savedId) => savedId !== id);
  else savedIds = [...savedIds, id];
  persistSavedIds();
  renderChecklist();
  document.querySelectorAll(`[data-place-id="${id}"]`).forEach((button) => {
    const place = places.find((item) => item.id === id);
    if (place) updateAddButton(button, place);
  });
  const dialogPlace = places.find((place) => place.id === id);
  if (dialog.open && dialogPlace) updateDialogButton(dialogPlace);
}

function updateDialogButton(place) {
  const button = document.querySelector("#dialog-add");
  const isSaved = savedIds.includes(place.id);
  button.innerHTML = isSaved ? "Remove from my places <span aria-hidden=\"true\">−</span>" : "Add to my places <span aria-hidden=\"true\">＋</span>";
  button.setAttribute("aria-pressed", String(isSaved));
  button.onclick = () => toggleSaved(place.id);
}

function openPlaceDetails(place) {
  const art = document.querySelector("#dialog-art");
  art.dataset.theme = place.theme;
  document.querySelector("#dialog-town").textContent = `${place.municipality} · MARINDUQUE`;
  document.querySelector("#dialog-title").textContent = place.name;
  document.querySelector("#dialog-category").textContent = place.category;
  document.querySelector("#dialog-description").textContent = place.detail;
  document.querySelector("#dialog-tip").textContent = place.tip;
  updateDialogButton(place);
  dialog.showModal();
}

dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((filter) => {
      const isSelected = filter === button;
      filter.classList.toggle("is-active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });
    renderPlaces();
  });
});
searchInput.addEventListener("input", renderPlaces);

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !expanded);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));

if (!storageAvailable) {
  storageNotice.textContent = "Browser storage is unavailable or the saved list could not be read. Your current choices will last for this visit.";
  storageNotice.hidden = false;
}
renderPlaces();
renderChecklist();
