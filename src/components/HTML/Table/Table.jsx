import React from 'react';
import tableInput from '../../Image/HTML/tableInput.png';
import tableOutput from '../../Image/HTML/tableOutput.png';
import tableSimpleInput from '../../Image/HTML/tableInputWithoutBorder.png';
import tableSimpleOutput from '../../Image/HTML/tableOutputWithoutBorder.png';
const Table = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p className='mt-5 mb-3 text-3xl'>HTML Table</p>
                <p>HTML Table ওয়েব ডেভেলপারদের ওয়েবসাইট তৈরির সময় বিভিন্ন ধরনের তথ্য-উপাত্ত সংরক্ষন করে রাখতে সাহায্য করে।</p>
            </div>
            <div>
                <p>HTML Table ট্যাগের তালিকা :- </p>
                <div>
                    <p><span className='text-red-400'>{'<table> '}</span> table tag কোন টেবিল তৈরি করার মূল ট্যাগ । এটি দ্বারা বোঝানো হয় যে এটি একটি table formet যা table তৈরির প্রক্রিয়াকে বোঝানো হয়ে থাকে ।</p>
                    <p><span className='text-red-400'>{'<tr>'}-</span><span className='text-red-400'>{'<tr>'}</span>tag দ্বারা table এর table row কে বোঝানো হয় ।</p>
                    <p><span className='text-red-400'>{'<th>- '}</span><span className='text-red-400'>{'<th>'}</span>tag দ্বারা table এর table header কে বোঝানো হয় ।</p>
                    <p><span className='text-red-400'>{'<td> - '}</span><span className='text-red-400'>{'<td> - '}</span>tag দ্বারা table এর table data কে বোঝানো হয় ।</p>
                </div>
            </div>
            <div className='border-5 w-[30%] mt-5'>
                <p className=' mb-3 text-2xl'>Table Input Example</p>
                <img className='border-3 p-3' src={tableInput} alt="" />
            </div>
            <p>Note: - <span className='text-red-400'>{"border-'1'"}</span> দেওয়ার কারন টেবিলে border যুক্ত করা ।</p>
            <div className='border-5 w-[30%] mt-5'>
                <p className=' mb-3 text-2xl'>Table Output Example</p>
                <img className='border-3 p-3' src={tableOutput} alt="" />
            </div>
            <div className='mt-10'>
                <p> এবার দেখব টেবিলে border ট্যাগ যুক্ত না করা হলে কেমন দেখাত  </p>
            </div>
            <div className='mt-10 border-3 w-[25%] p-3'>
                <p className=''>Table Input Without Border</p>
                <img className='border-3 p-4 mt-3' src={tableSimpleInput} alt="" />
            </div>
            <div className='mt-10 border-3 w-[25%] p-3'>
                <p className=''>Table Input Without Border</p>
                <img className='border-3 p-4 mt-3' src={tableSimpleOutput} alt="" />
            </div>
        </div>
    );
};

export default Table;