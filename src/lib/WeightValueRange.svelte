<script lang="ts">
	import DoubleSlider from "./DoubleSlider.svelte";

    export let weight_low = 1;
    export let weight_high = 10;
    export let val_low = 1;
    export let val_high = 10;
</script>

<DoubleSlider lower={weight_low} higher={weight_high}/>
<DoubleSlider lower={val_low} higher={val_high}/>
