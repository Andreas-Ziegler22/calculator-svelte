<Script lang="ts">
  export let valor: string

  $: tamanhoFonte = valor.length > 20 ? 'pequena' : `s-${valor}`
</Script>


<div class={`display ${tamanhoFonte}`}>
  <span>{valor}</span>
</div>

<style>
  .display{
    display: flex;
    flex: 1;
    background-color: aliceblue;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    overflow: hidden;
    font-size: 1.7rem;
    margin: 2px 1px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

</style>