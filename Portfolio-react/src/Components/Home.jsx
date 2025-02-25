const Home = () => {
    return (
        <>
            <h1 className="flex justify-center items-center mt-40 text-4xl font-bold dark:text-white">Hello, Welcome on my Portfolio !</h1>
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center mt-10">
                <video autoPlay loop muted src="Video/home-Video.mp4"
                       className="m-auto w-[calc(100%-50rem)] h-auto rounded-[15px]"
                >Votre navigateur ne supporte pas la lecture de vidéos.</video>

            </div>

        </>
    )
}

export default Home;