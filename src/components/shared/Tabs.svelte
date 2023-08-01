<script>
  export let tabLabels;
  export let activeTab;
</script>

<div class="tabs">
  <ul>
    {#each tabLabels as tab}
      <li>
        <div class:active={tab === activeTab}>{tab}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
