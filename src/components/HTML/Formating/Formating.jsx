import React from 'react';

import strong from '../../Image/HTML/strongTag.png';
import bold from '../../Image/HTML/bTag.png';
import italic from '../../Image/HTML/italicTag.png';
import emphasis from '../../Image/HTML/emphasisTag.png';
import mark from '../../Image/HTML/markTag.png';
import small from '../../Image/HTML/smallTag.png';
import del from '../../Image/HTML/deleteTag.png';
import ins from '../../Image/HTML/insTag.png';
import sub from '../../Image/HTML/subTag.png';
import sup from '../../Image/HTML/supTag.png';


const Formating = () => {
    return (
        <div className='my-10 w-[70%] mx-auto'>

            <div className='border-5 p-5'>
                <p>HTML এ বিভিন্ন ধরনের tag রয়েছে । আর প্রতিটি tag দ্বারা special meaning এর বোঝানোর হয় ।</p>
                <ul className='border-3 p-3'>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<b>"
                            }
                        </span><span>- Bold text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<strong>"
                            }
                        </span><span>- Important text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<i>"
                            }
                        </span><span>- Italic text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<em>"
                            }
                        </span><span>- Emphasized text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<mark>"
                            }
                        </span><span>- Marked text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<Small>"
                            }
                        </span><span>- Smaller text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<del>"
                            }
                        </span><span>- Deleted text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<s>"
                            }
                        </span><span>- Deleted text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<Ins>"
                            }
                        </span><span>- Inserted text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<u>"
                            }
                        </span><span>- Underline text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<sub>"
                            }
                        </span><span>- Subscript text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<sup>"
                            }
                        </span><span>- Superscript text</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<br>"
                            }
                        </span><span>- Break Tag</span>
                    </li>
                    <li>
                        <span className='text-red-500'>
                            {
                                "<hr>"
                            }
                        </span><span>- Empty Tag</span>
                    </li>
                </ul>
            </div>
            <div>
                {/* strong and b tag explain  */}
                <p>
                    <span className='text-red-500'>
                        {
                            "<strong>"
                        }
                    </span><span>এবং</span>
                    <span className='text-red-500'>
                        {
                            "<b>"
                        }
                    </span>
                    <span>Tag এর মধ্যে কোন ভিন্নতা নেই ।  কারন Output হিসেবে দুটি tag এর Output একই । তবে কোডিং এর ক্ষেত্রে এদের ভিন্নতা রয়েছে । </span>
                    <p>কোন text কে importent বোঝানোর জন্য  <span className='text-red-500'>
                        {
                            "<strong> "
                        }
                    </span>tag ব্যবহার করা হয় । </p>
                    আর শুধুমাত্র কোন tag কে bold করার জন্য <span className='text-red-500'>
                        {
                            "<b> "
                        }
                    </span> ব্যবহার করা হয় ।
                </p>
                {/* b and strong tag practice  */}
                <p className='text-xl my-3'>Practice Part:-</p>
                <img src={strong} alt="" />
                <img src={bold} alt="" />
                {/* i and em tag explain  */}
                <p className='my-2'>
                    <span className='text-red-500'>
                        {
                            "<i>"
                        }
                    </span><span>এবং</span>
                    <span className='text-red-500'>
                        {
                            "<em>"
                        }
                    </span>

                    <span>Tag এর মধ্যে কোন ভিন্নতা নেই ।  কারন Output হিসেবে দুটি tag এর Output একই । তবে কোডিং এর ক্ষেত্রে এদের ভিন্নতা রয়েছে । </span>
                    <p>কোন text কে সাধারনভাবে কোন কিছুর নাম বা কোন স্থানের নাম ইত্যাদি বোঝানোর জন্য <span className='text-red-500'>
                        {
                            "<i> "
                        }
                    </span>tag ব্যবহার করা হয় ।
                    </p>আর কোন tag কে importance দিয়ে কোন পাঠক ঐ অংশটুকুকে জোড় দিয়ে উচ্চারণ করে পড়ার জন্য <span className='text-red-500'>
                        {
                            "<em> "
                        }
                    </span> tag ব্যবহার করা হয় ।
                </p>
                <div>
                    {/* b and strong tag practice  */}
                    <p className='text-xl my-3'>Practice Part:-</p>
                    <img src={italic} alt="" />
                    <img src={emphasis} alt="" />
                </div>
                {/* mark tag  */}
                <div>
                    <p className='mt-5 mb-2'>
                        <span className='text-red-500'>
                            {
                                "<mark> "
                            }
                        </span>
                        <span>
                            tag ব্যবহার করা হয় কোন লেখার importance বোঝানোর জন্য।
                        </span>
                    </p>
                    <p className='text-xl my-3'>Practice Part:-</p>
                    <p>
                        <img src={mark} alt="" />
                    </p>
                </div>
                <div>
                    <p className='mt-5 mb-2'>
                        <span className='text-red-500'>
                            {
                                "<small> "
                            }
                        </span>
                        <span>
                            tag ব্যবহার করা হয় কোন লেখকে ছোট দেখানোর জন্য।
                        </span>
                    </p>
                    <p className='text-xl my-3'>Practice Part:-</p>
                    <p>
                        <img src={small} alt="" />
                    </p>
                    {/* delete tag and s tag  */}
                </div>
                <div>
                    <p className='my-5'>
                        <span className='text-red-500'>
                            {
                                "<del>"
                            }
                        </span><span>এবং</span>
                        <span className='text-red-500'>
                            {
                                "<s> "
                            }
                        </span>

                        <span>Tag এর Output হিসেবে দুটি tag এর Output একই । </span>
                    </p>
                    {/* del and s tag practice  */}
                    <div>
                        <p className='text-xl my-3'>Practice Part:-</p>
                        <p>
                            <img src={del} alt="" />
                        </p>
                        <p>
                            <span className='text-red-500'>
                                {
                                    "<del>"
                                }
                            </span>
                            Delete Tag
                            <span className='text-red-500'>
                                {
                                    "</del>"
                                }
                            </span>
                        </p>
                        <p>
                            <span className='text-red-500'>
                                {
                                    "<s>"
                                }
                            </span>
                            s Tag
                            <span className='text-red-500'>
                                {
                                    "</s>"
                                }
                            </span>
                        </p>
                    </div>
                </div>
                {/* ins and u tag practice  */}
                <div>
                    <p className='mt-5'>
                        <span className='text-red-500'>
                            {
                                "<ins>"
                            }
                        </span><span>এবং</span>
                        <span className='text-red-500'>
                            {
                                "<u> "
                            }
                        </span>

                        <span>Tag এর Output হিসেবে দুটি tag এর Output একই । </span>
                    </p>
                </div>
                {/* del and s tag practice  */}
                <div>
                    <p className='text-xl mt-3 border-bottom w-[10%]'>Practice Part:-</p>
                    <p>
                        <span className='text-red-500'>
                            {
                                "<ins>"
                            }
                        </span>
                        Inserted Tag
                        <span className='text-red-500'>
                            {
                                "</ins>"
                            }
                        </span>
                    </p>
                    <p>
                        <span className='text-red-500'>
                            {
                                "<u>"
                            }
                        </span>
                        Underline Tag
                        <span className='text-red-500'>
                            {
                                "</u>"
                            }
                        </span>
                    </p>
                </div>
                {/* sub and sup tag practice  */}
                <div>
                    <p className='mt-5'>
                        <span className='text-red-500'>
                            {
                                "<sub>"
                            }
                        </span><span>এবং</span>
                        <span className='text-red-500'>
                            {
                                "<sup> "
                            }
                        </span>

                        <span>Tag দুটি আলাদা আলাদা কাজে ব্যবহার করা হয় । </span>
                        <p>
                            <span className='text-red-500'>
                                {
                                    "<sub>"
                                }
                            </span> ট্যাগ ব্যবহার করা হয় কোন লেখাকে স্বাভাবিক লাইন থেকে নিচের দিকে দেখানোর জন্য ।
                        </p>
                        <p>
                            <span className='text-red-500'>
                                {
                                    "<sub>"
                                }
                            </span> ট্যাগ ব্যবহার করা হয় কোন লেখাকে স্বাভাবিক লাইন থেকে উপরের দিকে দেখানোর জন্য ।
                        </p>
                    </p>
                    <p className='text-xl mt-3 border-bottom w-[10%]'>Practice Part:-</p>
                    <p>
                        <img src={sub} alt="" />
                    </p>
                    <p>
                        <img src={sup} alt="" />
                    </p>
                    <p>
                    </p>
                </div>
                <div>
                    <p className='mt-10'>
                        <span className='text-red-500'>
                            {
                                "<br>"
                            }
                        </span> Tag ব্যবহার করা হয় কোন Text বা line এ line break দেওয়ার জন্য ।
                    </p>
                </div>
                <div>
                    <p className='mt-10'>
                        <span className='text-red-500'>
                            {
                                "<hr>"
                            }
                        </span> Tag ব্যবহার করা হয় কোন line এ empty line draw করার জন্য ।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Formating;