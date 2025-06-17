<script lang="ts">
	import { fade } from 'svelte/transition';
	import { socialLinks } from '$lib/constants/social';
	
	export let isOpen = false;
	export let isClosing = false;

	function handleClick(event: MouseEvent) {
		event.stopPropagation();
	}

	function handleKeydown(event: KeyboardEvent) {
		event.stopPropagation();
	}
</script>

{#if isOpen}
	<div 
		class="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
		class:closing={isClosing}
		out:fade={{ duration: 150 }}
		on:click={handleClick}
		on:keydown={handleKeydown}
		role="menu"
		aria-label="Social media links"
		tabindex="-1"
	>
		<div class="py-2">
			{#each socialLinks as link}
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
					role="menuitem"
				>
					<svg class="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
						<path d={link.icon} />
					</svg>
					{link.name}
				</a>
			{/each}
		</div>
	</div>
{/if}

<style>
	.closing {
		pointer-events: none;
	}
</style>
