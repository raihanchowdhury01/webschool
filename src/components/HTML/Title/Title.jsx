import React from 'react';
import titleInput from '../../Image/HTML/titleInput.png';
import titleOutput from '../../Image/HTML/titleOutput.png';
const Title = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <div className='mt-5 mb-3'>
                <p className='mt-5 mb-3 text-2xl'>HTML Page Title</p>
                <p>প্রতিটা ওয়েব পেজেরই page title থাকা উচিৎ । কেননা সেই page title দ্বারা বোঝা যায় যে কোন page কি related । Browser এর New Tab লিখাটা হচ্ছে Browser Title । নিম্নের picture mark করে দেখানো Title টি হচ্ছে page title । </p>
                </div>
                <div className='border-5 mb-20'>
                    <p className='mt-2 mb-3 p-2 text-2xl'>Title Input Example</p>
                    <img className='border-3 p-3' src={titleInput} alt="" />
                </div>
                <div className='border-5 mb-20'>
                    <p className='mt-2 mb-3 p-2 text-2xl'>Title Input Example</p>
                    <img className='border-3 p-3' src={titleOutput} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Title;