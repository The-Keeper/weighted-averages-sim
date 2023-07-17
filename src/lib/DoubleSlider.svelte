<script lang="ts">
    export let min = 1;
    export let max = 10;
    export let lower = 1;
    export let higher = 10;
</script>
<input type="range" name="" id="low" {min} {max} value={lower}>
<input type="range" name="" id="high" {min} {max} value={higher}>