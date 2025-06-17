<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
	{#if project.imageUrl}
		<img 
			src={project.imageUrl} 
			alt="{project.title} project screenshot"
			class="w-full h-48 object-cover rounded-lg mb-4"
			loading="lazy"
		/>
	{/if}
	
	<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
		{project.title}
	</h3>
	
	<p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
		{project.description}
	</p>
	
	<!-- Technology Tags -->
	<div class="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
		{#each project.technologies as tech}
			<span 
				class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
				role="listitem"
			>
				{tech}
			</span>
		{/each}
	</div>
	
	<!-- Action Links -->
	<div class="flex gap-3">
		{#if project.demoUrl}
			<a 
				href={project.demoUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				aria-label="View live demo of {project.title}"
			>
				Live Demo
			</a>
		{/if}
		
		{#if project.githubUrl}
			<a 
				href={project.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
				aria-label="View {project.title} source code on GitHub"
			>
				GitHub
			</a>
		{/if}
	</div>
</article>
