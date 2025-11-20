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
    font-size: clamp(11px, 1.5vw, 14px); /* Increased from 6px-9px */
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
    font-size: clamp(11px, 1.5vw, 14px); /* Increased from 7px-10px */
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
    font-size: clamp(10px, 1.4vw, 13px); /* Increased from 6px-9px */
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

    /* Override for print - smaller text */
    .description-text {
      font-size: 7px !important;
    }

    .info-row {
      font-size: 8px !important;
    }

    .criteria-section {
      font-size: 7px !important;
    }
  }
</style>
