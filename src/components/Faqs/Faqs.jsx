

const Faqs = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 my-16 gap-8">
            <div>
                <section className=" border border-gray-200 p-6 rounded-2xl dark:text-gray-800">
                    <div className="container flex flex-col justify-center bg-base-200 rounded px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mt-4 mb-8 dark:text-gray-600">It is a collection of common questions and answers not specific to a product, feature, or service. They usually cover payment policies, how to contact customer support, and refund policies. How long should FAQ pages be?</p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I rent textbooks online?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes! If your textbook is available as a rental, a price for new rental or used rental will appear on the selection screen. Add the desired item to your cart. You must agree to the rental terms before you can complete your transaction.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">When will my order be ready?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You will know your order is ready for pickup after you receive your second email, showing "Ready for Pickup". Bring your photo ID and web order confirmation number to the pickup counter. Most orders are processed in 24 business hours (Monday-Friday only).
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How will I know my order is ready for pickup?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You will receive a second email when your order is ready. You can also log in to your account from our website to check your order status. When the status says Complete or Shipped, your order is ready at the bookstore.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How will I know my order has been shipped?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">You will receive an email from the Don Bookstore when we have processed your order. You can also check your order status by logging in to your account from our website.
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What if I forget to pick up my books?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">If you do not pick up your web order within 21 days of the order being placed your order will be considered abandoned. The Campus Store will make at least one attempt via email, to contact the customer about picking up their order. Abondoned orders can be refunded by customer request if: the request is made within the first 21 days of class start. After this period, a gift card can be issued for the refund.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
            <section className=" dark:text-gray-800 border border-gray-200 p-6 rounded-2xl">
                <form className="container w-full h-full p-8 mx-auto space-y-6 rounded-md shadow bg-base-200">
                    <h2 className="w-full text-3xl font-bold leading-tight">Ask More Question</h2>
                    <div>
                        <label  className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 bg-white pb-6" />
                    </div>
                    <div>
                        <label className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 pb-6 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                    </div>
                    <div>
                        <label className="block mb-1 ml-1">Question</label>
                        <textarea id="message" type="text" placeholder="Write Your Question..." className="block w-full p-2 pb-24 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25dark:bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring  focus:ring-opacity-50 dark:bg-green-500   dark:text-gray-50">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Faqs;