<script>
  export let currentFilter = 'all';
  export let onFilterChange;
  export let onPrint;
</script>

<div class="flex gap-2 justify-center flex-wrap">
  <button
    on:click={() => onFilterChange('all')}
    class="filter-btn"
    class:active={currentFilter === 'all'}
    class:inactive={currentFilter !== 'all'}
  >
    All Cards
  </button>
  
  <button
    on:click={() => onFilterChange('outlaw')}
    class="filter-btn"
    class:active-outlaw={currentFilter === 'outlaw'}
    class:inactive={currentFilter !== 'outlaw'}
  >
    Outlaw
  </button>
  
  <button
    on:click={() => onFilterChange('law')}
    class="filter-btn"
    class:active-law={currentFilter === 'law'}
    class:inactive={currentFilter !== 'law'}
  >
    Law Abiding
  </button>

  <button
    on:click={onPrint}
    class="filter-btn print-btn"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="14" width="12" height="8"/>
    </svg>
    Print Cards
  </button>
</div>

<style>
  .filter-btn {
    @apply px-6 py-3 rounded-lg font-semibold transition-all shadow-lg;
  }

  .active {
    @apply bg-white text-gray-900;
  }

  .active-outlaw {
    @apply bg-red-600 text-white;
  }

  .active-law {
    @apply bg-gray-900 text-white border-2 border-white;
  }

  .inactive {
    @apply bg-gray-700 hover:bg-gray-600 text-white;
  }

  .print-btn {
    @apply bg-green-600 hover:bg-green-700 text-white flex items-center gap-2;
  }

  @media print {
    .filter-btn {
      display: none;
    }
  }
</style>
