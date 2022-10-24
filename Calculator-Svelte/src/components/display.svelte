<script lang="ts">
  
  export let valueD: string

// here is the problem  and trying to figure out how to solve it message at console -> Uncaught TypeError: Cannot read properties of undefined (reading 'length')
  $: changeFontSize = valueD.length > 20 ? 'small' : `s-${valueD.length}`
</script>

<div class={`displayD ${changeFontSize}`}>
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
  .s-10 { font-size: 1.5rem; }
    .s-11 { font-size: 1.35rem; }
    .s-12 { font-size: 1.25rem; }
    .s-13 { font-size: 1.15rem; }
    .s-14 { font-size: 1.07rem; }
    .s-15 { font-size: 1.0rem; }
    .s-16 { font-size: 0.93rem; }
    .s-17 { font-size: 0.87rem; }
    .s-18 { font-size: 0.83rem; }
    .s-19 { font-size: 0.78rem; }
    .s-20 { font-size: 0.74rem; }

    .small { font-size: 0.6rem; }
</style>