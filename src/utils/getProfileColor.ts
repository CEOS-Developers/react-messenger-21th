import { Color } from '@/apis/dto';

export const getProfileColor = (type: 'background' | 'path', color: Color) => {
	const isBackground = type === 'background';

	if (isBackground) {
		switch (color) {
			case 'blue':
				return 'bg-profile-blue-100';
			case 'purple':
				return 'bg-profile-purple-100';
			case 'yellow':
				return 'bg-profile-yellow-100';
			case 'pink':
				return 'bg-profile-pink-100';
			case 'orange':
				return 'bg-profile-orange-100';
		}
	} else {
		switch (color) {
			case 'blue':
				return 'text-profile-blue-200';
			case 'purple':
				return 'text-profile-purple-200';
			case 'yellow':
				return 'text-profile-yellow-200';
			case 'pink':
				return 'text-profile-pink-200';
			case 'orange':
				return 'text-profile-orange-200';
		}
	}
};
