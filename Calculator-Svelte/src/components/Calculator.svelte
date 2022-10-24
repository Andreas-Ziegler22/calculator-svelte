<script lang="ts">
 
  import Button from "./button.svelte"
  import Display from "./display.svelte";
  import Line from "./Line.svelte";


  function typedNumber(number: string){
    console.log(number)
  }

</script>



<div class="calculator">
  <Display valueD="0123456789012345678"/>
  <Line>
    <Button highlight text="AC" triple/>
    <Button operational text="/"/>
    
  </Line>
  <Line>
  <Button text="7"/>
  <Button text="8"/>
  <Button text="9"/>
  <Button operational text="*"/>
</Line>
<Line>
  <Button text="4"/>
  <Button text="5"/>
  <Button text="6"/>
  <Button operational text="+"/>
</Line>
<Line>
  <Button text="1"/>
  <Button text="2"/>
  <Button text="3"/>
  <Button operational text="-"/>
</Line>
<Line>
  <Button text="0" duble/>
  <Button text=","/>
  <Button highlight text="="/>
</Line>
</div>

<style>
  .calculator{
    background-color: var(--color-back);
    height: 220px;
    width: 150px;
    padding: 10px;
    border-radius: 10px;


    display: flex;
    flex-direction: column;
  }

  
</style>