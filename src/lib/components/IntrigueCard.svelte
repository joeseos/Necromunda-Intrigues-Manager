<script>
  export let intrigue;
  
  const isOutlaw = intrigue.suit === 'diamonds';
  
  function handleClick() {
    const event = new CustomEvent('cardclick', {
      detail: intrigue
    });
    document.dispatchEvent(event);
  }
</script>

<div
  class="intrigue-card"
  on:click={handleClick}
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
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
  </div>
</div>

<style>
  .intrigue-card {
    position: relative;
    width: 100%;
    aspect-ratio: 298 / 583; /* keep proportions consistent */
    background-image: url('/necromunda-bg.png');
    background-size: cover; /* ensures same scaling */
    background-position: center;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
  }

  .intrigue-card:hover {
    transform: scale(1.02);
  }

  /* FRAME OVERLAY:
     Keep the frame visually over the background but put it beneath the text */
  .intrigue-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/necromunda-frame.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none; /* allow clicks through */
    z-index: 1; /* lower than .card-content so text sits above the frame */
    opacity: 1;
  }

  /* Card content must be positioned and have a higher z-index */
  .card-content {
    position: relative;
    z-index: 2; /* TEXT ABOVE THE OVERLAY */
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
  }

  .header-text {
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    margin-top: 8px;
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
    margin-top: 4px;
  }

  .criteria-section {
    flex: 1;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    min-height: 0;
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
    flex: 1;
  }
</style>
