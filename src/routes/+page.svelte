<script lang="ts">
    import type { DistributionData } from "$lib/types";
	import WeightValueDistributionEditor from "$lib/WeightValueDistributionEditor.svelte";
    import { GenerateDataPoints } from "$lib/generator";

    let distribution_data: DistributionData;
    let respondents_number: number = 8;
    let criteria_number:    number = 10;
    let areas_number:       number  = 5;

    $: generated_data = GenerateDataPoints(distribution_data, respondents_number, areas_number, criteria_number); 

</script>

<div>
    <WeightValueDistributionEditor bind:distribution_data />
</div>
<div>		
    <span>Areas Number: </span> <input type="number" bind:value={areas_number} min="1" max="100" />
    <span>Respondents Number:</span> <input type="number" bind:value={respondents_number} min="1" max="100" />
    <span>Criteria Number:</span> <input type="number" bind:value={criteria_number} min="1" max="100" />
</div>

<div style="max-width: 100%; overflow-wrap: break-word">
    <p>{generated_data}</p>
</div>
