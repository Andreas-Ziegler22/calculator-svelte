<script lang="ts">
  export let valueD: string
</script>

<div class="displayD">
  <span>{valueD}</span>
</div>

<style>
  .displayD{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    font-size: 1.7rem;
    background-color: aliceblue;
    overflow: hidden;
    margin: 2px 1px;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;


  }
</style>