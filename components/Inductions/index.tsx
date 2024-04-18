"use client";
import React, { useEffect, useRef, useState } from 'react';
import './induc.css';

const EventsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        { id: 1, question: "Pre-requisites for applying for inductions?", answer: "Nothing" },
        { id: 2, question: "Question 2?", answer: "Answer to question 2." },
    ];

    const rowsRef = useRef<(HTMLTableRowElement | null)[]>([]);

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('row-animated');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        rowsRef.current.forEach(row => {
            if (row) {
                observer.observe(row);
            }
        });

        return () => {
            rowsRef.current.forEach(row => {
                if (row) {
                    observer.unobserve(row);
                }
            });
            observer.disconnect();
        };
    }, []);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    const toggleAnswer = (id) => {
        setActiveQuestion(id === activeQuestion ? null : id);
    };

    return (
        <div className="mt-10 relative">
            <div className="relative">
                <img src="/images/inductionsbg.png" className="w-full" style={{ height: '50vh' }} alt="Background" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="sigma text-5xl text-center mb-4 md:text-8xl">
                        Inductions
                    </h1>
                    <p className="text-lg text-center mt-5 md:text-2xl">
                        We will open our inductions soon
                    </p>
                </div>
            </div>

            <div className="p-2 w-9/10 m-auto md:pb-0 md:pl-20 md:pr-20 md:pt-10 mx-auto">
                <div className="table-div">
                    <table className="table-fixed text-left border-collapse custom-table-width">
                        <tbody>
                            <tr ref={(el) => (rowsRef.current[0] = el)} style={{ width: '20%', height: '300px', border: '1px solid white' }}>
                                <td className="cell2">
                                    <div className="flex justify-center">
                                        <img src="/images/inductionspic.png" className="imageicon w-60 h-40" alt="Background" />
                                    </div>
                                </td>
                                <td className="cell" style={{ width: '70%', height: '300px', border: '1px solid white' }}>
                                    <h1 className="p-2 pl-2 font-bold text-2xl md:text-3xl md:p-5 md:pl-15 md:font-bold">When is the inductions?</h1>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">We offer a wide range of services and activities to our members, including publishing articles on medium, social media posts about business topics, case studies, and projects involving data analytics and machine learning. We also organize workshops, podcasts, events, and competitions for the college students of NIT Trichy. Our main focus is to showcase our projects, member details, and other initiatives in a professional manner. We are open to exploring different templates offered by Wix for our website design.</p>
                                </td>
                            </tr>
                            <tr ref={(el) => (rowsRef.current[1] = el)} style={{ width: '20%', height: '300px', border: '1px solid white' }}>
                                <td className="cell2">
                                    <div className="flex justify-center">
                                        <img src="/images/dspic.png" className="imageicon w-30 h-30" alt="Background" />
                                    </div>
                                </td>
                                <td className="cell" style={{ width: '70%', height: '300px', border: '1px solid white' }}>
                                    <h1 className="p-2 pl-2 font-bold text-2xl md:text-3xl md:p-5 md:pl-15 md:font-bold">Data Science and Analytics</h1>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">We provide data science and analytics services to help businesses gain insights from their data. Our team of experts uses the latest tools and technologies to provide accurate and timely analysis.</p>
                                </td>
                            </tr>
                            <tr ref={(el) => (rowsRef.current[2] = el)} style={{ width: '20%', height: '300px', border: '1px solid white' }}>
                                <td className="cell2">
                                    <div className="flex justify-center">
                                        <img src="/images/cspic.png" className="imageicon w-30 h-30" alt="Background" />
                                    </div>
                                </td>
                                <td className="cell" style={{ width: '70%', height: '300px', border: '1px solid white' }}>
                                    <h1 className="p-2 pl-2 font-bold text-2xl md:text-3xl md:p-5 md:pl-15 md:font-bold">Case Studies</h1>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">We specialize in developing versatile applications that meet the unique needs of our clients. Our team of developers works closely with clients to understand their requirements and provide customized solutions.</p>
                                </td>
                            </tr>

                            <tr ref={(el) => (rowsRef.current[3] = el)} style={{ width: '20%', height: '300px', border: '1px solid white' }}>
                                <td className="cell2">
                                    <div className="flex justify-center relative" style={{ height: '300px' }}>
                                        <img src="/images/ourstory.png" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
                                        <div className="flex justify-center items-center h-full relative z-10">
                                            <div className="text-center">
                                                <h1 className="sigma text-2xl mb-4 font-bold md:text-4xl">
                                                    Why choose SIGMA ?
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cell" style={{ width: '70%', height: '300px', border: '1px solid white' }}>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">At SIGMA, we are committed to providing our members with the best possible experience. We work closely with our clients to understand their needs and provide customized solutions that meet their unique requirements.</p>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">Our team of 40+ is dedicated to providing high-quality services and ensuring customer satisfaction. We are always looking for ways to improve our services and enhance the value we provide to our members.</p>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <div className="p-2 w-9/10 m-auto md:pb-20 md:pl-20 md:pr-20 pt-0 mx-auto">
                <div className="table-div">
                    <table className="table-fixed text-left border-collapse custom-table-width">
                        <tbody>
                            <tr ref={(el) => (rowsRef.current[3] = el)} style={{ width: '35%', border: '1px solid white' }}>
                                <td className="cell2" style={{ height: '300px' }}>
                                    <div className="flex justify-center relative" style={{ height: '300px' }}>
                                        <img src="/images/ourstory.png" className="background-image h-full absolute inset-0 z-0 object-cover" alt="Background" />
                                        <div className="flex justify-center items-center h-full relative z-10">
                                            <div className="text-center">
                                                <h1 className="sigma text-2xl mb-4 font-bold md:text-4xl">
                                                    Why choose SIGMA ?
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cell1" style={{ width: '60%', height: '300px', border: '1px solid white' }}>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">At SIGMA, we are committed to providing our members with the best possible experience. We work closely with our clients to understand their needs and provide customized solutions that meet their unique requirements.</p>
                                    <p className="pl-2 pr-2 text-sm text-muted-foreground md:text-lg md:pr-45 md:pl-15 md:pb-5">Our team of 40+ is dedicated to providing high-quality services and ensuring customer satisfaction. We are always looking for ways to improve our services and enhance the value we provide to our members.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}

            <div className="faq-section mt-40 mb-15">
                <div className="faq-header cursor-pointer" onClick={toggleFAQ}>
                    <h2 className="font-bold text-3xl flex justify-center md:font-bold lg:text-5xl md:flex justify-center">
                        Frequently Asked Questions
                        <span className={`ml-2 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </h2>
                </div>
                {isOpen && (
                    <div className="faq-list mt-10">
                        {questions.map((item, index) => (
                            <div className="faq-item mb-10 text-center relative" key={item.id} onClick={() => toggleAnswer(item.id)}>
                                <div className="question-box bg-black text-white p-7 mx-auto relative inline-block">
                                    <h3 className="inline-block">{item.question}</h3>
                                    <span className={`arrow ml-2 absolute right-20 top-1/2 transform -translate-y-1/2 ${activeQuestion === item.id ? 'rotate-180' : ''}`}>▼</span>
                                </div>
                                {activeQuestion === item.id && (
                                    <div className="answer-box bg-white text-black p-4 mx-auto mt-2">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
