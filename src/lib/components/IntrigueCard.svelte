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
    <!-- Header -->
    <div class="card-header">
      <div class="header-text">{intrigue.name}</div>
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

  .card-body {
    flex: 1;
    padding: clamp(16px, 3vw, 40px);
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 2vw, 30px);
    overflow-y: auto;
  }

  .header-text {
    position: absolute;
    left: 50%;
    top: 85%;
    transform: translate(-50%, -50%);
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    line-height: 1.2;
    white-space: nowrap;
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

  .criteria-section {
    padding: 16px 20px;
  }

  .criteria-label {
    text-transform: uppercase;
    font-size: clamp(10px, 1.4vw, 14px);
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
  }

  .criteria-text {
    font-size: clamp(11px, 1.5vw, 15px);
    line-height: 1.6;
    color: #000000;
  }
</style>
