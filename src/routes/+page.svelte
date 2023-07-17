<script lang="ts">
    import type { DistributionData } from "$lib/types";
	import WeightValueDistributionEditor from "$lib/WeightValueDistributionEditor.svelte";

    let distribution_data: DistributionData;
    $: stringified_data = JSON.stringify(distribution_data); 
</script>

<div>
    <WeightValueDistributionEditor bind:distribution_data />
</div>
<div>
    {stringified_data}
</div>