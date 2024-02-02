<script lang="ts">
	import SectionBase from '$components/SectionBase.svelte';
	import StartEndDate from '$components/StartEndDate.svelte';
	import { work } from '$cv';
</script>

<SectionBase title="Experiencia Laboral">
	<ul>
		{#each work as { url, position, summary, startDate, endDate, name }}
			<li>
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

					<footer>
						<p>{summary}</p>
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

	h4 {
		@apply text-sm;
	}
</style>
