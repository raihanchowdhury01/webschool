import React from 'react';
import css from '../../Image/HTML/class.png'
import id from '../../Image/HTML/id.png'
const Class = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p className='text-3xl mb-5'>HTML Class & Id Attribute </p>
                <p className=''>HTML element এ <span className='text-red-400'>{"class "}</span> এবং <span>{"id "}</span>attribute ব্যবহার করা হয় HTML element নির্দিষ্টভাবে ধরে সেগুলো দিয়ে বিভিন্ন ধরনের কাজ করানোর জন্য।
                <span className='text-red-400'>{" class "}</span> এবং <span>{"id "}</span>attribute এর কাজ একই হলেও ব্যবহারের উদ্দেশ্য কিছুটা ভিন্ন রয়েছে । </p>
                <p> Class Attribute ব্যবহার করার উদ্দেশ্য হচ্ছে এটি দ্বারা ঐ element স্বাভাবিকভাবে দেখানো আর id element ব্যবহার করার উদ্দেশ্য হচ্ছে এটি দ্বারা ঐ element কে special ভাবে দেখানো যার অর্থ বিশেষ কাজে এটিকে ব্যবহার করানো । <br/>
                class select করা হয় (.) দিয়ে । আর id select করা হয় (#) দিয়ে । <br /><br />
                উদাহরণ হিসেবে নিচে কিছু Class Attribute এর ছবি যুক্ত করা হল :- </p>
                {/* image section  */}
                  <div className='mt-5 mb-5 border-3 p-3'>
                    <p className='text-2xl mb-3'>Class attribute symbol</p>
                    <img className='border-3' src={css} alt="" />
                  </div>
                  <div className='mt-5 mb-5 border-3 p-3'>
                    <p className='text-2xl mb-3'>Id attribute symbol</p>
                    <img className='border-3' src={id} alt="" />
                  </div>
                  <div>
                    <p><span className='font-semibold'>Note:-</span> একই Class Name একাধিক জায়গায় বা element ব্যবহার করা যায় । কিন্তু একই Id Name একাধিক জায়গায় বা element এ ব্যবহার করা যায় না ।</p>
                  </div>
            </div>
        </div>
    );
};

export default Class;