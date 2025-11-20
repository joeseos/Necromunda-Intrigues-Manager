<script>
  import { onMount } from 'svelte';
  
  export let intrigue;
  export let onClose;

  const isOutlaw = intrigue.suit === 'diamonds';
  let headerTextElement;

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
  
  onMount(() => {
    fitText();
  });
  
  function fitText() {
    if (!headerTextElement) return;
    
    const container = headerTextElement.parentElement;
    const maxWidth = container.offsetWidth * 0.78;
    
    let fontSize = 30;  // Larger starting size for modal
    headerTextElement.style.fontSize = fontSize + 'px';
    
    while (headerTextElement.scrollWidth > maxWidth && fontSize > 10) {
      fontSize -= 0.5;
      headerTextElement.style.fontSize = fontSize + 'px';
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div
  class="modal-backdrop"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  tabindex="-1"
>
  <button
    class="backdrop-button"
    on:click={handleBackdropClick}
    aria-label="Close modal"
    type="button"
  ></button>
  <div class="modal-card" on:click|stopPropagation role="none">
    <div class="overlay"></div>

    <div class="card-content">
      <!-- Header -->
      <div class="card-header">
        <div class="header-text" id="modal-title" bind:this={headerTextElement}>{intrigue.name}</div>
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
        <!-- Description (if available) -->
        {#if intrigue.description}
          <div class="description-text">{intrigue.description}</div>
        {/if}

        <div class="info-section">
          <div class="info-row">
            <span class="info-label">Category: </span>
            <span class="info-value">{intrigue.category}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Test: </span>
            <span class="info-value">{intrigue.alignmentTest}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Reward: </span>
            <span class="info-value">{intrigue.reward}</span>
          </div>
        </div>

        <div class="criteria-section">
          <span class="criteria-label">Criteria: </span>
          <span class="criteria-text">{intrigue.criteria}</span>
        </div>

        {#if intrigue.notes}
          <div class="notes-section">
            <span class="notes-text">{intrigue.notes}</span>
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

  .backdrop-button {
    position: absolute;
    inset: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: default;
    z-index: 1;
  }

.modal-card {
  position: relative;
  /* Calculate width that respects both viewport width and height constraints */
  width: min(
    500px,
    85vw,
    calc(85vh * 912 / 1335)  /* Width when height-constrained */
  );
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
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    flex-shrink: 0;
  }

  .header-text {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    font-family: 'Redeye Sans', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ffffff;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    text-align: center;
    line-height: 1.2;
    white-space: nowrap;
    max-width: 78%;
  }

  .close-button {
    position: absolute;
    top: -10px;
    right: -10px;
    background: none;
    border: none;
    color: #ffffff;
    font-family: 'Redeye Sans', sans-serif;
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
  /* Match IntrigueCard proportions but scaled for modal size */
  padding: clamp(20px, 3vh, 30px) clamp(20px, 3.5vw, 35px) clamp(70px, 9vh, 110px);
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.5vh, 16px);
  overflow: hidden;
  font-family: 'Rodchenko', sans-serif;
}

  .description-text {
    text-align: center;
    font-size: clamp(11px, 1.3vw, 14px);
    line-height: 1.4;
    color: #000000;
    font-weight: 400;
    font-style: italic;
    margin-top: clamp(6px, 1.2vh, 12px);
    margin-bottom: clamp(4px, 0.8vh, 8px);
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .info-row {
    font-size: clamp(11px, 1.3vw, 14px);
  }

  .info-label {
    font-weight: 700;
    color: #000000;
  }

  .info-value {
    font-weight: normal;
    color: #000000;
  }

  .criteria-section {
    margin-top: clamp(6px, 1vh, 10px);
    font-size: clamp(10px, 1.2vw, 13px);
  }

  .criteria-label {
    font-weight: 700;
    color: #000000;
  }

  .criteria-text {
    line-height: 1.5;
    color: #000000;
    font-weight: 400;
  }

  .notes-section {
    margin-top: clamp(6px, 1vh, 10px);
    font-size: clamp(10px, 1.2vw, 13px);
  }

  .notes-text {
    line-height: 1.5;
    color: #000000;
    font-weight: 400;
    font-style: italic;
  }
</style>
