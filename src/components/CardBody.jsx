import data from '../data/Data';

const CardBody = () => {
	return (
		<article className='w-full card-body bg-white'>
			<h2>Summary</h2>
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
		</article>
	);
};

export default CardBody;
