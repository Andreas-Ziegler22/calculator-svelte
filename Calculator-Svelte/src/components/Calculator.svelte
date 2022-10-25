<script lang="ts">
  import CalculatorModel from "../model/calculatorModel";

 



  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Line from "./Line.svelte";

  let calc = new CalculatorModel()

  const numeroDigitado = (num:string )=> calc = calc.numeroDigitado(num)
  const pontoDigitado = () => calc = calc.pontoDigitado()
  const clean = () => calc = calc.clean()


</script>

<div class="calculator">
  <Display valor={calc.valor}/>
  <Line>
    <Button highlight text="AC" triple onClick={clean}/>
    <Button operational text="/"/>
    
  </Line>
  <Line>
  <Button text="7" onClick={numeroDigitado}/>
  <Button text="8" onClick={numeroDigitado}/>
  <Button text="9" onClick={numeroDigitado}/>
  <Button operational text="*"/>
</Line>
<Line>
  <Button text="4" onClick={numeroDigitado}/>
  <Button text="5" onClick={numeroDigitado}/>
  <Button text="6" onClick={numeroDigitado}/>
  <Button operational text="+"/>
</Line>
<Line>
  <Button text="1" onClick={numeroDigitado}/>
  <Button text="2" onClick={numeroDigitado}/>
  <Button text="3" onClick={numeroDigitado}/>
  <Button operational text="-"/>
</Line>
<Line>
  <Button text="0" duble onClick={numeroDigitado}/>
  <Button text=","  onClick={pontoDigitado}/>
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