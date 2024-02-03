<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { CV } from '../../cv';
	import StartEndDate from './StartEndDate.svelte';

	export let work: CV['work'][0];

	const { url, position, summary, startDate, endDate, name, highlights = [] } = work;
</script>

<article>
	<header>
		<div class="workinfo">
			<h3>
				<a href={url} title="Visitar sitio" target="_blank">
					{name}
				</a>
			</h3>
			<h4>{position}</h4>
		</div>

		<StartEndDate {startDate} {endDate} />
	</header>
	<p>{summary}</p>

	<footer>
		<ul>
			{#each highlights as highlight}
				<li class="badge badge-outline badge-sm text-accent sm:badge-md">
					<Icon icon="fa6-solid:medal" class="text-xs"></Icon>
					{highlight}
				</li>
			{/each}
		</ul>
	</footer>
</article>

<style lang="postcss">
	header {
		@apply mb-2 flex flex-col items-baseline justify-between gap-2 md:flex-row;
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
