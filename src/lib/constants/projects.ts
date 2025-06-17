import type { Project } from '../types';

export const projects: Project[] = [
	{
		title: 'Neural Network from Scratch',
		description: 'A complete implementation of a neural network built from the ground up using only Python and NumPy.',
		technologies: ['Python', 'NumPy', 'Machine Learning', 'Neural Networks'],
		githubUrl: 'https://github.com/david-love121/neural-network'
	},
	{
		title: 'Chess AI Engine',
		description: 'An intelligent chess engine with minimax algorithm and alpha-beta pruning.',
		technologies: ['Game Development', 'AI', 'Chess Engine', 'Algorithms'],
		githubUrl: 'https://github.com/david-love121/chess-ai'
	},
	{
		title: 'GPU Shader Playground',
		description: 'Interactive shader experiments and visualizations using GLSL.',
		technologies: ['GLSL', 'Computer Graphics', 'AI', 'Shaders'],
		demoUrl: 'https://david-love121.github.io/shader-playground',
		githubUrl: 'https://github.com/david-love121/shader-playground'
	}
];
