<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import StartEndDate from '$components/StartEndDate.svelte';
	import { education } from '$cv';
	import Icon from '@iconify/svelte';
</script>

<SectionBase title="Educación">
	<ul>
		{#each education as { url, startDate, endDate, courses, area, institution }}
			<li>
				<article>
					<header>
						<div class="workinfo">
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

					<footer>
						<ul>
							{#each courses as course}
								<li class=" badge badge-outline badge-sm sm:badge-md">
									<Icon icon="fa6-solid:book" class="text-xs"></Icon>
									{course}
								</li>
							{/each}
						</ul>
					</footer>
				</article>
			</li>
		{/each}
	</ul>
</SectionBase>

<style lang="postcss">
	ul {
		@apply flex flex-col gap-5;
	}
	header {
		@apply mb-2 flex flex-col items-baseline justify-between gap-2 md:flex-row;
	}

	.workinfo {
		@apply flex flex-col;
	}

	h3 {
		@apply text-lg text-secondary;
	}

	footer ul {
		@apply flex-row flex-wrap gap-2;
	}
	footer ul li {
		@apply flex gap-2 text-info;
	}
</style>
