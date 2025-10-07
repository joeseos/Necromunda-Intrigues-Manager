<script>
  export let intrigue;
  export let onClose;
  
  const isOutlaw = intrigue.suit === 'diamonds';
  
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
</script>

<div 
  class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
  on:click={handleBackdropClick}
  on:keydown={(e) => e.key === 'Escape' && onClose()}
  role="dialog"
  aria-modal="true"
>
  <div 
    class="modal-card {isOutlaw ? 'outlaw' : 'law'}"
    on:click|stopPropagation
  >
    <div class="card-frame-top"></div>

    <div class="modal-content">
      <div class="content-overlay"></div>
      
      <div class="content-inner">
        <div class="flex justify-between items-start mb-6">
          <div class="flex items-center gap-4">
            <div class="value-badge-large {isOutlaw ? 'outlaw-badge' : 'law-badge'}">
              <span class="value-text">{intrigue.value}</span>
            </div>
            <div class="suit-icon-large">
              {#if isOutlaw}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="text-red-400">
                  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400">
                  <path d="M4 4v6.5c0 2.5 2 4.5 4.5 4.5S13 13 13 10.5V4"/>
                  <path d="M13 4c0 5 3 7 6 7 2 0 3-.5 3-3V4"/>
                  <path d="M12 15l-1 9"/>
                  <path d="M6 15l1 9"/>
                </svg>
              {/if}
            </div>
          </div>
          <button
            on:click={onClose}
            class="text-gray-400 hover:text-white text-5xl font-bold transition-colors leading-none -mt-2"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div class="modal-title">
          <h2>{intrigue.name}</h2>
        </div>

        <div class="details-section">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label-large">Category</span>
              <span class="info-value-large">{intrigue.category}</span>
            </div>
            <div class="info-item">
              <span class="info-label-large">Alignment Test</span>
              <span class="info-value-large">{intrigue.alignmentTest}</span>
            </div>
          </div>
          
          <div class="reward-box">
            <span class="reward-label-large">Reward</span>
            <span class="reward-value-large">{intrigue.reward}</span>
          </div>
          
          <div class="criteria-box">
            <span class="criteria-label-large">Criteria</span>
            <p class="criteria-text-large">{intrigue.criteria}</p>
          </div>

          {#if intrigue.notes}
            <div class="notes-box">
              <span class="notes-label-large">Notes</span>
              <p class="notes-text-large">{intrigue.notes}</p>
            </div>
          {/if}
        </div>
      </div>
    </div>

    <div class="card-frame-bottom"></div>
    <div class="scratches-overlay"></div>
  </div>
</div>

<style>
  .modal-card {
    max-width: 48rem;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
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
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .modal-card.outlaw {
    border: 4px solid #7f1d1d;
  }

  .modal-card.law {
    border: 4px solid #1f2937;
  }

  .card-frame-top,
  .card-frame-bottom {
    height: 48px;
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
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #888 0%, #444 60%, #222 100%);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
    border: 1px solid #1a1a1a;
  }

  .card-frame-top::before,
  .card-frame-bottom::before {
    left: 16px;
  }

  .card-frame-top::after,
  .card-frame-bottom::after {
    right: 16px;
  }

  .modal-content {
    flex: 1;
    padding: 32px;
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
  }

  .value-badge-large {
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid;
    box-shadow: 0 4px 12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1);
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
    font-size: 48px;
    font-weight: 900;
    font-family: serif;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.9);
  }

  .suit-icon-large {
    padding: 12px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal-title {
    text-align: center;
    padding: 12px;
    margin-bottom: 24px;
    background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
    backdrop-filter: blur(4px);
    border-radius: 4px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }

  .modal-title h2 {
    font-size: 28px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #f3f4f6;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
    margin: 0;
  }

  .details-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%);
    backdrop-filter: blur(2px);
    border: 2px solid rgba(107, 114, 128, 0.5);
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .info-label-large {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #9ca3af;
    letter-spacing: 0.05em;
  }

  .info-value-large {
    color: #e5e7eb;
    font-weight: 600;
    font-size: 16px;
  }

  .reward-box {
    padding: 16px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(113, 63, 18, 0.3) 0%, rgba(120, 53, 15, 0.2) 100%);
    backdrop-filter: blur(2px);
    border: 2px solid rgba(180, 83, 9, 0.5);
  }

  .reward-label-large {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #fbbf24;
    margin-bottom: 8px;
    letter-spacing: 0.05em;
  }

  .reward-value-large {
    display: block;
    color: #fde047;
    font-weight: 700;
    font-size: 18px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
  }

  .criteria-box {
    padding: 16px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%);
    backdrop-filter: blur(2px);
    border-top: 2px solid rgba(255, 255, 255, 0.2);
  }

  .criteria-label-large {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #9ca3af;
    margin-bottom: 12px;
    letter-spacing: 0.05em;
  }

  .criteria-text-large {
    color: #d1d5db;
    line-height: 1.6;
    font-size: 15px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    margin: 0;
  }

  .notes-box {
    padding: 16px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%);
    backdrop-filter: blur(2px);
    border-top: 2px solid rgba(255, 255, 255, 0.2);
  }

  .notes-label-large {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #9ca3af;
    margin-bottom: 12px;
    letter-spacing: 0.05em;
  }

  .notes-text-large {
    color: #d1d5db;
    line-height: 1.6;
    font-size: 15px;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    margin: 0;
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
