import { y as attr_class, z as bind_props, F as stringify, G as head, J as attr, K as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import { k as fallback } from "../../chunks/utils2.js";
function IntrigueCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let intrigue = $$props["intrigue"];
    const isOutlaw = intrigue.suit === "diamonds";
    $$renderer2.push(`<div class="intrigue-card svelte-1miltlz" role="button" tabindex="0"><div class="overlay svelte-1miltlz"></div> <div class="card-content svelte-1miltlz"><div class="card-header svelte-1miltlz"><div class="header-text svelte-1miltlz">${escape_html(intrigue.name)}</div></div> <div class="card-body svelte-1miltlz"><div class="info-section svelte-1miltlz"><div class="info-row svelte-1miltlz"><span class="info-label svelte-1miltlz">CATEGORY</span> <span${attr_class(`info-value ${stringify(isOutlaw ? "outlaw-text" : "")}`, "svelte-1miltlz")}>${escape_html(intrigue.category)}</span></div> <div class="info-row svelte-1miltlz"><span class="info-label svelte-1miltlz">TEST</span> <span class="info-value svelte-1miltlz">${escape_html(intrigue.alignmentTest)}</span></div> <div class="info-row svelte-1miltlz"><span class="info-label svelte-1miltlz">REWARD</span></div> <div class="reward-text svelte-1miltlz">${escape_html(intrigue.reward)}</div></div> <div class="criteria-section svelte-1miltlz"><div class="criteria-label svelte-1miltlz">CRITERIA</div> <div class="criteria-text svelte-1miltlz">${escape_html(intrigue.criteria)}</div></div></div></div></div>`);
    bind_props($$props, { intrigue });
  });
}
function FilterBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentFilter = fallback($$props["currentFilter"], "all");
    let onFilterChange = $$props["onFilterChange"];
    $$renderer2.push(`<div class="flex gap-2 justify-center flex-wrap"><button${attr_class("filter-btn svelte-m9tjun", void 0, {
      "active": currentFilter === "all",
      "inactive": currentFilter !== "all"
    })}>All Cards</button> <button${attr_class("filter-btn flex items-center gap-2 svelte-m9tjun", void 0, {
      "active-outlaw": currentFilter === "outlaw",
      "inactive": currentFilter !== "outlaw"
    })}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> Outlaw</button> <button${attr_class("filter-btn flex items-center gap-2 svelte-m9tjun", void 0, {
      "active-law": currentFilter === "law",
      "inactive": currentFilter !== "law"
    })}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4v6.5c0 2.5 2 4.5 4.5 4.5S13 13 13 10.5V4"></path><path d="M13 4c0 5 3 7 6 7 2 0 3-.5 3-3V4"></path><path d="M12 15l-1 9"></path><path d="M6 15l1 9"></path></svg> Law Abiding</button></div>`);
    bind_props($$props, { currentFilter, onFilterChange });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredAvailable;
    let availableCards = [];
    let justDrawnCards = [];
    let filter = "all";
    let drawCount = 3;
    function handleFilterChange(newFilter) {
      filter = newFilter;
    }
    filteredAvailable = filter === "all" ? availableCards : availableCards.filter((c) => filter === "outlaw" ? c.category === "Outlaw" : c.category === "Law Abiding");
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Necromunda Intrigues Manager</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Manage your Necromunda intrigue deck during gameplay" class="svelte-1uha8ag"/>`);
    });
    $$renderer2.push(`<div class="min-h-screen p-4 md:p-6 lg:p-8 svelte-1uha8ag"><div class="max-w-7xl mx-auto svelte-1uha8ag"><header class="text-center mb-8 svelte-1uha8ag"><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-red-500 via-red-400 to-gray-400 bg-clip-text text-transparent svelte-1uha8ag">NECROMUNDA INTRIGUES</h1> <p class="text-gray-400 text-sm md:text-base svelte-1uha8ag">Manage your intrigue deck during gameplay</p></header> <div class="flex flex-wrap gap-3 md:gap-4 justify-center mb-6 svelte-1uha8ag"><div class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border-2 border-gray-700 svelte-1uha8ag"><label for="drawCount" class="text-sm font-semibold text-gray-300 svelte-1uha8ag">Cards to draw:</label> <input id="drawCount" type="number" min="1" max="10"${attr("value", drawCount)} class="w-16 bg-gray-700 text-white text-center rounded px-2 py-1 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 svelte-1uha8ag"/></div> <button${attr("disabled", availableCards.length === 0, true)} class="bg-gradient-to-r from-blue-600 to-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg text-sm md:text-base svelte-1uha8ag">Draw ${escape_html(drawCount)} Card${escape_html("s")} (${escape_html(availableCards.length)} available)</button> <button class="bg-gradient-to-r from-purple-600 to-purple-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base svelte-1uha8ag">Shuffle Deck</button> <button class="bg-gradient-to-r from-gray-600 to-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base svelte-1uha8ag">Reset All</button></div> <div class="mb-8 svelte-1uha8ag">`);
    FilterBar($$renderer2, { currentFilter: filter, onFilterChange: handleFilterChange });
    $$renderer2.push(`<!----></div> `);
    if (justDrawnCards.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-8 animate-fade-in svelte-1uha8ag"><div class="bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 rounded-xl p-6 border-4 border-yellow-500 shadow-2xl svelte-1uha8ag"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 svelte-1uha8ag"><h2 class="text-2xl md:text-3xl font-bold text-yellow-100 svelte-1uha8ag">Just Drawn</h2> <button class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap svelte-1uha8ag">Acknowledge and Continue</button></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 svelte-1uha8ag"><!--[-->`);
      const each_array = ensure_array_like(justDrawnCards);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let card = each_array[$$index];
        $$renderer2.push(`<div class="animate-bounce-in svelte-1uha8ag">`);
        IntrigueCard($$renderer2, { intrigue: card });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-gray-800 rounded-xl p-4 md:p-6 min-h-[400px] border-2 border-gray-700 svelte-1uha8ag"><h2 class="text-xl md:text-2xl font-bold mb-4 svelte-1uha8ag">Available Deck (${escape_html(filteredAvailable.length)})</h2> `);
    if (filteredAvailable.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 svelte-1uha8ag"><!--[-->`);
      const each_array_1 = ensure_array_like(filteredAvailable);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let card = each_array_1[$$index_1];
        IntrigueCard($$renderer2, { intrigue: card });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="text-center text-gray-500 py-20 svelte-1uha8ag">${escape_html(filter === "all" ? "All cards have been drawn" : "No cards match this filter")}</div>`);
    }
    $$renderer2.push(`<!--]--></div> <footer class="text-center text-gray-500 text-xs md:text-sm mt-8 space-y-2 svelte-1uha8ag"><p class="svelte-1uha8ag">Click cards for full details</p> <p class="text-gray-600 svelte-1uha8ag">Built for Necromunda tabletop gaming</p> <p class="svelte-1uha8ag"><a href="https://github.com/joeseos/Necromunda-Intrigues-Manager" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 svelte-1uha8ag"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="svelte-1uha8ag"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" class="svelte-1uha8ag"></path></svg> GitHub Repository</a></p></footer></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
