<script>
  import { onMount } from 'svelte';
  
  export let intrigue;
  
  const isOutlaw = intrigue.suit === 'diamonds';
  let headerTextElement;
  
  function handleClick() {
    const event = new CustomEvent('cardclick', {
      detail: intrigue
    });
    document.dispatchEvent(event);
  }
  
  onMount(() => {
    // Wait for fonts to load before fitting text
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fitText();
      });
    } else {
      // Fallback for older browsers - small delay
      setTimeout(() => {
        fitText();
      }, 100);
    }

    // Fit text for print, then restore after
    const handleBeforePrint = () => {
      fitTextForPrint();
    };
    
    const handleAfterPrint = () => {
      fitText(); // Restore screen sizing
    };
    
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  });
  
  function fitText() {
    if (!headerTextElement) return;
    
    const container = headerTextElement.parentElement;
    const maxWidth = container.offsetWidth * 0.78;
    
    let fontSize = 25;
    headerTextElement.style.fontSize = fontSize + 'px';
    
    while (headerTextElement.scrollWidth > maxWidth && fontSize > 7) {
      fontSize -= 0.5;
      headerTextElement.style.fontSize = fontSize + 'px';
    }
  }

  function fitTextForPrint() {
    if (!headerTextElement) return;
    
    // For print, use 75mm card width
    // 75mm = ~283px at 96dpi
    const printCardWidth = 283;
    const maxWidth = printCardWidth * 0.78;
    
    let fontSize = 17; // Start smaller for print
    headerTextElement.style.fontSize = fontSize + 'px';
    
    // Temporarily measure with print context
    const originalDisplay = headerTextElement.style.display;
    headerTextElement.style.display = 'inline-block';
    
    while (headerTextElement.scrollWidth > maxWidth && fontSize > 7) {
      fontSize -= 0.5;
      headerTextElement.style.fontSize = fontSize + 'px';
    }
    
    headerTextElement.style.display = originalDisplay;
  }
</script>

<div
  class="intrigue-card"
  on:click={handleClick}
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  <div class="overlay"></div>

  <div class="card-content">
    <div class="header-section">
      <div class="header-text" bind:this={headerTextElement}>{intrigue.name}</div>
    </div>

    <div class="body-section">
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
    </div>
  </div>
</div>

<style>
  .intrigue-card {
    position: relative;
    width: 100%;
    aspect-ratio: 912 / 1335;
    background-image: url('/necromunda-bg.png');
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
  }

  .intrigue-card:hover {
    transform: scale(1.02);
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
    font-family: 'Rodchenko', sans-serif;
  }

  .header-section {
    position: relative;
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .header-text {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    font-family: 'Redeye Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    line-height: 1.2;
    white-space: nowrap;
    max-width: 78%;
  }

  .body-section {
    flex: 1;
    padding: clamp(10px, 2vh, 16px) clamp(16px, 3vw, 24px) clamp(35px, 6vh, 60px);
    display: flex;
    flex-direction: column;
    gap: clamp(8px, 1.5vh, 12px);
    overflow: hidden;
  }

  .description-text {
    text-align: center;
    font-size: clamp(6px, 0.8vw, 9px);
    line-height: 1.3;
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
    font-size: clamp(7px, 0.9vw, 10px);
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
    margin-top: clamp(4px, 0.8vh, 8px);
    font-size: clamp(6px, 0.8vw, 9px);
  }

  .criteria-label {
    font-weight: 700;
    color: #000000;
  }

  .criteria-text {
    line-height: 1.4;
    color: #000000;
    font-weight: 400;
  }

  /* Mobile-specific larger text and consistent padding */
  @media (max-width: 640px) {
    .body-section {
      padding: 12px 20px 40px;
    }

    .description-text {
      font-size: 13px;
    }

    .info-row {
      font-size: 13px;
    }

    .criteria-section {
      font-size: 12px;
    }
  }

  @media print {
    .intrigue-card {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      box-shadow: none !important;
      cursor: default !important;
    }

    .intrigue-card:hover {
      transform: none !important;
    }

    .overlay {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .description-text {
      font-size: 11px !important;
    }

    .info-row {
      font-size: 12px !important;
    }

    .criteria-section {
      font-size: 11px !important;
    }
  }
</style>
