import { Button, CardBody, CardHeader } from './index';

const Card = () => {
	return (
		<main className='mx-auto grid grid-cols-1 place-items-center min-h-screen'>
			<section className='bg-white w-full max-w-[375px] md:max-w-[736px] flex flex-col justify-center items-center pb-8'>
				<CardHeader />
				<CardBody />
				<Button />
			</section>
		</main>
	);
};

export default Card;
