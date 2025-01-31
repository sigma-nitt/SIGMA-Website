// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import './induc.css';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import Image from 'next/image';

// const EventsPage: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const [activeQuestion, setActiveQuestion] = useState(null);
//     const questions = [
//         { id: 1, question: "Pre-requisites for applying for inductions?", answer: "A genuine interest in business, finance, analytics, and related domains" },
//         { id: 2, question: "How will it help us hone our skills?", answer: "Provides exposure to analytics and management, preparing you for real-world challenges" },
//         { id: 3, question: "What is the selection process and criteria ?", answer: "It involves tasks and personal interviews. The structure may vary each year" },
//         { id: 4, question: "Can we join sigma with other tech club?", answer: "You can't join any other business club simultaneously. However, other clubs are allowed but we expect equal commitment to all the clubs you join" },
//         { id: 5, question: "Does joining sigma provide as a path for CAT", answer: "Absolutely! SIGMA enhances your business acumen, a key asset for CAT interviews" },
//         { id: 6, question: "Will Sigma get client projects?", answer: "Yes, we engage with clients throughout the year" },
//         { id: 7, question: "What can I apply for laterals?", answer: "The lateral induction process begins in the 5th semester" }
//     ];

//     const rowsRef = useRef<(HTMLTableRowElement | null)[]>([]);

//     useEffect(() => {
//         const handleIntersection = (entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('row-animated');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1,
//         });

//         rowsRef.current.forEach(row => {
//             if (row) {
//                 observer.observe(row);
//             }
//         });

//         return () => {
//             rowsRef.current.forEach(row => {
//                 if (row) {
//                     observer.unobserve(row);
//                 }
//             });
//             observer.disconnect();
//         };
//     }, []);

//     const toggleFAQ = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleAnswer = (id) => {
//         setActiveQuestion(id === activeQuestion ? null : id);
//     };

//     return (
//         <div className="containerInd">
//             <div className="lg:w-[784px] lg:h-[763px] lg:ml-[-392px] lg:mt-[656px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
//             <div className="lg:w-[264px] lg:h-[663px] lg:ml-[1252px] lg:mt-[1256px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
//             <div className="lg:w-[784px] lg:h-[763px] lg:ml-[24%] lg:mt-[1106px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>

//             <div
//                 className="h-auto p-4 mt-10 md:mt-0"
//                 style={{
//                     background: 'linear-gradient(90deg, #0F1017 0%, #0E113A 100%)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 }}
//                 >
//                 <div className="w-[85%] flex flex-col">
//                     {/* First row of images */}
//                     <div className="flex flex-col md:flex-row justify-between mb-[20px] gap-4 lg:gap-0">
//                         <div className="md:w-1/3 flex items-center justify-center order-2 md:order-1 lg:pr-4">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/dainduc.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                         <div className="md:w-1/3 flex items-center justify-center mt-[-100px] xl:mt-[-15%] order-1 md:order-2 lg:mr-[-40px]">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/weareinducting.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                         <div className="md:w-1/3 flex items-center justify-center order-3 md:order-3">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/csinduc.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                     </div>

//                     {/* Second row of images */}
//                     <div className="flex flex-col md:flex-row  justify-between gap-4 lg:gap-14">
//                         <div className="md:w-1/3 flex items-center justify-center">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/eventsinduc.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                         <div className="md:w-1/3 flex items-center justify-center">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/enigmainduc.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                         <div className="md:w-1/3 flex items-center justify-center">
//                             <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
//                                 src="./images/clientsinduc.png"
//                                 alt="Image"
//                                 width={613}
//                                 height={496}
//                                 unoptimized={true}
//                                 priority={false}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="faq-section mt-[34px] mb-[34px] h-auto pb-10 p-1" style={{ backgroundColor: 'hsla(201, 68%, 5%, 1)' }}>
//                 <div className="faq-header cursor-pointer" onClick={toggleFAQ}>
//                     <h2 className="font-poppins font-normal text-[30px] md:text-[50px] leading-[50px] md:leading-[72px] w-[95%] md:w-[450px] ml-[20px] lg:ml-[376px] mt-[92px] text-left">
//                         FREQUENTLY ASKED 
//                         <span className="textQuestions font-normal"> QUESTIONS</span>
//                     </h2>
//                 </div>
//                 {isOpen && (
//                     <div className="mt-[60px]">
//                         {questions.map((item, index) => (
//                             <div 
//                                 className={`faq-item mb-6 text-center relative ${activeQuestion === item.id ? 'faq-item-expanded' : ''}`} 
//                                 key={item.id} 
//                                 onClick={() => toggleAnswer(item.id)}
//                             >
//                                 <div className="font-poppins text-white mx-auto relative inline-block w-[95%] md:w-[768px] border-[2px] border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center ml-[10px] md:ml-[40px]">
//                                             <span className="font-poppins text-[15px] md:text-[24px] mr-[30px] md:mr-[50px]">{index + 1}</span>
//                                             <span className="text-center text-[15px] md:text-[24px]">{item.question}</span>
//                                         </div>
//                                         <div className="flex items-center justify-center w-[80px] h-[80px] rounded-tr-[8px] rounded-br-[8px] plus-button">
//                                             {activeQuestion === item.id ? (
//                                                 <FaMinus className="text-white w-[22px] h-[22px]" />
//                                             ) : (
//                                                 <FaPlus className="text-white w-[22px] h-[22px]" />
//                                             )}
//                                         </div>
//                                     </div>
//                                     {activeQuestion === item.id && (
//                                         <div className="font-poppins text-[12px] md:text-[20px] p-4">
//                                             {item.answer}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EventsPage;








"use client";
import React, { useEffect, useRef, useState } from 'react';
import './induc.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const EventsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        { id: 1, question: "Pre-requisites for applying for inductions?", answer: "A genuine interest in business, finance, analytics, and related domains" },
        { id: 2, question: "How will it help us hone our skills?", answer: "Provides exposure to analytics and management, preparing you for real-world challenges" },
        { id: 3, question: "What is the selection process and criteria ?", answer: "It involves tasks and personal interviews. The structure may vary each year" },
        { id: 4, question: "Can we join sigma with other tech club?", answer: "You can't join any other business club simultaneously. However, other clubs are allowed but we expect equal commitment to all the clubs you join" },
        { id: 5, question: "Does joining sigma provide as a path for CAT", answer: "Absolutely! SIGMA enhances your business acumen, a key asset for CAT interviews" },
        { id: 6, question: "Will Sigma get client projects?", answer: "Yes, we engage with clients throughout the year" },
        { id: 7, question: "What can I apply for laterals?", answer: "The lateral induction process begins in the 5th semester" }
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
            {/* <div className="lg:w-[784px] lg:h-[763px] lg:ml-[-392px] lg:mt-[656px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
            <div className="lg:w-[264px] lg:h-[663px] lg:ml-[1252px] lg:mt-[1256px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div>
            <div className="lg:w-[784px] lg:h-[763px] lg:ml-[24%] lg:mt-[1106px] absolute opacity-20 bg-[hsla(203,72%,60%,1)] z-0 filter blur-[229.167px]"></div> */}

            <div
                className="h-auto mt-0 md:mt-[7vw] lg:mt-[4vw]"
                style={{
                    background: 'linear-gradient(90deg, #0F1017 0%, #0E113A 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <div className="w-[85vw] md:w-[50vw] lg:w-[90vw] xl:w-[85vw] flex flex-col">
                    {/* First row of images */}
                    <div className="flex flex-col lg:flex-row justify-between gap-[4vw] md:gap-[4vw] lg:gap-[2vw] xl:gap-[2vw]">
                        <div className="lg:w-1/3 xl:w-1/3 flex items-center justify-center order-2 lg:order-1 lg:pr-4">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
                                src="./images/dainduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        {/* <div className="xl:w-1/3 flex items-center justify-center mt-[-100px] xl:mt-[-15%] order-1 md:order-2 lg:mr-[-40px]"> */}
                        <div className="lg:w-1/3 xl:w-1/3 order-1 lg:order-2 flex items-center justify-center mt-[-12vw] md:mt-[-10vw] lg:mt-[-13vw] xl:mt-[-12vw]">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
                                src="./images/weareinducting.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="lg:w-1/3 xl:w-1/3 flex items-center justify-center order-3 lg:order-3 pb-[4vw] md:pb-[4vw] lg:pb-0">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
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
                    <div className="flex flex-col lg:flex-row justify-between gap-[4vw] md:gap-[4vw] lg:gap-[2vw] xl:gap-[2vw]">
                        <div className="lg:w-1/3 xl:w-1/3 flex items-center justify-center">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
                                src="./images/eventsinduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="lg:w-1/3 xl:w-1/3 flex items-center justify-center">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
                                src="./images/enigmainduc.png"
                                alt="Image"
                                width={613}
                                height={496}
                                unoptimized={true}
                                priority={false}
                            />
                        </div>
                        <div className="lg:w-1/3 xl:w-1/3 flex items-center justify-center pb-[4vw] md:pb-[4vw] lg:pb-0">
                            <Image className="w-[95%] md:w-full h-auto pointer-events-none select-none"
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

            <div className="faq-section mt-[34px] mb-[34px] h-auto pb-10 p-1" style={{ backgroundColor: 'hsla(201, 68%, 5%, 1)' }}>
                <div className="faq-header cursor-pointer mt-[7vw] md:mt-[5vw] lg:mt-[5vw] xl:mt-[5vw]" onClick={toggleFAQ}>
                    {/* <h2 className="font-poppins font-normal text-[30px] md:text-[50px] leading-[50px] md:leading-[72px] w-[95%] md:w-[450px] ml-[20px] lg:ml-[376px] mt-[92px] text-left"> */}
                    <div className="font-poppins text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3.2vw] leading-[9vw] md:leading-[8vw] lg:leading-[5vw] xl:leading-[6vw] lg:ml-[19vw] xl:ml-[24.5vw] text-center md:text-center lg:text-left xl:text-left">
                        FREQUENTLY 
                    </div>
                    <div className="lg:ml-[19vw] xl:ml-[24.5vw] text-center md:text-center lg:text-left xl:text-left">
                        <span className="font-poppins text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3.2vw]">ASKED</span>
                        <span className="textQuestions text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3.2vw]"> QUESTIONS</span>
                    </div>
                </div>
                {isOpen && (
                    <div className="mt-[7vw] md:mt-[5vw] lg:mt-[4vw] xl:mt-[4.5vw]">
                        {questions.map((item, index) => (
                            <div  className={`faq-item mb-6 text-center relative ${activeQuestion === item.id ? 'faq-item-expanded' : ''}`} key={item.id} onClick={() => toggleAnswer(item.id)}>
                                {/* <div className="font-poppins text-white mx-auto relative inline-block w-[95%] md:w-[768px] border-[2px] border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]"> */}
                                <div className="font-poppins text-white mx-auto relative inline-block w-[95%] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] border-[2px] border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="font-poppins text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] px-[4vw] md:px-[3vw] lg:px-[3vw] xl:px-[3vw]">{index + 1}</span>
                                            <span className="text-left text-[3vw] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[1.5vw]">{item.question}</span>
                                        </div>
                                        <div className="flex items-center justify-center w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] lg:w-[6vw] lg:h-[6vw] xl:w-[6vw] xl:h-[6vw] rounded-tr-[8px] rounded-br-[8px] plus-button">
                                            {activeQuestion === item.id ? (
                                                <FaMinus className="text-white w-auto h-[3vw] md:h-[2.5vw] lg:h-[2vw] xl:h-[1.5vw]" />
                                            ) : (
                                                <FaPlus className="text-white w-auto h-[3vw] md:h-[2.5vw] lg:h-[2vw] xl:h-[1.5vw]" />
                                            )}
                                        </div>
                                    </div>
                                    {activeQuestion === item.id && (
                                        <div className="font-poppins text-[2.8vw] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[1.3vw] pb-[2vw] md:pb-[1.4vw] lg:pb-[1vw] xl:pb-[1.5vw]">
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
