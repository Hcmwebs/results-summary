const SingleItem = ({ bgColor, color, category, score, icon, className }) => {
	return (
		<>
			<div className={className}>
				<header className='flex gap-x-2'>
					<img src={icon} alt='reaction' />
					<h2 className={`capitalize`}>{category}</h2>
				</header>
				<div className=''>
					<p>
						<span className='text-black'>{score}</span>/100
					</p>
				</div>
			</div>
		</>
	);
};

export default SingleItem;
