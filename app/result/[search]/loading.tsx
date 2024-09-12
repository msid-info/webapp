const Loading = () => {
	return (
		<div className='mx-auto max-w-3xl py-32 px-2 dark:text-white'>
			<h1 className='text-4xl font-bold'><div className="skeleton w-250" style={{ height: '40px' }}></div></h1>
			<h1 className='text-4xl font-bold mt-4'><div className="skeleton w-150" style={{ height: '20px' }}></div></h1>
			<p className='text-sm'></p>
		</div>
	)
}

export default Loading