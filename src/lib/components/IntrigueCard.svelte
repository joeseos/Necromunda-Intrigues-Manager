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
  class="intrigue-card {isDragging ? 'card-dragging' : ''}"
  draggable={draggable}
  on:dragstart={handleDragStart}
  on:click={handleClick}
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  <!-- Background -->
  <div class="card-background"></div>
  
  <!-- Header with card name -->
  <div class="card-header">
    <h3 class="card-name">{intrigue.name}</h3>
  </div>

  <!-- Card content -->
  <div class="card-body">
    <!-- Info section -->
    <div class="info-section">
      <div class="info-row">
        <span class="info-label">CATEGORY</span>
        <span class="info-value {isOutlaw ? 'outlaw-text' : ''}">{intrigue.category}</span>
      </div>
      <div class="info-row">
        <span class="info-label">TEST</span>
        <span class="info-value">{intrigue.alignmentTest}</span>
      </div>
      <div class="info-row reward-row">
        <span class="info-label">REWARD</span>
      </div>
      <div class="reward-text">{intrigue.reward}</div>
    </div>

    <!-- Criteria -->
    <div class="criteria-section">
      <div class="criteria-label">CRITERIA</div>
      <div class="criteria-text">{intrigue.criteria}</div>
    </div>
  </div>

  <!-- Footer -->
  <div class="card-footer"></div>
</div>

<style>
  .intrigue-card {
    position: relative;
    width: 100%;
    height: 580px;
    cursor: move;
    transition: transform 0.2s ease;
    overflow: hidden;
  }

  .intrigue-card:hover {
    transform: scale(1.02);
  }

  .card-dragging {
    opacity: 0.5;
  }

  .card-background {
    position: absolute;
    inset: 0;
    background: url('/necromunda-bg.png');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  .card-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: url('/necromunda-frame.png') top center no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    z-index: 2;
  }

  .card-name {
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    margin: 0;
    line-height: 1.2;
  }

  .card-body {
    position: absolute;
    top: 80px;
    bottom: 60px;
    left: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 1;
  }

  .info-section {
    padding: 12px 16px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
    font-size: 12px;
  }

  .reward-row {
    margin-bottom: 4px;
  }

  .info-label {
    text-transform: uppercase;
    font-weight: 700;
    color: #000000;
    letter-spacing: 0.05em;
  }

  .info-value {
    font-weight: 600;
    color: #000000;
  }

  .outlaw-text {
    color: #8B0000;
  }

  .reward-text {
    color: #000000;
    font-weight: 700;
    font-size: 13px;
  }

  .criteria-section {
    flex: 1;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .criteria-label {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 8px;
    letter-spacing: 0.05em;
  }

  .criteria-text {
    font-size: 11px;
    line-height: 1.5;
    color: #000000;
    overflow-y: auto;
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: url('/necromunda-frame.png') bottom center no-repeat;
    background-size: 100% 100%;
    transform: rotate(180deg);
    z-index: 2;
  }
</style>
