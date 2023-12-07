import React from 'react';
import blockquote from '../../Image/HTML/blockquote.png';
import quotationInput from '../../Image/HTML/quotationInput.png';
import quotationOUtput from '../../Image/HTML/quotationOutput.png';
import abbarTag from '../../Image/HTML/abbarTag.png';
import address from '../../Image/HTML/address.png';
import bdoTag from '../../Image/HTML/bdoTag.png';
const Quotation = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p>HTML Quotation and Citation Elements </p>
                <div className='mt-10'>
                    <p> এই Topic আমরা যে সকল ট্যাগ সম্পর্কে জানব - </p>
                </div>
                <div className='text-red-400 my-2'>
                    {
                        '<blockquote>, <cite>, <q> , <abbr> , <address> , <bdo>'
                    }
                </div>
                <div className='border-5 p-5'>
                    <span className='text-red-400'>
                        {
                            "<blockquote> "
                        }
                    </span>
                    <span>tag ব্যবহার করা হয় blockquote tag এর মধ্যে থাকা টেক্সটগুলোকে importance দেওয়ার জন্য । </span><br />
                    <img className='border-4 p-3' src={blockquote} alt="" />
                </div>
            </div>
            <div className='mt-20'>
                <span className='text-red-400'>
                    {
                        "<q> "
                    }
                </span>
                <span>
                    tag ব্যবহার করা হয় লিখার মাঝে quotation তৈরির জন্য ।
                </span>
                <div className='border-3 mt-3'>
                    <div>
                        <p className='text-2xl mt-10 mb-2 '><span className='text-red-400'>{"<q>"}</span> tag practice</p>
                        <img className='border-5' src={quotationInput} alt="" />
                    </div>
                    <div className='mt-10'>
                        <p className='text-2xl mt-10'><span className='text-red-400'>{"<q>"}</span> tag output</p>
                        <img className='border-5 mt-2' src={quotationOUtput} alt="" />
                    </div>
                </div>
            </div>
            {/* abbr tag practice  */}
            <div className='mt-10'>
                <span className='text-red-400'>
                    {
                        "<abbr> "
                    }
                </span>
                <span>tag ব্যবহার করা হয় কোন সংক্ষিপ্ত রুপকে সংজ্ঞায়িত করা । অর্থাৎ <span className='text-red-400'>
                    {
                        "<abbr> "
                    }
                </span> tag ব্যবহার করা হয় কোন সংজ্ঞায়িত বাক্যকে সংক্ষিপ্ত রুপের মাধ্যমে প্রকাশ করা । <span className='text-red-400'>
                    {
                        "<abbr> "
                    }
                </span> tag এর মাঝে সংক্ষিপ্ত রুপ লিখতে হয় এবং <span className='text-red-400'>
                    {
                        "<title> "
                    }
                </span> ট্যাগের মাঝে লিখতে হয় ঐ সংক্ষিপ্ত রুপের সংজ্ঞায়িত ।</span>
                <div className='mt-10 text-xl'>
                <span className='text-red-400'>
                    {
                        "<abbr> "
                    }
                </span> tag practice
                </div>
                <div>
                    <img className='border-5 p-3 mt-6' src={abbarTag} alt="" />
                </div>
                <div>
                    <p className='mt-10 mb-2 text-2xl '>Explain </p>
                    <p>WHO টেক্সটে hover করলে World Health Organization text ‍টি show করবে ।</p>
                </div>
            </div>
            <div>
                <div className='mt-20'>
                    <span>
                    <span className='text-red-400'>{"<address>"}</span> tag use করা হয় কোন কিছুর ঠিকানা বোঝানোর জন্য ।
                    </span>
                    <p className='text-2xl mt-3'><span className='text-red-400'>{"<address>"}</span> tag practice</p>
                    <img className='border-5 p-3 mt-6' src={address} alt="" />
                </div>
            </div>
            <div>
                <div className='mt-20'>
                    <span>
                    <span className='text-red-400'>{"<bdo>"}</span> tag use করা হয় কোন শব্দ বা বাক্যকে reverse way - তে উল্টিয়ে লিখার জন্য ।
                    </span>
                    <p className='text-2xl mt-3'><span className='text-red-400'>{"<bdo>"}</span> tag practice</p>
                    <img className='border-5 p-3 mt-6' src={bdoTag} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Quotation;