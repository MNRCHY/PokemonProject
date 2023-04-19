import React from 'react'
import pokeSample from '../assets/poke-sample.webp'

function PokeDetails() {
  return (
    <div className='bg-Main p-10'>
        <div className='bg-white rounded-sm p-5 flex gap-5'>
            <div className='bg-blue-500 rounded-sm p-2'>
                <img className='h-96 w-auto' src={pokeSample} />
            </div>
            <div className='py-1'>
                <h1 className='text-Dark text-2xl mb-10'>
                    Pokemon Name
                </h1>
                <p className='text-Dark text-start'>
                    Effect:
                </p>
                <p className='text-Dark text-start'>
                    hehehe
                </p>
            </div>
        </div>
    </div>
  )
}

export default PokeDetails
