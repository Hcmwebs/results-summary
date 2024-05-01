import { CardBody, CardHeader } from './index';

const Card = () => {
	return (
		<main className='mx-auto grid grid-cols-1 place-items-center min-h-screen'>
			<section className='bg-white w-full h-full max-w-[375px] md:max-w-[736px] md:max-h-[512px] flex flex-col md:flex-row justify-center items-center pb-8 md:py-0 gap-y-6'>
				<CardHeader />
				<CardBody />
			</section>
		</main>
	);
};

export default Card;
