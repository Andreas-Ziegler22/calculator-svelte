<script lang="ts">
export let text: String
export let triple: boolean = false
export let duble: boolean = false
export let operational: boolean = false
export let highlight: boolean = false
</script>

<button class="button" class:triple class:duble class:operational class:highlight>

{text}
</button>


<style>
.button{
  flex-basis: 25%;
}
.triple{
  flex-basis: 75%;
}
.duble{
  flex-basis: 50%;
}
.operational{
  background-color: orange;
  color: #fff;
}
.highlight{
  background-color: red;
  color: #fff;
}

</style>