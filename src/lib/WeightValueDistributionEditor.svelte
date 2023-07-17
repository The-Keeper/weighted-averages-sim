<script lang="ts">
	import WeightValueRange from "./WeightValueRange.svelte";
    import type {WeightValueDistribution} from "$lib/types";

    function addDistribution() {
        let distr: WeightValueDistribution = {val_low: 1, val_high: 10, weight_low: 1, weight_high: 10, share: 50};
        distribution_data =  [...distribution_data, distr];
    }

    function removeDistributionAt(id: number) {
        const modified = distribution_data.slice(); // create a copy of the array
        modified.splice(id, 1);
        distribution_data = modified;
    }

    export let distribution_data = new Array<WeightValueDistribution>();
</script>

<div>
    {#each distribution_data as d, id}
        <div>
            <span>{id}</span>
            <WeightValueRange bind:val_low={d.val_low} bind:val_high={d.val_high} bind:weight_low={d.weight_low} bind:weight_high={d.weight_high}/>
            <input type="range" name="" id="share" bind:value={d.share}>
            <button on:click={() => removeDistributionAt(id)}>Remove</button>
        </div>
    {/each}
    <button on:click={addDistribution}> Add Data </button>
</div>

