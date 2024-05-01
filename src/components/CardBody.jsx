import data from '../data/Data';
import { Button } from './index';

const CardBody = () => {
	return (
		<article className=' h-full w-full grid grid-col-1 px-6 bg-white gap-y-6 md:rounded-r-[2rem]'>
			<h2 className='font-bold text-[#303B59] text-lg'>Summary</h2>
			<div className='grid grid-cols-1 gap-y-4'>
				{data.map((item) => {
					const { category, icon, score, className } = item;
					return (
						<div key={category} className={className}>
							<header className='flex gap-x-2'>
								<img src={icon} alt='reaction' />
								<h2 className={`${'text-[color]'}`}>{category}</h2>
							</header>
							<div>
								<p className='text-slate-500'>
									<span className='text-black'>{score}</span> / 100
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<footer className='w-full grid, grid-cols-1 place-items-center'>
				<Button />
			</footer>
		</article>
	);
};

export default CardBody;
