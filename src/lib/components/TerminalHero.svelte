<script lang="ts">
	import { onMount } from 'svelte';
	import { typeText, blinkCursor, createAnimationSequence } from '$lib/utils/animations';

	export let showContent = false;

	// Animation state
	let displayedName = '';
	let displayedSubtitle = '';
	let showCursor = true;
	let showPrompt = false;

	// Constants - these could be moved to a constants file if reused
	const DEVELOPER_NAME = 'David Love';
	const DEVELOPER_TAGLINE = 'Adaptive. Reasonable. Creative.';
	const TERMINAL_PROMPT = 'developer@portfolio';
	
	const animation = createAnimationSequence();

	onMount(() => {
		// Start animation after a brief delay to ensure proper mounting
		const timeoutId = setTimeout(() => {
			animation.start(runTerminalAnimation);
		}, 100);

		// Cleanup timeout if component is destroyed
		return () => clearTimeout(timeoutId);
	});

	async function runTerminalAnimation() {
		try {
			// Type the name with natural typing speed
			await typeText(DEVELOPER_NAME, (text) => displayedName = text, 60);
			await blinkCursor(2, (show) => showCursor = show);
			
			// Type the subtitle
			await typeText(DEVELOPER_TAGLINE, (text) => displayedSubtitle = text, 45);
			await blinkCursor(3, (show) => showCursor = show);
			
			// Show final prompt and trigger content display
			showPrompt = true;
			showContent = true;
		} catch (error) {
			console.error('Terminal animation failed:', error);
			// Fallback: show all content immediately
			displayedName = DEVELOPER_NAME;
			displayedSubtitle = DEVELOPER_TAGLINE;
			showPrompt = true;
			showContent = true;
		}
	}
</script>

<section class="container mx-auto px-6 flex items-center justify-center min-h-screen">
	<div class="text-center space-y-8 max-w-4xl w-full">
		<!-- Terminal Window -->
		<div 
			class="bg-gray-900 dark:bg-black rounded-lg p-6 text-left font-mono text-green-400 shadow-2xl border border-gray-700"
			role="img"
			aria-label="Terminal simulation showing developer introduction"
		>
			<!-- Terminal Header -->
			<header class="flex items-center mb-4 space-x-2">
				<div class="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true"></div>
				<div class="w-3 h-3 bg-yellow-500 rounded-full" aria-hidden="true"></div>
				<div class="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
				<span class="ml-4 text-gray-500 text-sm">terminal</span>
			</header>
			
			<!-- Terminal Content -->
			<div class="space-y-2">
				<!-- Command Line -->
				<div class="flex items-center">
					<span class="text-blue-400">{TERMINAL_PROMPT}</span>
					<span class="text-white">:</span>
					<span class="text-purple-400">~</span>
					<span class="text-white">$ whoami</span>
				</div>
				
				<!-- Name Output -->
				{#if displayedName}
					<div class="text-green-400">
						{displayedName}
						{#if showCursor && displayedSubtitle === ''}
							<span class="animate-pulse" aria-hidden="true">|</span>
						{/if}
					</div>
				{/if}
				
				<!-- Subtitle Output -->
				{#if displayedSubtitle}
					<div class="text-gray-300">
						{displayedSubtitle}
						{#if showCursor && !showPrompt}
							<span class="animate-pulse" aria-hidden="true">|</span>
						{/if}
					</div>
				{/if}
				
				<!-- Final Prompt -->
				{#if showPrompt}
					<div class="flex items-center mt-4">
						<span class="text-blue-400">{TERMINAL_PROMPT}</span>
						<span class="text-white">:</span>
						<span class="text-purple-400">~</span>
						<span class="text-white">$ </span>
						<span class="animate-pulse" aria-hidden="true">|</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Content that appears after animation -->
		{#if showContent}
			<div class="space-y-6 fade-in">
				<blockquote class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4 italic">
					David Love<br>
					Adaptive. Reasonable. Creative.
				</blockquote>
				
				<nav class="flex flex-wrap justify-center gap-4" aria-label="Main navigation">
					<a 
						href="#about" 
						class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Learn More
					</a>
					<a 
						href="/projects" 
						class="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						View Projects
					</a>
				</nav>
			</div>
		{/if}
	</div>
</section>

<style>
	.fade-in {
		animation: fadeIn 1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
