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
    <div class="overlay"></div>

    <div class="card-content">
      <!-- Header -->
      <div class="card-header">
        <div class="header-text">{intrigue.name}</div>
        <button
          on:click={onClose}
          class="close-button"
          aria-label="Close"
          type="button"
        >
          ×
        </button>
      </div>

      <!-- Body -->
      <div class="card-body">
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
    width: min(90vw, 912px);
    aspect-ratio: 912 / 1335;
    background-image: url('/necromunda-bg.png');
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Overlay (header + footer combined image) */
  .overlay {
    position: absolute;
    inset: 0;
    background-image: url('/necromunda-frame.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
  }

  /* Text & content layer */
  .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    position: relative;
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    flex-shrink: 0;
  }

  .header-text {
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    line-height: 1.2;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: clamp(24px, 3vw, 40px);
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    z-index: 10;
  }

  .close-button:hover {
    transform: scale(1.2);
  }

  .card-body {
    flex: 1;
    padding: clamp(16px, 3vw, 40px);
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vw, 30px);
    overflow-y: auto;
  }

  .info-section {
    padding: 16px 20px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
    font-size: clamp(12px, 1.5vw, 18px);
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
    font-size: clamp(13px, 1.8vw, 18px);
    margin-top: 4px;
  }

  .criteria-section,
  .notes-section {
    padding: 16px 20px;
  }

  .criteria-label,
  .notes-label {
    text-transform: uppercase;
    font-size: clamp(10px, 1.4vw, 14px);
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }

  .criteria-text,
  .notes-text {
    font-size: clamp(11px, 1.5vw, 15px);
    line-height: 1.6;
    color: #000000;
  }

  .notes-text {
    font-style: italic;
  }
</style>
