import Feed from '@components/Feed';

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Create and Find
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'> ChatGPT Questions</span>
			</h1>
			<p className='desc text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum
				officiis velit quas repudiandae excepturi repellendus in dolorem labore
				accusamus. Recusandae qui itaque nisi aliquid ipsa quia blanditiis vel
				nesciunt?
			</p>
			<Feed />
		</section>
	);
};

export default Home;
