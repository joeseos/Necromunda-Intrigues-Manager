<script>
  export let intrigue;
  export let draggable = true;
  export let isDragging = false;
  
  const isOutlaw = intrigue.suit === 'diamonds';
  
  function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', intrigue.id);
  }
  
  function handleClick() {
    const event = new CustomEvent('cardclick', {
      detail: intrigue
    });
    document.dispatchEvent(event);
  }
</script>

<div
  class="intrigue-card {isOutlaw ? 'outlaw' : 'law'} {isDragging ? 'card-dragging' : ''}"
  draggable={draggable}
  on:dragstart={handleDragStart}
  on:click={handleClick}
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  <!-- Header with card name -->
  <div class="card-header">
    <h3 class="card-name">{intrigue.name}</h3>
  </div>

  <!-- Card content -->
  <div class="card-body">
    <!-- Value badge -->
    <div class="value-section">
      <div class="value-badge {isOutlaw ? 'outlaw-badge' : 'law-badge'}">
        {intrigue.value}
        <div class="suit-icon">
          {#if isOutlaw}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
            </svg>
          {:else}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4v6.5c0 2.5 2 4.5 4.5 4.5S13 13 13 10.5V4M13 4c0 5 3 7 6 7 2 0 3-.5 3-3V4M12 15l-1 9M6 15l1 9"/>
            </svg>
          {/if}
        </div>
      </div>
    </div>

    <!-- Info grid -->
    <div class="info-section">
      <div class="info-row">
        <span class="label">CATEGORY</span>
        <span class="value {isOutlaw ? 'outlaw-text' : 'law-text'}">{intrigue.category}</span>
      </div>
      <div class="info-row">
        <span class="label">TEST</span>
        <span class="value">{intrigue.alignmentTest}</span>
      </div>
      <div class="info-row reward-row">
        <span class="label">REWARD</span>
      </div>
      <div class="reward-value">{intrigue.reward}</div>
    </div>

    <!-- Criteria -->
    <div class="criteria-section">
      <div class="label">CRITERIA</div>
      <div class="criteria-text">{intrigue.criteria}</div>
    </div>
  </div>

  <!-- Footer - same image rotated 180 degrees -->
  <div class="card-footer"></div>
</div>

<style>
  .intrigue-card {
    position: relative;
    width: 100%;
    height: 500px;
    cursor: move;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    background: url('/necromunda-bg.png');
    background-size: cover;
    background-position: center;
    border-radius: 0;
    overflow: hidden;
  }

  .intrigue-card:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.9);
  }

  .card-dragging {
    opacity: 0.5;
    transform: scale(0.95);
  }

  .card-header {
    height: 60px;
    background: url('/necromunda-frame.png') top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    flex-shrink: 0;
  }

  .card-name {
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    margin: 0;
    line-height: 1.2;
  }

  .card-body {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 100%);
  }

  .value-section {
    display: flex;
    justify-content: center;
  }

  .value-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 32px;
    font-weight: 900;
    font-family: serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
    border: 2px solid;
  }

  .outlaw-badge {
    background: rgba(127, 29, 29, 0.9);
    border-color: #dc2626;
    color: #fecaca;
  }

  .law-badge {
    background: rgba(31, 41, 55, 0.9);
    border-color: #6b7280;
    color: #e5e7eb;
  }

  .suit-icon {
    display: flex;
    align-items: center;
  }

  .info-section {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 12px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 11px;
  }

  .reward-row {
    margin-bottom: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .label {
    text-transform: uppercase;
    font-weight: 700;
    color: #9ca3af;
    letter-spacing: 0.05em;
  }

  .value {
    color: #e5e7eb;
    font-weight: 600;
  }

  .outlaw-text {
    color: #fca5a5;
  }

  .law-text {
    color: #d1d5db;
  }

  .reward-value {
    color: #fde047;
    font-weight: 700;
    font-size: 13px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    padding: 0 12px;
  }

  .criteria-section {
    flex: 1;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 12px;
    display: flex;
    flex-direction: column;
  }

  .criteria-text {
    font-size: 11px;
    line-height: 1.5;
    color: #d1d5db;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    margin-top: 4px;
  }

  .card-footer {
    height: 40px;
    background: url('/necromunda-frame.png') bottom center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    flex-shrink: 0;
    transform: rotate(180deg);
  }
</style>
