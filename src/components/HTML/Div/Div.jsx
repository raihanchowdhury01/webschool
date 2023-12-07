import React from 'react';
import divTagInput from '../../Image/HTML/div1stInput.png'
import divTagOutput from '../../Image/HTML/div1stOutput.png'
import div1stBlockInput from '../../Image/HTML/div1stblockInput.png'
import div1stBlockOutput from '../../Image/HTML/div1stblockOutput.png'
import div2ndInput from '../../Image/HTML/div2ndInput.png'
import div2ndOutput from '../../Image/HTML/div.png'
const Div = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p>HTML Div Element </p>
                <p>HTML Div হচ্ছে block level tag. এটি ব্যবহার করা হয় ওয়েবসাইটের প্রতিটি ছোট বড় অংশগুলোকে একটি নির্দিষ্ট নিয়মে পৃথক করার জন্য ।</p>
                <p>উদাহরণ হিসেবে নিচে কিছু div tag এর input output এর ছবি যুক্ত করা হল:- </p>
                <div className='my-10 border-3 p-5'>
                    <p className='text-3xl mb-3 '>Single div Example </p>
                    <div className='w-[100%]'>
                        <div className=' mb-3 border-2 p-3'>
                            <p className='text-2xl '>Div Input </p>
                            <img className='border-3 w-[60%]' src={divTagInput} alt="" />
                        </div>

                        <div className=' mb-3 border-2 p-3 '>
                            <p className='text-2xl'>Div Output </p>
                            <img className='border-3' src={divTagOutput} alt="" />
                        </div>
                    </div>
                </div>
                <div className='my-10 border-3 p-5'>
                    <p className='text-3xl mb-3 '>Div Block Example </p>
                    <div className='w-[100%]'>
                        <div className=' mb-3 border-2 p-3'>
                            <p className='text-2xl '>Div Input </p>
                            <img className='border-3 w-[100%]' src={div1stBlockInput} alt="" />
                        </div>

                        <div className=' mb-3 border-2 p-3 '>
                            <p className='text-2xl'>Div Output </p>
                            <img className='border-3' src={div1stBlockOutput} alt="" />
                        </div>
                    </div>
                </div>
                <div className='my-10 border-3 p-5'>
                    <p className='text-3xl mb-3 '>Multiple Div Block Example </p>
                    <div className='w-[100%]'>
                        <div className=' mb-3 border-2 p-3'>
                            <p className='text-2xl '>Div Input </p>
                            <img className='border-3 w-[100%]' src={div2ndInput} alt="" />
                        </div>

                        <div className=' mb-3 border-2 p-3 '>
                            <p className='text-2xl'>Div Output </p>
                            <img className='border-3' src={div2ndOutput} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <p><span className='font-semibold'>Note:-</span> style attribute গুলোর মধ্যে কিছু CSS Property and value use করা হয়েছে বোঝানোর সুবিধার জন্য আমরা এগুলো সম্পর্কে বিস্তারিত CSS tutorial এ জেনে নিব । </p>
        </div>
    );
};

export default Div;