'use client'
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How can I pay for my appointment?",
            answer:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
        },
        {
            question: "Is the cost of the appointment covered by private health insurance?",
            answer:
                "You may be eligible for coverage depending on your private health insurance plan. Please contact your provider for more information.",
        },
        {
            question: "Do I need a referral?",
            answer:
                "In most cases, a referral is not necessary, but it can depend on your health insurance requirements.",
        },
        {
            question: "What are your opening hours?",
            answer:
                "We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM.",
        },
        
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900 mt-16">
            <div className="max-w-[1000px] px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
                    Frequently Asked Questions
                </h1>

                <div className="mt-12 w-full space-y-8 border-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                        >
                            <button
                                className="flex items-center justify-between w-full p-8"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h1 className="font-semibold text-gray-700 dark:text-white">
                                    {faq.question}
                                </h1>

                                <span
                                    className={`rounded-full ${openIndex === index
                                            ? "text-gray-400 bg-gray-200"
                                            : "text-white bg-black"
                                        }`}
                                >
                                    {openIndex === index ? (
                                        // Minus icon
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    ) : (
                                        // Plus icon
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {openIndex === index && (
                                <>
                                    <hr className="border-gray-200 dark:border-gray-700" />
                                    <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
