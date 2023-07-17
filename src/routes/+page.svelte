<script lang="ts">
    import WeightValueDistributionViewer from "$lib/WeightValueDistributionViewer.svelte";
    import type {DistributionData, WeightValueDistribution} from "$lib/types";
    let distribution_data: DistributionData = new Array();

    function addDistribution() {
        let distr: WeightValueDistribution = {val_low: 1, val_high: 10, weight_low: 1, weight_high: 10, share: 0};
        distribution_data =  [...distribution_data, distr];
    }
    $: total_count = distribution_data.length;

</script>
<h1>Total distribtions: {total_count}</h1>

<WeightValueDistributionViewer {distribution_data} />
<button on:click={addDistribution}> Add Data </button>
