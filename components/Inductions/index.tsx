"use client";
import React, { useEffect, useRef, useState } from 'react';
import './induc.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const EventsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        { id: 1, question: "Pre-requisites for applying for inductions?", answer: "Nothing" },
        { id: 2, question: "Question 2?", answer: "Answer to question 2." },
        { id: 3, question: "Question 2?", answer: "Answer to question 2." },
        { id: 4, question: "Question 2?", answer: "Answer to question 2." },
        { id: 5, question: "Question 2?", answer: "Answer to question 2." },
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
        <div className="containerInd">
            <div className="lg:w-[784px] lg:h-[763px] lg:ml-[-392px] lg:mt-[656px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
            <div className="lg:w-[264px] lg:h-[663px] lg:ml-[1252px] lg:mt-[1256px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
            <div className="lg:w-[784px] lg:h-[763px] lg:ml-[24%] lg:mt-[1106px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>

            <div
                className="h-auto p-4"
                style={{
                    background: 'linear-gradient(90deg, #0F1017 0%, #0E113A 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <div className="w-[85%] flex flex-col">
                    {/* First row of images */}
                    <div className="flex flex-col md:flex-row justify-between mb-[20px] gap-4 lg:gap-0">
                        <div className="md:w-1/3 flex items-center justify-center order-2 md:order-1 lg:pr-4">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/dainduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center mt-[-100px] xl:mt-[-15%] order-1 md:order-2 lg:mr-[-40px]">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/weareinducting.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center order-3 md:order-3">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/csinduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                    </div>

                    {/* Second row of images */}
                    <div className="flex flex-col md:flex-row  justify-between gap-4 lg:gap-14">
                        <div className="md:w-1/3 flex items-center justify-center">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/eventsinduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/enigmainduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center">
                            <Image className="w-[95%] md:w-full h-auto"
                                src="./images/clientsinduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-section mt-[34px] mb-[34px] h-auto pb-10 p-1 " style={{ backgroundColor: 'hsla(201, 68%, 5%, 1)' }}>
                <div className="faq-header cursor-pointer" onClick={toggleFAQ}>
                    <h2 className="font-poppins font-normal text-[30px] md:text-[50px] leading-[50px] md:leading-[72px] w-full md:w-[450px] ml-[20px] lg:ml-[376px] mt-[92px] text-left">
                        FREQUENTLY ASKED 
                        <span className="textQuestions font-normal"> QUESTIONS</span>
                    </h2>
                </div>
                {isOpen && (
                    <div className="mt-[60px]">
                        {questions.map((item, index) => (
                            <div 
                                className={`faq-item mb-6 text-center relative ${activeQuestion === item.id ? 'faq-item-expanded' : ''}`} 
                                key={item.id} 
                                onClick={() => toggleAnswer(item.id)}
                            >
                                <div className="font-poppins text-white mx-auto relative inline-block w-[95%] md:w-[768px] border-[2px] border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center ml-[10px] md:ml-[40px]">
                                            <span className="font-poppins text-[15px] md:text-[24px] mr-[30px] md:mr-[50px]">{index + 1}</span>
                                            <span className="text-center text-[15px] md:text-[24px]">{item.question}</span>
                                        </div>
                                        <div className="flex items-center justify-center w-[80px] h-[80px] rounded-tr-[8px] rounded-br-[8px] plus-button">
                                            {activeQuestion === item.id ? (
                                                <FaMinus className="text-white w-[22px] h-[22px]" />
                                            ) : (
                                                <FaPlus className="text-white w-[22px] h-[22px]" />
                                            )}
                                        </div>
                                    </div>
                                    {activeQuestion === item.id && (
                                        <div className="font-poppins text-[20px] p-4">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
