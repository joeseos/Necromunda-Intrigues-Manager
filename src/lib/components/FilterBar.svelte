<script>
  export let currentFilter = 'all';
  export let onFilterChange;
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
    class="filter-btn flex items-center gap-2"
    class:active-outlaw={currentFilter === 'outlaw'}
    class:inactive={currentFilter !== 'outlaw'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
    </svg>
    Outlaw
  </button>
  
  <button
    on:click={() => onFilterChange('law')}
    class="filter-btn flex items-center gap-2"
    class:active-law={currentFilter === 'law'}
    class:inactive={currentFilter !== 'law'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4v6.5c0 2.5 2 4.5 4.5 4.5S13 13 13 10.5V4"/>
      <path d="M13 4c0 5 3 7 6 7 2 0 3-.5 3-3V4"/>
      <path d="M12 15l-1 9"/>
      <path d="M6 15l1 9"/>
    </svg>
    Law Abiding
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
</style>
