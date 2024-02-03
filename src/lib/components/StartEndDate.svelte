<script lang="ts">
	import Calendar from '$icons/Calendar.svelte';

	export let startDate: string;
	export let endDate: string | null;

	export let hideActual = false;

	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : null;
</script>

<time>
	<Calendar />
	<span>{start.toLocaleDateString()}</span>

	{#if (!hideActual && !endDate) || endDate}
		<span> - </span>

		<span>{end ? end.toLocaleDateString() : 'Actual'}</span>
	{/if}
</time>

<style lang="postcss">
	time {
		@apply flex items-baseline gap-2 text-xs text-accent;
	}
</style>
