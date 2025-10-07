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
  <div class="overlay"></div>

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

  .header-text {
    position: relative;
    padding-top: clamp(40px, 8%, 60px);
    font-size: clamp(12px, 1.2vw, 14px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    line-height: 1.2;
  }

  .info-section {
    padding: 16px 20px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
    font-size: clamp(8px, 1vw, 11px);
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
    font-size: clamp(9px, 1.1vw, 11px);
    margin-top: 4px;
  }

  .criteria-section {
    padding: 16px 20px;
  }

  .criteria-label {
    text-transform: uppercase;
    font-size: clamp(7px, 0.9vw, 10px);
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }

  .criteria-text {
    font-size: clamp(8px, 1vw, 11px);
    line-height: 1.6;
    color: #000000;
  }
</style>
