<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import { socialLinks } from '$lib/constants/social';
	import { onMount } from 'svelte';

	// Animation state management
	let mounted = false;
	let animationsStarted = false;
	let isAnimating = false;
	let animationComplete = false;
	let showAboutSection = true; // Show immediately
	
	// Terminal animation variables
	let displayedName = '';
	let displayedSubtitle = '';
	let showCursor = true;
	let showPrompt = false;
	
	const fullName = 'David Love';
	const fullSubtitle = 'Adaptive. Reasonable. Creative.';

	onMount(() => {
		mounted = true;
		
		if (animationsStarted) return;
		animationsStarted = true;
		
		// Start animations after hydration
		requestAnimationFrame(() => {
			setTimeout(() => {
				if (mounted && !animationComplete) {
					startTerminalAnimation();
				}
			}, 500);
		});
	});

	async function startTerminalAnimation() {
		if (isAnimating || animationComplete || !mounted) return;
		
		if (displayedName !== '' || displayedSubtitle !== '' || showPrompt) {
			return;
		}
		
		isAnimating = true;
		
		try {
			// Show prompt first
			await sleep(200);
			showPrompt = true;
			
			// Blink cursor a few times before typing
			await blinkCursor(3);
			
			// Type the name
			await typeText(fullName, (text) => displayedName = text);
			
			// Blink cursor
			await blinkCursor(2);
			
			// Type the subtitle
			await typeText(fullSubtitle, (text) => displayedSubtitle = text);
			
			// Final blinks before ending animation
			await blinkCursor(3);
			showCursor = false;
			animationComplete = true;
			
		} catch (error) {
			console.error('Animation error:', error);
			// Fallback
			displayedName = fullName;
			displayedSubtitle = fullSubtitle;
			showPrompt = true;
		} finally {
			isAnimating = false;
		}
	}
	
	async function typeText(text: string, updateFunction: (text: string) => void) {
		for (let i = 0; i <= text.length; i++) {
			updateFunction(text.slice(0, i));
			await sleep(100);
		}
	}
	
	async function blinkCursor(times: number) {
		for (let i = 0; i < times; i++) {
			showCursor = false;
			await sleep(300);
			showCursor = true;
			await sleep(300);
		}
	}
	
	function sleep(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
</script>

<svelte:head>
	<title>David Love - Full-Stack Developer & AI Enthusiast</title>
	<meta name="description" content="Full-stack developer passionate about creating elegant solutions to complex problems. Specializing in modern web technologies and AI development." />
	<meta name="keywords" content="David Love, developer, full-stack, AI, machine learning, web development, SvelteKit" />
	<meta property="og:title" content="David Love - Full-Stack Developer" />
	<meta property="og:description" content="Full-stack developer passionate about creating elegant solutions to complex problems." />
	<meta property="og:type" content="website" />
</svelte:head>

<Layout>
	<!-- Main Content - Terminal Animation -->
	<main class="flex-grow flex items-center min-h-screen" class:opacity-0={!mounted}>
		<div class="container mx-auto px-6">
			<div class="w-full md:w-2/3 lg:w-1/2">
				<!-- Terminal Animation -->
				{#if showPrompt}
					<div class="font-mono">
						<div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
							<span class="text-green-500 dark:text-green-400">></span>
							<span class="ml-2">{displayedName}</span>
							<span class="cursor-placeholder">
								{#if showCursor && displayedSubtitle === ''}
									<span class="animate-pulse">|</span>
								{:else}
									<span class="invisible">|</span>
								{/if}
							</span>
						</div>
						
						{#if displayedName === fullName}
							<div class="flex justify-end">
								<div class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 tracking-wide">
									<span>{displayedSubtitle}</span>
									<span class="cursor-placeholder">
										{#if showCursor && displayedSubtitle !== ''}
											<span class="animate-pulse">|</span>
										{:else}
											<span class="invisible">|</span>
										{/if}
									</span>
								</div>
							</div>
						{/if}
					</div>
				{:else}
					<!-- Fallback placeholder -->
					<div class="font-mono">
						<div class="text-6xl md:text-8xl font-bold tracking-tighter mb-4 opacity-0">
							<span class="text-green-500 dark:text-green-400">></span>
							<span class="ml-2">David Love</span>
						</div>
						<div class="flex justify-end">
							<div class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 tracking-wide opacity-0">
								Adaptive. Reasonable. Creative.
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</main>

	<!-- About Section -->
	<section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
		<div class="container mx-auto px-6">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
					About me
				</h2>
				<div class="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
					<p>
						I am a computer scientist at UIC with a passion for machine learning and pure mathematics. I tutored 4th grade mathematics with Teach for America.
					</p>
					<p>
						I pursue passion projects in my free time to learn more about computer science and the recent revolution in generative AI. I recently began a project rewriting my feed-forward neural network in C++.
					</p>
					<p>
						When I'm not coding, I enjoy reading and practicing calligraphy. Typography and patterns interest me.
					</p>
				</div>
				
				<div class="flex flex-wrap justify-center gap-4 mt-8">
					{#each socialLinks as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							aria-label="Visit {link.name}"
						>
							{link.name}
						</a>
					{/each}
				</div>
				
				<div class="text-center mt-8">
					<p class="text-sm text-gray-500 dark:text-gray-400">
						DL.
					</p>
				</div>
			</div>
		</div>
	</section>
</Layout>

<style>
	.opacity-0 {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}
	
	.cursor-placeholder {
		display: inline-block;
		min-width: 0.5ch;
	}
</style>