<script lang="ts">
export let text: String
export let triple: boolean = false
export let duble: boolean = false
export let operational: boolean = false
export let highlight: boolean = false
export let onClick: (valor: string) => void = () => {}


</script>

<button class="button" on:click={() => onClick(text)}

class:triple 
class:duble 
class:operational 
class:highlight> 
{text}
</button>


<style>
.button{
  margin: 0;
  border: 1px solid var(--color-back);
  flex-basis: 25%;
}
.triple{
  flex-basis: 75%;
}
.duble{
  flex-basis: 50%;
}
.operational{
  background-color: yellow;
  color: #000;
}
.highlight{
  background-color:#000;
  color: #fff;
}

</style>