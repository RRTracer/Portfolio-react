const Who = () => {
    return (
        <div className="w-full h-full mbr-section-full">
            <h1 className="flex justify-center mt-20 items-center  text-4xl font-bold dark:text-white">Who am I ?</h1>
            <div className="flex flex-row justify-center items-center p-4 gap-4   w-full">
                <img className="rounded-l-4xl w-2/6 h-2/6" src="Img/who.png" alt="image Code JS"/>
                <p className="text-2xl p-4 dark:text-white">
                    <span className="font-bold text-3xl text-red-600">
                        Hello I&apos;m RRTracer,<br/>
                    </span>
                    A 20 years old junior font-end web developer.
                    <br/>
                    I&apos;m currently learning React.js and TailwindCss. <br/>
                    I learn new things everyday. <br/>
                    I&apos;m looking for a job as a front-end developer. <br/>
                    I have learn all in autodidact mode without any teacher and any formation.
                </p>
            </div>
        </div>
    );
}
export default Who;