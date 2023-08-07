<script>
  // import { onMount, onDestroy } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  //WITH AUTO-SUBSCRIPTION IN EACH LOOP BELOW, LOCAL VAR NO LONGER NEEDED
  // export let polls = [];

  // MANUAL SUBSCRIBE AND UNSUBSCRIBE OF POLLSTORE DATA. VERY VERBOSE
  // const unsubscribe = PollStore.subscribe(data => {
  //   polls = data;
  // })

  // onMount(() => {
  //   console.log("Component mounted");
  // })

  // onDestroy(() => {
  //   console.log("Component destroyed");
  //   unsubscribe();
  // })
</script>

<div class="poll-list">
  <!-- instead of manually subbing/unsubbing, simply add a '$' -->
  <!-- in front of the store reference to auto-sub/unsub -->
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    
  }
</style>
