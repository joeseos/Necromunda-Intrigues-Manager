<script>
  import { onMount } from 'svelte';
  import { intrigues } from '$lib/data/intrigues';
  import IntrigueCard from '$lib/components/IntrigueCard.svelte';
  import CardModal from '$lib/components/CardModal.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  
  let availableCards = [];
  let drawnCards = [];
  let justDrawnCards = [];
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
  
  function handleFilterChange(newFilter) {
    filter = newFilter;
  }
  
  function handleDrawCountChange(e) {
    const value = parseInt(e.target.value) || 1;
    drawCount = Math.max(1, Math.min(10, value));
  }

  function handlePrint() {
    window.print();
  }
  
  $: filteredAvailable = filter === 'all' 
    ? availableCards 
    : availableCards.filter(c => 
        filter === 'outlaw' ? c.category === 'Outlaw' : c.category === 'Law Abiding'
      );

  $: filterName = filter === 'all' ? 'All Cards' : filter === 'outlaw' ? 'Outlaw Cards' : 'Law Abiding Cards';
</script>

<svelte:head>
  <title>Necromunda Intrigues Manager</title>
  <meta name="description" content="Manage your Necromunda intrigue deck during gameplay" />
</svelte:head>

<div class="min-h-screen p-4 md:p-6 lg:p-8 no-print">
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
        Draw {drawCount} Card{drawCount !== 1 ? 's' : ''} ({availableCards.length} available)
      </button>
      
      <button
        on:click={shuffleDeck}
        class="bg-gradient-to-r from-purple-600 to-purple-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base"
      >
        Shuffle Deck
      </button>
      
      <button
        on:click={resetDeck}
        class="bg-gradient-to-r from-gray-600 to-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all flex items-center gap-2 shadow-lg text-sm md:text-base"
      >
        Reset All
      </button>
    </div>

    <div class="mb-8">
      <FilterBar 
        currentFilter={filter} 
        onFilterChange={handleFilterChange}
        onPrint={handlePrint}
      />
    </div>

    {#if justDrawnCards.length > 0}
      <div class="mb-8 animate-fade-in">
        <div class="bg-gradient-to-r from-yellow-900 via-yellow-800 to-yellow-900 rounded-xl p-6 border-4 border-yellow-500 shadow-2xl">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 class="text-2xl md:text-3xl font-bold text-yellow-100">
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
                <IntrigueCard intrigue={card} />
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="bg-gray-800 rounded-xl p-4 md:p-6 min-h-[400px] border-2 border-gray-700">
      <h2 class="text-xl md:text-2xl font-bold mb-4">
        Available Deck ({filteredAvailable.length})
      </h2>
      
      {#if filteredAvailable.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {#each filteredAvailable as card (card.id)}
            <IntrigueCard intrigue={card} />
          {/each}
        </div>
      {:else}
        <div class="text-center text-gray-500 py-20">
          {filter === 'all' ? 'All cards have been drawn' : 'No cards match this filter'}
        </div>
      {/if}
    </div>

    <footer class="text-center text-gray-500 text-xs md:text-sm mt-8 space-y-2">
      <p>Click cards for full details</p>
      <p class="text-gray-600">Built for Necromunda tabletop gaming</p>
      
      <!-- Buy Me a Coffee -->
      <div class="mt-6 pt-4 border-t border-gray-700">
        <p class="text-xs text-gray-500 mb-3">Enjoying this tool? Consider supporting its development:</p>
        <a 
          href="https://buymeacoffee.com/joesoes" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" 
            alt="Buy Me A Coffee" 
            class="h-12 w-auto mx-auto"
          />
        </a>
      </div>
      
      <p class="pt-4">
        <a 
          href="https://github.com/joeseos/Necromunda-Intrigues-Manager" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub Repository
        </a>
      </p>
    </footer>
  </div>
</div>

<!-- Print-only view -->
<div class="print-only">
  <h1 class="print-header">Necromunda Intrigues - {filterName}</h1>
  <div class="print-grid">
    {#each filteredAvailable as card (card.id)}
      <div class="print-card-wrapper">
        <IntrigueCard intrigue={card} />
      </div>
    {/each}
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

  /* Print styles */
  .print-only {
    display: none;
  }

  @media print {
    /* Force background printing */
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    /* Hide screen content */
    .no-print {
      display: none !important;
    }

    /* Show print content */
    .print-only {
      display: block !important;
      padding: 10mm;
      background: white;
    }

    .print-header {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10mm;
      color: #000;
    }

    .print-grid {
      display: grid;
      grid-template-columns: repeat(2, 75mm);
      gap: 10mm;
      justify-content: center;
    }

    .print-card-wrapper {
      page-break-inside: avoid;
      break-inside: avoid;
      width: 75mm;
      height: 110mm;
    }

    /* Set exact card dimensions: 75mm width × 110mm height */
    :global(.intrigue-card) {
      width: 75mm !important;
      height: 110mm !important;
      max-width: none !important;
      min-width: 75mm !important;
      min-height: 110mm !important;
      margin: 0 !important;
      box-shadow: none !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Force overlay to print */
    :global(.overlay) {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    @page {
      size: A4 portrait;
      margin: 10mm;
    }
  }
</style>
