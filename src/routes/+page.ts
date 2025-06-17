import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// This page doesn't need to load external data
	// but we can add metadata or configuration here
	return {
		meta: {
			title: 'David Love - Full-Stack Developer & AI Enthusiast',
			description: 'Full-stack developer passionate about creating elegant solutions to complex problems.'
		}
	};
};
