<script lang="ts">
 import CalculatorModel from "../model/CalculatorModel";

 
  import Button from "./button.svelte"
  import Line from "./Line.svelte";
  import Display from "./Display.svelte"


  let calc = new CalculatorModel()

  const numberTyped = (num: string) => calc = calc.numberTyped(num)
  const dotNotationTyped = (op: string) => calc = calc.dotNotationTyped(op)

</script>



<div class="calculator">
  <Display valueD={calc.value}/>
  <Line>
    <Button highlight text="AC" triple/>
    <Button operational text="/"/>
    
  </Line>
  <Line>
  <Button text="7" onClick={numberTyped}/>
  <Button text="8" onClick={numberTyped}/>
  <Button text="9" onClick={numberTyped}/>
  <Button operational text="*"/>
</Line>
<Line>
  <Button text="4" onClick={numberTyped}/>
  <Button text="5" onClick={numberTyped}/>
  <Button text="6" onClick={numberTyped}/>
  <Button operational text="+"/>
</Line>
<Line>
  <Button text="1" onClick={numberTyped}/>
  <Button text="2" onClick={numberTyped}/>
  <Button text="3" onClick={numberTyped}/>
  <Button operational text="-"/>
</Line>
<Line>
  <Button text="0" duble onClick={numberTyped}/>
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