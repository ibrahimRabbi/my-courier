import React, { useState, useEffect } from 'react';
import { BsArrowLeftRight } from "react-icons/bs";
import useCalculateHooks from '../coustomHooks/CalculateHooks';

const Calculate = () => {
 
    const { data, refetch } = useCalculateHooks()

     const distance = data?.distance ||  0
     const weight = data?.weight || 0
    let subTotal = 0;

    if (distance > 30) {
        const vag = distance - 30
        const remainingKmPrice = vag * 0.5
        subTotal = remainingKmPrice + 50
    }

    if (distance <= 30) {
        subTotal = 50
    }

    if (weight > 1) {
        subTotal = subTotal + 20
    }


    return (
        <div className='bg-sky-300 p-5'>
            <div className='flex justify-between items-center mt-2 text-gray-600 font-semibold w-[90%] text-xl mx-auto'>
                <p>FROM: Dhaka</p>
                <BsArrowLeftRight />
                <p>TO: {data.districtName}</p>
            </div>
            <div>
                {
                    data.item ? <p className='mt-4 text-gray-700 font-semibold'>{`Item Type: ${data.item}`}</p> : ''
                }
                {
                    data.weight ? <p className='mt-1 text-gray-700 font-semibold'>{`weight: ${data.weight}kg`}</p> : ''
                }

                {
                    data.quantity ? <p className='mt-1 text-gray-700 font-semibold'>{`Item quantity: ${data.quantity}`}</p> : ''
                }
            </div>
            <div className='mt-11'>
                <hr className='border-2 border-blue-600 ' />
                <h1 className='text-2xl font-semibold mt-2'>Sub Total : {subTotal}</h1>
            </div>
        </div>
    );
};

export default Calculate;