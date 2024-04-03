import reaction from '../assets/icon-reaction.svg';
import memory from '../assets/icon-memory.svg';
import verbal from '../assets/icon-verbal.svg';
import visual from '../assets/icon-visual.svg';

const data = [
	{
		category: 'Reaction',
		score: 80,
		icon: reaction,
		color: 'hsl(0,89%,65%)',
		bgColor: 'hsla(0,89%,65%,0.15)',
		className:
			'flex w-full justify-between align-center p-6 shadow-lg outline outline-1 outline-red-700 rounded-lg bg-gradient-to-r from-[rgba(255,255,255,0.95)] to-[hsla(0,89%,65%,0.15)] 100%',
	},
	{
		category: 'Memory',
		score: 92,
		icon: memory,
		color: 'hsl(39, 100%, 56%)',
		bgColor: 'hsla(39,100%,56%,0.15)',
		className:
			'flex w-full justify-between align-center p-6 shadow-lg outline outline-1 outline-red-700 rounded-lg bg-gradient-to-r from-[rgba(255,255,255,0.95)] to-[hsla(39,100%,56%,0.15)] 100%',
	},
	{
		category: 'Verbal',
		score: 61,
		icon: verbal,
		color: 'hsla(166, 100%, 37%, 1.0)',
		bgColor: 'hsla(166, 100%, 37%, 0.15)',
		className:
			'flex w-full justify-between align-center p-6 shadow-lg outline outline-1 outline-red-700 rounded-lg bg-gradient-to-r from-[rgba(255,255,255,0.95)] to-hsla(166, 100%, 37%, 0.15)] 100%',
	},
	{
		category: 'Visual',
		score: 72,
		icon: visual,
		color: 'hsla(234, 85%, 45%,1.0)',
		bgColor: 'hsla(234, 85%, 45%,0.15)',
		className:
			'flex w-full justify-between align-center p-6 shadow-lg outline outline-1 outline-red-700 rounded-lg bg-gradient-to-r from-[rgba(255,255,255,0.95)] to-[hsla(234, 85%, 45%,0.15)] 100%',
	},
];

export default data;
