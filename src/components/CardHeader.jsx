import React from 'react';

const CardHeader = () => {
	return (
		<>
			<header className='bg-blue-500 w-full grid grid-cols-1 place-items-center gap-y-6 py-8 rounded-b-[2rem] '>
				<h1 className='text-center'>Your Results</h1>
				<div className='w-36 h-36 rounded-full flex flex-col justify-center items-center bg-blue-800'>
					<h2>76</h2>
					<p>of 100</p>
				</div>
				<div className='text-center'>
					<h3 className='text-lg capitalize'>great</h3>
					<p>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
			</header>
		</>
	);
};

export default CardHeader;
