const CardHeader = () => {
	return (
		<>
			<header className='bg-gradient-to-b from-[hsla(252,100%,67%,1)] to-[hsla(241,81%,54%,1)] 100% w-full md:h-full grid grid-cols-1 place-items-center gap-y-6 py-8 rounded-b-[2rem] md:rounded-[2rem] '>
				<h1 className='para-text font-bold text-xl md:text-2xl'>Your Result</h1>
				<div className='w-36 h-36 rounded-full flex flex-col justify-center items-center bg-gradient-to-b from-[#4D21C9] to-[rgba(37,33,201,0.00)] 100%'>
					<h2 className='text-5xl md:text-7xl font-extrabold text-white'>76</h2>
					<p className='para-text'>of 100</p>
				</div>
				<div className='grid grid-cols-1 place-items-center gap-y-2'>
					<h3 className='text-2xl md:text-3xl capitalize text-white'>great</h3>
					<p className='para-text px-14 font-medium text-base md:text-lg'>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
			</header>
		</>
	);
};

export default CardHeader;
