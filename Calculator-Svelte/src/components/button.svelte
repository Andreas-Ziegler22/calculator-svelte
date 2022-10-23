<script lang="ts">
export let text: String
export let triple: boolean = false
export let duble: boolean = false
</script>

<button class="button" class:triple class:duble>

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

</style>