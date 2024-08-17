// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import './induc.css';
// import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing the plus icon from Font Awesome

// const EventsPage: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const [activeQuestion, setActiveQuestion] = useState(null);
//     const questions = [
//         { id: 1, question: "Pre-requisites for applying for inductions?", answer: "Nothing" },
//         { id: 2, question: "Question 2?", answer: "Answer to question 2." },
//         { id: 3, question: "Question 2?", answer: "Answer to question 2." },
//         { id: 4, question: "Question 2?", answer: "Answer to question 2." },
//         { id: 5, question: "Question 2?", answer: "Answer to question 2." },
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
//         <div className="relative">
//             <div
//                 className="h-[897px] mt-[100px]"
//                 style={{ background: 'linear-gradient(90deg, #0F1017 0%, #0E113A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//             >
//                 <div
//                     className="w-[85%] h-[570px] mt-[20px]"
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(3, 1fr)',
//                         gridTemplateRows: 'repeat(2, auto)',
//                         gap: '20px',
//                     }}
//                 >
//                     <div className="flex items-center justify-center">
//                         <img src="./images/bkg.jpg" alt="Image 1" className="w-full h-auto" />
//                     </div>
//                     <div className="flex items-center justify-center" style={{ transform: 'translateY(-120px)' }}>
//                         <img src="./images/bkg.jpg" alt="Image 2" className="w-full h-auto" />
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <img src="./images/bkg.jpg" alt="Image 3" className="w-full h-auto" />
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <img src="./images/bkg.jpg" alt="Image 4" className="w-full h-auto" />
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <img src="./images/bkg.jpg" alt="Image 5" className="w-full h-auto" />
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <img src="./images/bkg.jpg" alt="Image 6" className="w-full h-auto" />
//                     </div>
//                 </div>
//             </div>

//             <div className="faq-section mt-[34px] mb-[34px] h-auto pb-10 p-1" style={{ backgroundColor: 'hsla(201, 68%, 5%, 1)' }}>
//                 <div className="faq-header cursor-pointer" onClick={toggleFAQ}>
//                     <h2 className="font-poppins font-normal text-[50px] leading-[72px] w-[450px] ml-[376px] mt-[92px] text-left">
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
//                                 <div className={`font-poppins text-white mx-auto relative inline-block w-[768px] border-2 border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]`}>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center ml-[40px]">
//                                             <span className="font-poppins text-[24px] mr-[50px]">{index + 1}</span>
//                                             <span className="text-center text-[24px]">{item.question}</span>
//                                         </div>
//                                         <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[8px] plus-button">
//                                             {/* <FaPlus className="text-white w-[22px] h-[22px]" /> */}
//                                             {activeQuestion === item.id ? (
//                                                 <FaMinus className="text-white w-[22px] h-[22px]" />
//                                             ) : (
//                                                 <FaPlus className="text-white w-[22px] h-[22px]" />
//                                             )}
//                                         </div>
//                                     </div>
//                                     {activeQuestion === item.id && (
//                                         <div className="font-poppins text-[20px] p-4">
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
        <div className="container">
            <div
                className="h-[2000px] md:h-[697px]"
                style={{ background: 'linear-gradient(90deg, #0F1017 0%, #0E113A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <div
                    className="w-[85%] h-[570px]"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: 'repeat(2, auto)',
                        gap: '10px 40px',
                    }}
                >
                    <div className="flex items-center justify-center">
                        <img src="./images/image.png" alt="Image 1" className="w-full h-auto" />
                    </div>
                    <div 
                        className="flex items-center justify-center" 
                        style={{ 
                            transform: 'translateY(-105px)',
                            width: '434px',
                            height: '266px',
                            background: 'rgba(255, 255, 255, 0.05)',  // Updated background to match provided CSS
                            boxShadow: '46px 46px 40px rgba(0, 0, 0, 0.25)',  // Updated boxShadow to match provided CSS
                            backdropFilter: 'blur(25px)',  // Updated backdrop-filter to backdropFilter
                            border: '3px solid',
                            // borderImageSource: 'linear-gradient(113.96deg, rgba(255, 231, 231, 0.46) -4.81%, rgba(255, 255, 255, 0.47) 2.49%, rgba(0, 0, 0, 0) 19.15%, rgba(255, 255, 255, 0.3) 53%, rgba(115, 129, 255, 0.45) 76.47%, rgba(0, 7, 73, 0.31) 95.19%)',
                            borderRadius: '40px',  // Updated borderRadius to match provided CSS
                            boxSizing: 'border-box',
                        }}
                    >
                        <div className="text-center font-poppins text-[40px] text-white">
                            <div className="leading-[63px]">We</div>
                            <div className="leading-[63px]">Are</div>
                            <div className="leading-[63px]">
                                <span className="gradient-textABTUS">Inducting</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./images/image.png" alt="Image 3" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./images/image.png" alt="Image 4" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./images/image.png" alt="Image 5" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="./images/image.png" alt="Image 6" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="faq-section mt-[34px] mb-[34px] h-auto pb-10 p-1" style={{ backgroundColor: 'hsla(201, 68%, 5%, 1)' }}>
                <div className="faq-header cursor-pointer" onClick={toggleFAQ}>
                    <h2 className="font-poppins font-normal text-[35px] md:text-[50px] leading-[50px] md:leading-[72px] w-full md:w-[450px] ml-[30px] md:ml-[376px] mt-[92px] text-left">
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
                                <div className={`font-poppins text-white mx-auto relative inline-block w-[95%] md:w-[768px] border-2 border-[hsla(200, 33%, 12%, 1)] h-auto flex flex-col transition-all duration-300 rounded-[8px]`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center ml-[10px] md:ml-[40px]">
                                            <span className="font-poppins text-[15px] md:text-[24px] mr-[30px] md:mr-[50px]">{index + 1}</span>
                                            <span className="text-center text-[15px] md:text-[24px]">{item.question}</span>
                                        </div>
                                        <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[8px] plus-button">
                                            {/* <FaPlus className="text-white w-[22px] h-[22px]" /> */}
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
