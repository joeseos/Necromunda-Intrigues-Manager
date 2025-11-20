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
