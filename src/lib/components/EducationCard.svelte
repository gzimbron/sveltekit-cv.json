<script lang="ts">
	import Book from '$icons/Book.svelte';
	import type { CV } from '../../cv';
	import StartEndDate from './StartEndDate.svelte';

	export let education: CV['education'][0];

	const { url, institution, area, startDate, courses, endDate } = education;
</script>

<article>
	<header>
		<div class="educationinfo">
			<h3>
				<a href={url} title="Visitar sitio" target="_blank">
					{institution}
				</a>
			</h3>
			<p>{area}</p>
		</div>

		{#if startDate}
			<StartEndDate {startDate} {endDate} />
		{/if}
	</header>

	{#if courses.length}
		<footer>
			<ul>
				{#each courses as course}
					<li class="badge badge-outline badge-sm text-accent sm:badge-md">
						<Book class="text-xs" />
						{course}
					</li>
				{/each}
			</ul>
		</footer>
	{/if}
</article>

<style lang="postcss">
	article {
		@apply flex flex-col gap-2;
	}

	header {
		@apply mb-2 flex flex-col items-baseline justify-between gap-5 md:flex-row;
	}

	.educationinfo {
		@apply flex flex-col;
	}

	h3 {
		@apply text-lg text-secondary;
	}

	ul {
		@apply flex flex-row flex-wrap gap-2;
	}

	li {
		@apply flex gap-2;
	}
</style>
