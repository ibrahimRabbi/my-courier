import React from 'react';
import Calculate from '../calculate/Calculate';
import { Outlet, useLocation } from 'react-router-dom';
import './layout.css'

const StepLayout = () => {
    
    return (
        <main className='layout py-16 relative'>
             <Outlet/>
            <Calculate/>
         </main>
    );
};

export default StepLayout;