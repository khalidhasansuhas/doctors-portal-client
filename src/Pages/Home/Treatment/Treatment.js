import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className='md:px-52'>
            <div className="card md:card-side w-100 ">
                <div className='md:w-1/2'>
                <figure><img src={treatment} alt="Movie" className='rounded-lg'  /></figure>
                </div>
                <div className="card-body md:w-1/2">
                    <h2 className="card-title text-3xl pb-3">Exceptional Dental Care, on Your Terms</h2>
                    <p>Click the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix applick the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;