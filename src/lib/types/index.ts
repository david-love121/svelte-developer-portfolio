export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	demoUrl?: string;
	githubUrl?: string;
	imageUrl?: string;
}

export interface AnimationState {
	mounted: boolean;
	animationsStarted: boolean;
	isAnimating: boolean;
	animationComplete: boolean;
	showNavigation: boolean;
	showContent?: boolean;
}
