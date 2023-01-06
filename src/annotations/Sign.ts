import { Language } from './Language';

export type SignFrequency = 'high' | 'medium' | 'low';

export type SignLocation = 'highway' | 'city';

export type Sign = {
	// id: string;
	// filename: string;
	// name: Record<Language, string>[];
	// tags: string[];
	// frequency: SignFrequency;
	location: SignLocation[];
};
