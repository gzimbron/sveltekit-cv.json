<script lang="ts">
	import Medal from '$icons/Medal.svelte';
	import type { CV } from '../../cv';
	import StartEndDate from './StartEndDate.svelte';

	export let work: CV['work'][0];

	const { url, position, summary, startDate, endDate, name, highlights = [] } = work;
</script>

<article>
	<header>
		<div class="workinfo">
			<h3>
				{#if url}
					<a href={url} title="Visitar sitio" target="_blank">
						{name}
					</a>
				{:else}
					{name}
				{/if}
			</h3>
			<h4>{position}</h4>
		</div>

		<StartEndDate {startDate} {endDate} />
	</header>

	<p>{summary}</p>

	{#if highlights.length}
		<footer>
			<ul>
				{#each highlights as highlight}
					<li class="badge badge-outline badge-sm text-accent sm:badge-md">
						<Medal class="text-xs" />
						{highlight}
					</li>
				{/each}
			</ul>
		</footer>
	{/if}
</article>

<style lang="postcss">
	article {
		@apply flex flex-col gap-5;
	}

	header {
		@apply flex flex-col items-baseline justify-between gap-2 md:flex-row;
	}

	.workinfo {
		@apply flex flex-col;
	}

	h3 {
		@apply text-lg text-secondary;
	}

	h4 {
		@apply text-sm;
	}

	ul {
		@apply flex flex-wrap gap-2;
	}

	li {
		@apply flex gap-2;
	}
</style>
