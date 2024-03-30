import React from 'react';

const App = () => {
	return (
		<main className='mx-auto grid grid-cols-1 place-items-center min-h-screen'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<header className=' grid place-items-center rounded'>
					<h1 className='capitalize text-2xl'>your Result</h1>
					<div className='w-36 h-36 rounded-full bg-blue-600 flex flex-col align-center justify-center'>
						<h2 className='capitalize text-5xl text-center'>76</h2>
						<span className='text-lg text-center'>of 100</span>
					</div>
					<h3 className='card-title'>Great!</h3>
					<p>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</header>
				<div className='card-body items-center text-center'>
					<div className='card-actions'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
