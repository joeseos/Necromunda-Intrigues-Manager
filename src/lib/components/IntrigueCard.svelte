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
    height: 70px;
    z-index: 2;
  }

  .card-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url('/necromunda-frame.png') top center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .card-name {
    position: relative;
    z-index: 3;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    text-align: center;
    margin: 0;
    line-height: 1.2;
    padding-top: 15px;
  }

  .card-body {
    position: absolute;
    top: 70px;
    bottom: 50px;
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
    height: 50px;
    z-index: 2;
  }

  .card-footer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url('/necromunda-frame.png') bottom center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
</style>
