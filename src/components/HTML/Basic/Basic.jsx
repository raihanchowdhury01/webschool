import React from 'react';
import './Basic.css'; 
import tastingTag from '../../Image/HTML/i1st.png';

const Basic = () => {
    return (
        <div className='my-10 w-[70%] mx-auto'>
            <p className='my-5 text-2xl'> এই Topic এ আমরা দেখব কিছু Basic HTML tag </p>
            <div className='basic mb-3'>
                <span className='text-red-500'>
                    {
                        "<!Doctype html>"
                    }
                </span>
                <span> এই tag টি অবশ্যই HTML এর প্রথমে বসাতে হবে । অর্থাৎ এই ট্যাগ দিয়েই শুরু করতে হবে HTML document file. DOCTYPE html tag case sensitive না হওয়ায় uppercase, lowercase উভয় text use যায় ।  এই ট্যাগ দ্বারা HTML5 কে নির্দেশ করা হয় ।  </span>
            </div>
            <div>
                <p>
                <span className='text-red-500'>
                    {
                        "<h1></h1>"
                    }
                </span>
                    Heading tag এর ৬ টি ট্যাগ আছে ।  Heading tag ব্যবহার করা হয় Website এর কোন বিশেষ text কে highlight করার জন্য ।</p>
            </div>
            <div>
                <div>
                    <h1>HTML <span className='text-red-500'>
                    {
                        "<p></p> "
                    }
                </span>
                ট্যাগ ব্যবহার করা হয় Normal text এর জন্য । নিচে এর উদাহরণ হিসেবে HTML Basic Code দেওয়া হল :-
                </h1>
                    <p>
                        <img src={tastingTag} alt="" />
                    </p><br />
                    <p>
                       ** এই কোডকে সুন্দরভাবে বুঝতে হলে আপনি আপনার Code Editor ব্যবহার করুন এবং এর output দেখুন ।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Basic;