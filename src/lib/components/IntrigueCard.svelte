<script>
  export let intrigue;
  
  function handleClick() {
    const event = new CustomEvent('cardclick', {
      detail: intrigue
    });
    document.dispatchEvent(event);
  }
</script>

<div
  class="test-card"
  on:click={handleClick}
  role="button"
  tabindex="0"
>
  <h3>{intrigue.name}</h3>
  <p>Category: {intrigue.category}</p>
  <p>Test: {intrigue.alignmentTest}</p>
  <p>Reward: {intrigue.reward}</p>
</div>

<style>
  .test-card {
    background: white;
    color: black;
    border: 3px solid red;
    padding: 20px;
    cursor: pointer;
    min-height: 200px;
  }
  
  .test-card h3 {
    color: red;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .test-card p {
    margin: 5px 0;
    font-size: 12px;
  }
</style>
