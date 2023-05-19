import Feed from '@components/Feed';

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Create and Find
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'> Bible Verses</span>
			</h1>
			<p className='desc text-center'>
				Looking for answers on a Bible subject? Do you need a word of
				inspiration or encourgment? Browse through various topics to discover
				answers or create a topic to contribute!
			</p>
			<Feed />
		</section>
	);
};

export default Home;
