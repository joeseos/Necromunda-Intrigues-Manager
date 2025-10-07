<script>
  export let intrigue;
  export let onClose;
  
  const isOutlaw = intrigue.suit === 'diamonds';
  
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  
  function handleKeydown(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div 
  class="modal-backdrop"
  on:click={handleBackdropClick}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <div class="modal-card" on:click|stopPropagation>
    <button
      on:click={onClose}
      class="close-button"
      aria-label="Close"
      type="button"
    >
      ×
    </button>

    <div class="card-content">
      <div class="header-text">{intrigue.name}</div>

      <div class="info-section">
        <div class="info-row">
          <span class="info-label">CATEGORY</span>
          <span class="info-value {isOutlaw ? 'outlaw-text' : ''}">
            {intrigue.category}
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">TEST</span>
          <span class="info-value">{intrigue.alignmentTest}</span>
        </div>
        <div class="info-row">
          <span class="info-label">REWARD</span>
        </div>
        <div class="reward-text">{intrigue.reward}</div>
      </div>

      <div class="criteria-section">
        <div class="criteria-label">CRITERIA</div>
        <div class="criteria-text">{intrigue.criteria}</div>
      </div>

      {#if intrigue.notes}
        <div class="notes-section">
          <div class="notes-label">NOTES</div>
          <div class="notes-text">{intrigue.notes}</div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
    backdrop-filter: blur(4px);
  }

  .modal-card {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 298 / 583;
    background-image: url('/necromunda-bg.png');
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Frame overlay identical to the small card */
  .modal-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/necromunda-frame.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 1; /* sits below the text */
  }

  .card-content {
    position: relative;
    z-index: 2; /* above the overlay */
    flex: 1;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .header-text {
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    margin-bottom: 12px;
  }

  .close-button {
    position: absolute;
    top: 12px;
    right: 18px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    z-index: 3; /* stays above everything */
  }

  .close-button:hover {
    transform: scale(1.2);
  }

  .info-section {
    padding: 12px 16px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
    font-size: 14px;
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
    font-size: 15px;
    margin-top: 4px;
  }

  .criteria-section,
  .notes-section {
    padding: 16px 20px;
  }

  .criteria-label,
  .notes-label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }

  .criteria-text,
  .notes-text {
    font-size: 13px;
    line-height: 1.6;
    color: #000000;
  }

  .notes-text {
    font-style: italic;
  }
</style>
