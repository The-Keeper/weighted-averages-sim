<script lang="ts">
	import DoubleSlider from "./DoubleSlider.svelte";

    export let weight_low = 1;
    export let weight_high = 10;
    export let val_low = 1;
    export let val_high = 10;
</script>

<DoubleSlider bind:lower={weight_low} bind:higher={weight_high}/>
<DoubleSlider bind:lower={val_low} bind:higher={val_high}/>
