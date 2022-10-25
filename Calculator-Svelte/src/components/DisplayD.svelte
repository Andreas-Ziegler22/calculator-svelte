<script lang="ts">
  export let valueD: string

 $: changeFontSize = valueD.length > 20 ? 'small' : `s-${valueD.length}`
</script>

<div class={`displayD ${changeFontSize}`}>
  <span>{valueD}</span>
</div>


<style>
.displayD {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 5px;
        font-size: 1.7rem;
        background-color: aliceblue;
        overflow: hidden;
        margin: 2px 1px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .s-{font-size: 1.5rem;}
    .s-{font-size: 1.35rem;}
    
    .small{font-size: 0.6rem;}
</style>