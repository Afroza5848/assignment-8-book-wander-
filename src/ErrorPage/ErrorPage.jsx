import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full md:p-16 p-6 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center md:px-5 mx-auto my-8">
                <div className="md:max-w-md text-center">
                    <h2 className="mb-8 font-extrabold md:text-9xl text-5xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/"><a rel="noopener noreferrer" href="#" className="md:px-8 md:py-3 px-4 py-2 font-semibold rounded bg-green-500 dark:text-white">Back to homepage</a></Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;