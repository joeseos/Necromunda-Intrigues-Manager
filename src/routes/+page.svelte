<script>
  import { onMount } from 'svelte';
  import { intrigues } from '$lib/data/intrigues';
  import IntrigueCard from '$lib/components/IntrigueCard.svelte';
  import CardModal from '$lib/components/CardModal.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  
  let availableCards = [];
  let drawnCards = [];
  let justDrawnCards = [];
  let draggedCardId = null;
  let selectedCard = null;
  let filter = 'all';
  let drawCount = 3;
  
  onMount(() => {
    shuffleDeck();
    
    document.addEventListener('cardclick', handleCardClick);
    
    return () => {
      document.removeEventListener('cardclick', handleCardClick);
    };
  });
  
  function handleCardClick(e) {
    selectedCard = e.detail;
  }
  
  function shuffleDeck() {
    const shuffled = [...intrigues].sort(() => Math.random() - 0.5);
    availableCards = shuffled;
    drawnCards = [];
    justDrawnCards = [];
    selectedCard = null;
  }
  
  function resetDeck() {
    availableCards = [...intrigues];
    drawnCards = [];
    justDrawnCards = [];
    selectedCard = null;
  }
  
  function drawRandomCard() {
    if (availableCards.length > 0) {
      const cardsToDraw = Math.min(drawCount, availableCards.length);
      const shuffled = [...availableCards].sort(() => Math.random() - 0.5);
      const drawn = shuffled.slice(0, cardsToDraw);
      
      drawnCards = [...drawnCards, ...justDrawnCards];
      justDrawnCards = drawn;
      availableCards = availableCards.filter(c => !drawn.includes(c));
    }
  }
  
  function acknowledgeDrawnCards() {
    drawnCards = [...drawnCards, ...justDrawnCards];
    justDrawnCards = [];
  }
  
  function handleDragStart(e) {
    draggedCardId = e.dataTransfer.getData('text/plain');
  }
  
  function handleFilterChange(newFilter) {
    filter = newFilter;
  }
  
  function handleDrawCountChange(e) {
    const value = parseInt(e.target.value) || 1;
    drawCount = Math.max(1, Math.min(10, value));
  }
  
  $: filteredAvailable = filter === 'all' 
    ? availableCards 
    : availableCards.filter(c => 
        filter === 'outlaw' ? c.category === 'Outlaw' : c.category === 'Law Abiding'
      );
</script>

<svelte:head>
  <title>Necromunda Intrigues Manager</title>
  <meta name="description" content="Manage your Necromunda intrigue deck during gameplay" />
</svelte:head>

<div class="min-h-screen p-4 md:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <header class="text-center mb-8">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-red-500 via-red-400 to-gray-400 bg-clip-text text-transparent">
        NECROMUNDA INTRIGUES
      </h1>
      <p class="text-gray-400 text-sm md:text-base">Manage your intrigue deck during gameplay</p>
    </header>

    <div class="flex flex-wrap gap-3 md:gap-4 justify-center mb-6">
      <div class="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border-2 border-gray-700">
        <label for="drawCount" class="text-sm font-semibold text-gray-300">
          Cards to draw:
        </label>
        <input
          id="drawCount"
          type="number"
          min="1"
          max="10"
          bind:value={drawCount}
          on:input={handleDrawCountChange}
          class="w-16 bg-gray-700 text-white text-center rounded px-2 py-1 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <button
        on:click={drawRandomCard}
        disabled={availableCards.length === 0}
        class="bg-gradient-to-r from-blue-600 to-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg text-sm md:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m21 16-4 4-4-4"/>
          <path d="M17 20V4"/>
          <path d="m3 8 4-4 4 4"/>
          <path d="M7 4v16"/>
        </svg>
        Draw {drawCount} Card{drawCount !== 1 ? 's' : ''} ({availableCards.length} available)
      </button>
      
      <button
        on:click={shuffleDeck}
        class="bg-gradient-to-r from-purple-600 to-purple-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m21 16-4 4-4-4"/>
          <path d="M17 20V4"/>
          <path d="m3 8 4-4 4 4"/>
          <path d="M7 4v16"/>
        </svg>
        Shuffle Deck
      </button>
      
      <button
        on:click={resetDeck}
        class="bg-gradient-to-r from-gray-600 to-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M3 21v-5h5"/>
        </svg>
        Reset All
      </button>
    </div>

    <div class="mb-8">
      <FilterBar currentFilter={filter} onFilterChange={handleFilterChange} />
    </div>

    {#if justDrawnCards.length > 0}
      <div class="mb-8 animate-fade-in">
        <div class="bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 rounded-xl p-6 border-4 border-yellow-500 shadow-2xl">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 class="text-2xl md:text-3xl font-bold text-yellow-100 flex items-center gap-2">
              Just Drawn
            </h2>
            <button
              on:click={acknowledgeDrawnCards}
              class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap"
            >
              Acknowledge and Continue
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {#each justDrawnCards as card (card.id)}
              <div class="animate-bounce-in">
                <IntrigueCard
                  intrigue={card}
                  isDragging={draggedCardId === card.id}
                  on:dragstart={handleDragStart}
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="bg-gray-800 rounded-xl p-4 md:p-6 min-h-[400px] border-2 border-gray-700">
      <h2 class="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 7h-9"/>
          <path d="M14 17H5"/>
          <circle cx="17" cy="17" r="3"/>
          <circle cx="7" cy="7" r="3"/>
        </svg>
        Available Deck ({filteredAvailable.length})
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {#each filteredAvailable as card (card.id)}
          <IntrigueCard
            intrigue={card}
            isDragging={draggedCardId === card.id}
            on:dragstart={handleDragStart}
          />
        {/each}
      </div>
      
      {#if filteredAvailable.length === 0}
        <div class="text-center text-gray-500 py-20">
          {filter === 'all' ? 'All cards have been drawn' : 'No cards match this filter'}
        </div>
      {/if}
    </div>

    <footer class="text-center text-gray-500 text-xs md:text-sm mt-8 space-y-1">
      <p>Click cards for full details</p>
      <p class="text-gray-600">Built for Necromunda tabletop gaming</p>
    </footer>
  </div>
</div>

{#if selectedCard}
  <CardModal intrigue={selectedCard} onClose={() => selectedCard = null} />
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
  
  .animate-bounce-in {
    animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
</style>
