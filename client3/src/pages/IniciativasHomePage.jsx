import React from 'react'

function IniciativasHomePage() {
  return (
    <div className='flex h-[calc(100vh-100px)] grid-cols-12 gap-4 bg-red-500'>
      <div className='bg-amber-200 grid place-content-center col-span-12'>1</div>
      <div className='bg-amber-300 grid place-content-center col-span-12'>2</div>
     


      {/* <div className=' max-w-md w-full p-10  bg-red-200 rounded-md'>
        <h1 className='text-3xl text-center font-bold mb-4'>Iniciativas</h1>
      </div> */}
    </div>
  )
}

export default IniciativasHomePage