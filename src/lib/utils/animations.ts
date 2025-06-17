/**
 * Utility functions for handling animations and timing effects
 */

export function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export async function typeText(
	text: string,
	updateFunction: (text: string) => void,
	speed: number = 50
): Promise<void> {
	for (let i = 0; i <= text.length; i++) {
		updateFunction(text.slice(0, i));
		await sleep(speed);
	}
}

export async function blinkCursor(
	times: number,
	updateFunction: (show: boolean) => void,
	speed: number = 500
): Promise<void> {
	for (let i = 0; i < times; i++) {
		updateFunction(false);
		await sleep(speed);
		updateFunction(true);
		await sleep(speed);
	}
}

export interface AnimationSequence {
	readonly isAnimating: boolean;
	readonly animationComplete: boolean;
	start(animationFn: () => Promise<void>): Promise<void>;
	reset(): void;
}

export function createAnimationSequence(): AnimationSequence {
	let isAnimating = false;
	let animationComplete = false;

	return {
		get isAnimating() { return isAnimating; },
		get animationComplete() { return animationComplete; },
		
		async start(animationFn: () => Promise<void>) {
			if (isAnimating || animationComplete) return;
			
			isAnimating = true;
			try {
				await animationFn();
				animationComplete = true;
			} catch (error) {
				console.error('Animation error:', error);
			} finally {
				isAnimating = false;
			}
		},
		
		reset() {
			isAnimating = false;
			animationComplete = false;
		}
	};
}
