import React, { useState } from 'react';

function Benefits() {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const benefits = [
        {
            title: 'CONNECTION',
            description: 'IEEE offers outstanding opportunities to connect with over 400,000 professionals, enhancing your career through collaboration and knowledge sharing.'
        },
        {
            title: 'NETWORKING',
            description: 'Participants stay updated with the latest advancements and benefit from numerous career development resources, including webinars, workshops, and conferences.'
        },
        {
            title: 'GROWTH',
            description: 'Whether you are a student or an experienced engineer, IEEE supports your professional growth and connects you with a global community to help achieve your career goals.'
        },
        {
            title: 'EVENTS',
            description: 'These events provide platforms for research presentation, learning, and networking.'
        },
        {
            title: 'LEADERSHIP',
            description: 'Involvement also enhances your professional profile and opens up leadership and volunteering opportunities, allowing you to make a positive impact on society.'
        }
    ];

    

   

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : benefits.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < benefits.length - 1 ? prevIndex + 1 : 0));
        
    };

    return (
        <div className="relative p-4">
            <h1 className='text-center text-3xl mb-4'>
                Benefits of IEEE
                <br />
                <div className="h-1 w-64 md:w-[20%] border bg-black my-1 mx-auto"></div>
            </h1>

            <div className="-z-20 relative overflow-hidden w-full md:w-5/6 rounded-3xl  hover:bg-gray-100 md:left-32 ">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex-none w-full flex flex-col md:flex-col items-center p-6 ">
                            <div className='text-center font-bold flex justify-center items-center px-10 md:px-52'>
                                <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                                    {benefit.title}
                                </h1>
                            </div>
                            <p className='md:text-2xl text-justify p-2 max-w-xl'>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


                <button
                    onClick= {handlePrev}
                    className="-z-20 md:h-28 md:w-10 absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-2 rounded-full bg-gray-300 hover:shadow-lg hover:shadow-gray-900 " 
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="-z-20 md:h-28 md:w-10 absolute top-1/2 right-2 transform -translate-y-1/2 text-black p-2 rounded-full bg-gray-300 hover:shadow-lg hover:shadow-gray-900 "
                >
                    &gt;
                </button>
            </div>
    )
}


export default Benefits;
