<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: ({ projects } = data);
</script>

<svelte:head>
	<title>Projects - David Love</title>
	<meta name="description" content="Explore my portfolio of projects including neural networks, chess AI, and GPU shader experiments. See my work in AI, machine learning, and web development." />
	<meta name="keywords" content="projects, portfolio, neural networks, chess AI, GPU shaders, machine learning, web development" />
</svelte:head>

<Layout>
	<div class="pt-20 pb-16">
		<div class="container mx-auto px-6">
			<!-- Hero Section -->
			<div class="text-center mb-16">
				{#if mounted}
					<h1 
						class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
						transition:fade={{ delay: 200, duration: 800 }}
					>
						Featured Projects
					</h1>
					<p 
						class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
						transition:fade={{ delay: 400, duration: 800 }}
					>
						A collection of projects showcasing my expertise in full-stack development, 
						AI/ML implementations, and creative problem-solving. Each project demonstrates 
						different aspects of modern software development.
					</p>
				{/if}
			</div>

			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{#if mounted}
					{#each projects as project, index}
						<div
							transition:fly={{ 
								delay: 600 + (index * 200), 
								duration: 600, 
								y: 50 
							}}
						>
							<ProjectCard {project} />
						</div>
					{/each}
				{/if}
			</div>

			<!-- Call to Action -->
			{#if mounted}
				<div 
					class="text-center mt-16"
					transition:fade={{ delay: 1400, duration: 800 }}
				>
					<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
						Interested in working together?
					</h2>
					<p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
						I'm always open to discussing new opportunities, collaborating on interesting projects, 
						or simply connecting with fellow developers and innovators.
					</p>
					<a 
						href="/#about" 
						class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
					>
						<span>Get In Touch</span>
						<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</div>
</Layout>