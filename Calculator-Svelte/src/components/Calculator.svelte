<script lang="ts">
 
  import Button from "./button.svelte"
  import Line from "./Line.svelte";

</script>



<div class="calculator">
  <Line>
    <Button text="AC"/>
    <Button text="/"/>
    
  </Line>
  <Line>
  <Button text="7"/>
  <Button text="8"/>
  <Button text="9"/>
  <Button text="*"/>
</Line>
<Line>
  <Button text="4"/>
  <Button text="5"/>
  <Button text="6"/>
  <Button text="+"/>
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