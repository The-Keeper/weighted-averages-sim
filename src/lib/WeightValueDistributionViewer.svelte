<script lang="ts">
	import WeightValueRange from "./WeightValueRange.svelte";
    import type {DistributionData} from "$lib/types";

export let distribution_data: DistributionData;

 function removeItem(id: number) {
    delete distribution_data[id];
}

</script>

{#each distribution_data as d, id}
    <div>
        <span>{id}</span>
        <WeightValueRange val_low={d.val_low} val_high={d.val_high} weight_low={d.weight_low} weight_high={d.val_high}/>
        <input type="slider" value={d.share}>
        <button on:click={() => removeItem(id)}>Remove</button>
    </div>
{/each}


