<script>
  export let intrigue;
  export let draggable = true;
  export let isDragging = false;
  
  let isHovered = false;
  
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
  class:hovered={isHovered}
  draggable={draggable}
  on:dragstart={handleDragStart}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  on:click={handleClick}
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  <div class="card-frame-top"></div>

  <div class="card-content">
    <div class="content-overlay"></div>
    
    <div class="content-inner">
      <div class="value-badge {isOutlaw ? 'outlaw-badge' : 'law-badge'}">
        <span class="value-text">{intrigue.value}</span>
        <div class="suit-icon">
          {#if isOutlaw}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4v6.5c0 2.5 2 4.5 4.5 4.5S13 13 13 10.5V4"/>
              <path d="M13 4c0 5 3 7 6 7 2 0 3-.5 3-3V4"/>
              <path d="M12 15l-1 9"/>
              <path d="M6 15l1 9"/>
            </svg>
          {/if}
        </div>
      </div>

      <div class="card-title">
        <h3>{intrigue.name}</h3>
      </div>

      <div class="info-box {isOutlaw ? 'outlaw-info' : 'law-info'}">
        <div class="info-row">
          <span class="info-label">Category</span>
          <span class="info-value">{intrigue.category}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Test</span>
          <span class="info-value">{intrigue.alignmentTest}</span>
        </div>
        <div class="reward-section">
          <span class="reward-label">Reward</span>
          <span class="reward-value">{intrigue.reward}</span>
        </div>
      </div>

      <div class="criteria-section">
        <div class="criteria-label">Criteria</div>
        <div class="criteria-text">{intrigue.criteria}</div>
      </div>

      <div class="click-hint">Click for details</div>
    </div>
  </div>

  <div class="card-frame-bottom"></div>

  <div class="scratches-overlay"></div>
</div>

<style>
  .intrigue-card {
    position: relative;
    width: 100%;
    min-height: 420px;
    border-radius: 8px;
    overflow: hidden;
    cursor: move;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, 
      rgba(160, 160, 160, 0.1) 0%, 
      rgba(180, 180, 180, 0.05) 25%, 
      rgba(160, 160, 160, 0.1) 50%, 
      rgba(140, 140, 140, 0.05) 75%, 
      rgba(160, 160, 160, 0.1) 100%
    ),
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 0%, transparent 50%),
    linear-gradient(180deg, #b8b8b8 0%, #8a8a8a 50%, #6e6e6e 100%);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .intrigue-card.outlaw {
    border: 4px solid #7f1d1d;
  }

  .intrigue-card.law {
    border: 4px solid #1f2937;
  }

  .intrigue-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.95);
  }

  .card-dragging {
    opacity: 0.5;
    transform: scale(0.95);
  }

  .card-frame-top,
  .card-frame-bottom {
    height: 40px;
    width: 100%;
    flex-shrink: 0;
    position: relative;
    background: linear-gradient(180deg, #4a4a4a 0%, #2d2d2d 50%, #1a1a1a 100%);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(255,255,255,0.1);
  }

  .card-frame-bottom {
    background: linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 50%, #4a4a4a 100%);
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5);
  }

  .card-frame-top::before,
  .card-frame-top::after,
  .card-frame-bottom::before,
  .card-frame-bottom::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #888 0%, #444 60%, #222 100%);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
    border: 1px solid #1a1a1a;
  }

  .card-frame-top::before,
  .card-frame-bottom::before {
    left: 8px;
  }

  .card-frame-top::after,
  .card-frame-bottom::after {
    right: 8px;
  }

  .card-content {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .content-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
    pointer-events: none;
  }

  .content-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
  }

  .value-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    width: fit-content;
    border: 2px solid;
    box-shadow: 0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .outlaw-badge {
    background: linear-gradient(to bottom right, #7f1d1d, #450a0a);
    border-color: #991b1b;
    color: #fecaca;
  }

  .law-badge {
    background: linear-gradient(to bottom right, #1f2937, #111827);
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .value-text {
    font-size: 28px;
    font-weight: 900;
    font-family: serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
  }

  .suit-icon {
    display: flex;
    align-items: center;
  }

  .card-title {
    text-align: center;
    padding: 8px;
    background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
    backdrop-filter: blur(4px);
    border-radius: 4px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }

  .card-title h3 {
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #f3f4f6;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
    margin: 0;
  }

  .info-box {
    padding: 12px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%);
    backdrop-filter: blur(2px);
    border: 2px solid;
  }

  .outlaw-info {
    border-color: rgba(220, 38, 38, 0.5);
  }

  .law-info {
    border-color: rgba(107, 114, 128, 0.5);
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 11px;
  }

  .info-label {
    text-transform: uppercase;
    font-weight: 700;
    color: #9ca3af;
    letter-spacing: 0.05em;
  }

  .info-value {
    color: #e5e7eb;
    font-weight: 600;
  }

  .reward-section {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .reward-label {
    display: block;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    color: #fbbf24;
    margin-bottom: 4px;
  }

  .reward-value {
    display: block;
    color: #fde047;
    font-weight: 700;
    font-size: 13px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  }

  .criteria-section {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .criteria-label {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    color: #9ca3af;
    margin-bottom: 4px;
    letter-spacing: 0.05em;
  }

  .criteria-text {
    font-size: 11px;
    line-height: 1.5;
    color: #d1d5db;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .click-hint {
    text-align: center;
    font-size: 10px;
    font-style: italic;
    color: #fbbf24;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .intrigue-card:hover .click-hint {
    opacity: 0.7;
  }

  .scratches-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.2;
    mix-blend-mode: overlay;
    background-image: linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.05) 49%, rgba(0,0,0,0.05) 51%, transparent 52%);
    background-size: 3px 3px;
  }
</style>
