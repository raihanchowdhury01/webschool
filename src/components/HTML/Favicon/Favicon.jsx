import React from 'react';
import favicon from '../../Image/HTML/faviconCode.png';
import faviconOutput from '../../Image/HTML/fabicon.png'
const Favicon = () => {
    return (
        <div className=' my-10 w-[70%] mx-auto'>
            <div>
                <p className='my-5 text-3xl'>Favicon In HTML</p>
            </div>
            <div>
                <p>Favicon ব্যবহার করা হয় browser এর tab bar এ icon হিসাবে সেটি show করার জন্য । </p>
            </div>
            <div>
                <p className='mt-5 text-2xl mb-3'>Favicon Input Example </p>
                <img className='border-3 p-3' src={favicon} alt="" />
            </div>
            <div>
                <p className='mt-5 text-2xl mb-3'>Favicon Output Example </p>
                <img className='border-4 p-5' src={faviconOutput} alt="" />
            </div>
            <div>
                <p className='mt-5'> Note:- &nbsp; <span className='text-red-400'>{'<link rel = "rel" type="image/x-icon href="./images/favicon.ico" '}</span>&nbsp;&nbsp; এর href এ image path ব্যবহার করতে হবে । যে image favicon হিসাবে ব্যবহার করবেন সেই image path দিবেন । </p>
            </div>
        </div>
    );
};

export default Favicon;