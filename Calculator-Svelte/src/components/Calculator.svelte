<script lang="ts">
 import CalculatorModel from "../model/CalculatorModel";

 
  import Button from "./button.svelte"
  import Line from "./Line.svelte";
  import Display from "./display.svelte";


  let calc = new CalculatorModel()

  const numbertyped = (num: string) => calc = calc.numbertyped(num)
  const dotNotationTyped = (op: string) => calc = calc.dotNotationTyped(op)

</script>



<div class="calculator">
  <Display valueD={calc.value}/>
  <Line>
    <Button highlight text="AC" triple/>
    <Button operational text="/"/>
    
  </Line>
  <Line>
  <Button text="7" onClick={numbertyped}/>
  <Button text="8" onClick={numbertyped}/>
  <Button text="9" onClick={numbertyped}/>
  <Button operational text="*"/>
</Line>
<Line>
  <Button text="4" onClick={numbertyped}/>
  <Button text="5" onClick={numbertyped}/>
  <Button text="6" onClick={numbertyped}/>
  <Button operational text="+"/>
</Line>
<Line>
  <Button text="1" onClick={numbertyped}/>
  <Button text="2" onClick={numbertyped}/>
  <Button text="3" onClick={numbertyped}/>
  <Button operational text="-"/>
</Line>
<Line>
  <Button text="0" duble onClick={numbertyped}/>
  <Button text="," onClick={dotNotationTyped} />
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