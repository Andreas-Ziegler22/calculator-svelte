<script lang="ts">
 
  import Button from "./button.svelte"
  import Line from "./Line.svelte";

</script>



<div class="calculator">
  <Line>
  <Button text="7"/>
  <Button text="8"/>
  <Button text="9"/>
</Line>
<Line>
  <Button text="4"/>
  <Button text="5"/>
  <Button text="6"/>
</Line>
</div>

<style>
  .calculator{
    background-color: var(--color-back);
    height: 220px;
    width: 150px;



    display: flex;
    flex-direction: column;
  }

</style>