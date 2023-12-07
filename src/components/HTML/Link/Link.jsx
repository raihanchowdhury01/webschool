import React from 'react';
import link from '../../Image/HTML/link.png';
import self from '../../Image/HTML/targetSelf.png';
import blank from '../../Image/HTML/targetBlank.png';
import parent from '../../Image/HTML/targetParent.png';
import top from '../../Image/HTML/targetTop.png';
const Link = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p>HTML Links - Hyperlinks</p>
                <p>HTML links হলো hyperlinks । যখন কোন user hyperlink এ ক্লিক করে তখন সে একটি জায়গা বা পেজ থেকে অন্য একটি পেজে বা নতুন কোন জায়গায় যায় । যখন hyperlink এর উপর mouse over করা হয় তখন user এর mouse arrow পরিবর্তন হয়ে ছোট্র হাতে পরিণত হয় । একটি link শুধু text নয়, text ,image যেকোন কিছু হতে পারে । এক কথায় বলা যায় text , image , button যেকোন কিছুই link হতে পারে । </p>
                <p className='text-2xl mt-20 mb-4'>HTML Link Example</p>
                <img className='border-4 p-3 my-10' src={link} alt="" />
            </div>
            <div>
                <p className="font-serif text-2xl mb-3 mt-20">HTML Links With Target Attribute </p>
                <div>
                    <p><span>{"target "}</span> Attribute দ্বারা বোঝানো হয় link টি তে যে পেজ যুক্ত করা আছে সেটি কোথায় open হবে ।  </p>
                    <p className="font-serif text-2xl mb-3 mt-20"><span className='text-red-400'>{'<target = "_"> '}</span> Attribute link list</p>
                    <div className='my-4'>
                        <p><span className='text-red-400'>{"_self "}</span> - কোন link <span className='text-red-400'>{"target = “_self"}”</span> করলে এবং সেই লিংকে ক্লিক করা হলে default page হিসেবে same window/tab open হবে ।</p>
                        <div className='border-3 p-3 mt-3'>
                            <p className='my-2 text-xl'>Self Example </p>
                            <img className='border-3 p-3' src={self} alt="" />
                        </div>
                    </div>
                    <div className='my-4'>
                    <p><span className='text-red-400'>{"__blank "}</span> - কোন link <span className='text-red-400'>{"target = “__blank"}”</span> করলে এবং সেই লিংকে ক্লিক করা হলে ভিন্ন কোন page হিসেবে নতুন window/tab open হবে ।</p>
                    <div className='border-3 p-3 mt-3'>
                        <p className='my-2 text-xl'>Blank Example </p>
                        <img className='border-3 p-3' src={blank} alt="" />
                    </div>
                    </div>
                    <div className='my-4'>
                    <p><span className='text-red-400'>{"_parent "}</span> - parent tag যুক্ত কোন লিংকে ক্লিক করলে ঐ page মূল ফ্রেমে পেজটি open হবে । </p>
                    <div className='border-3 p-3 mt-3'>
                        <p className='my-2 text-xl'>Parent Example </p>
                        <img className='border-3 p-3' src={parent} alt="" />
                    </div>
                    </div>
                    <div className='my-4'>
                    <p><span className='text-red-400'>{"_top "}</span> - top tag যুক্ত কোন লিংকে ক্লিক করলে ঐ page top ফ্রেমে পেজটি open হবে । </p>
                    <div className='border-3 p-3 mt-3'>
                        <p className='my-2 text-xl'>Top Example </p>
                        <img className='border-3 p-3' src={top} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Link;