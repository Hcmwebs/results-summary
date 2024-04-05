import data from '../data/Data';
import Button from './Button';

const CardBody = () => {
	return (
		<article className='w-full card-body bg-white'>
			<h2>Summary</h2>
			<div className='grid grid-cols-1 gap-y-4'>
				{data.map((item) => {
					const { category, icon, score, bgColor } = item;
					return (
						<div
							key={category}
							className={`flex w-full justify-between align-center p-6 shadow-lg outline outline-1 outline-red-700 rounded-lg bg-gradient-to-r from-[rgba(255,255,255,0.95)] ${'to-[hsla(0,89%,65%,0.15)] 100%'}
								
							`}
						>
							<header className='flex gap-x-2'>
								<img src={icon} alt='reaction' />
								<h2 className={`capitalize ${'text-[color]'}`}>{category}</h2>
							</header>
							<div className=''>
								<p>
									<span className='text-black'>{score}</span>/100
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<Button />
		</article>
	);
};

export default CardBody;
