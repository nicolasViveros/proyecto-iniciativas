import React from 'react'

function IniciativasHomePage() {
    return (
        <div className=' h-[calc(100vh-100px)] bg-red-500'>
            <div className=' bg-amber-200 grid grid-cols-12 gap-4'>
                <div className='col-span-5  bg-blue-300'>text</div>
                <div className='col-span-7  bg-blue-500'>img</div>             
            </div>


            <div className='bg-amber-300 grid place-content-center '>
                2
            </div>



            {/* <div className=' max-w-md w-full p-10  bg-red-200 rounded-md'>
        <h1 className='text-3xl text-center font-bold mb-4'>Iniciativas</h1>
      </div> */}
        </div>
    )
}

export default IniciativasHomePage