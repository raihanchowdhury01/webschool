import React from 'react';
import paragraph from '../../Image/HTML/paragraphTag.png';
import pre from '../../Image/HTML/preTag.png';
const Paragraphs = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                {/* p tag practice  */}
                <p className='text-3xl'>This is Paragraph tag</p>
                <img className='my-3 border-3' src={paragraph} alt="" />
                <p>Paragraph tag হচ্ছে block tag.  Paragraph tag ব্যবহার করা হয় কোন টেক্সটকে স্বাভাবিক ও সাধারনভাবে block tag এ দেখানোর জন্য ।</p>
            </div>
            <div>
                {/* pre tag practice  */}
                <p className='mt-10 mb-3 text-3xl'>Pre tag practice</p>
                <p>
                    pre tag ব্যবহার করা হয় কোন লাইন ব্রেক বা অন্যান্য ট্যাগ ছাড়াই টেক্সটের মধ্যে লাইন  ব্রেক বা নির্দিষ্ট পরিমান blank spaces দেওয়ার জন্য ।
                </p>
                <img className='border-5 p-3' src={pre} alt="" />
                
            </div>
        </div>
    );
};

export default Paragraphs;