import React from 'react';
import iframe from '../../Image/HTML/iframeTag.png'
import iframeTag from '../../Image/HTML/iframeTagInput.png'
const Iframes = () => {
    return (
        <div>
            <div className='w-[70%] mx-auto my-5'>
                <p className='text-3xl mb-5' >HTML Iframe</p>
                <div>
                    <p>HTML iframe ব্যবহার করা হয় একই web page এর মধ্যে এক বা একাধিক web page দেখানোর জন্য । HTML <span>{"<iframe> "}</span> tag হচ্ছে inline element tag.</p>
                    <p> tag ব্যবহারের নিয়ম :-  </p>
                    <img src={iframe} alt="" />
                </div>
                <div className='mt-5 border-3 p-3'>
                    <p className='text-2xl mb-3'>iframe tag changeable tag :- </p>
                    <img className='border-3 p-3' src={iframeTag} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Iframes;