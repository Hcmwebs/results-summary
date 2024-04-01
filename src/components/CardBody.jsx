import React from 'react';
import data from '../data/Data';

const CardBody = () => {
	return (
		<article className='w-full card-body bg-white'>
			<h2>Summary</h2>
			<div className='grid grid-cols-1 gap-y-4'>
				{data.map((item) => {
					const { category, score, icon, colorFrom, colorTo } = item;
					return (
						<div
							key={score}
							className={`card flex flex-row rounded-xl  shadow-sm p-4 ${'text-[colorTo]bg-gradient-to-l from-[colorFrom] to-[colorTo] 100%'}`}
						>
							<img src={icon} alt={category} />
							<p className='ml-4'>{category}</p>
							<span>{score}/100</span>
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default CardBody;
