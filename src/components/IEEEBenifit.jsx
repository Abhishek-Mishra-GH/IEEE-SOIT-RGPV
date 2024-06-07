import React from 'react'

function Benefits() {
    return (
        <>
            <div className="p-4 flex flex-col gap-6 items-center">
                <h1 className='text-center text-3xl flex flex-col items-center justify-center '>
                    Benefits of IEEE
                    <br />
                    <div className="h-1 w-[95%] border bg-black my-1"></div>
                </h1>
                {/* point 1 */}
                <div className='flex gap-0 flex-col md:flex-row items-center'>
                    <div className='text-center font-bold flex justify-center items-center px-10 md:px-52 '>
                        <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                            CONNECTION
                        </h1>
                    </div>
                    <p className='text-justify p-2 max-w-xl'>
                        IEEE offers outstanding opportunities to connect with over 400,000 professionals, enhancing your career through collaboration and knowledge sharing.
                    </p>
                </div>

                {/* point 2 */}
                <div className='flex gap-0 justify-center flex-col md:flex-row items-center'>
                    <p className='text-justify p-2 max-w-xl hidden md:block'>
                    Participants stay updated with the latest advancements and benefit from numerous career development resources, including webinars, workshops, and conferences.
                    </p>
                    <div className='text-center font-bold flex justify-center items-center px-10 md:px-52 '>
                        <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                            NETWORKING
                        </h1>
                    </div>
                    <p className='text-justify p-2 max-w-xl md:hidden block'>
                    Participants stay updated with the latest advancements and benefit from numerous career development resources, including webinars, workshops, and conferences.
                    </p>
                </div>

                {/* point 3 */}
                <div className='flex gap-0 flex-col md:flex-row items-center'>
                    <div className='text-center font-bold flex justify-center items-center px-10 md:px-52 '>
                        <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                            GROWTH
                        </h1>
                    </div>
                    <p className='text-justify p-2 max-w-xl'>
                        Whether you are a student or an experienced engineer, IEEE supports your
                        professional growth and connects you with a global community to help achieve
                        your career goals.
                    </p>
                </div>

                {/* point 4 */}
                <div className='flex gap-0 justify-center flex-col md:flex-row items-center'>
                    <p className='text-justify p-2 max-w-xl hidden md:block'>
                    These events provide platforms for research presentation, learning, and networking.
                    </p>
                    <div className='text-center font-bold flex justify-center items-center px-10 md:px-52 '>
                        <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                        EVENTS
                        </h1>
                    </div>
                    <p className='text-justify p-2 max-w-xl md:hidden block'>
                    These events provide platforms for research presentation, learning, and networking.
                    </p>
                </div>


                {/* point 5 */}
                <div className='flex gap-0 flex-col md:flex-row items-center'>
                    <div className='text-center font-bold flex justify-center items-center px-10 md:px-52 '>
                        <h1 className='w-64 flex items-center justify-center text-xl border-2 border-black border-dashed font-serif px-3 rounded-2xl md:px-16 py-4'>
                            Leadership
                        </h1>
                    </div>
                    <p className='text-justify p-2 max-w-xl'>
                        Involvement also enhances your professional profile and opens up leadership and volunteering opportunities, allowing you to make a positive impact on society.
                    </p>
                </div>

            </div>
        </>
    )
}
export default Benefits