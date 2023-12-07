import React from 'react';
import image from '../../Image/HTML/image.png';
const Image = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p>Image tag একটি website এর মান বাড়ায় । Image tag একটি website এর সৌন্দর্য বৃদ্ধি করে । <span className='text-red-400'>{"<img>"}</span> ট্যাগটি একটি ওয়েব পেজে একটি ছবি এম্বেড করতে ব্যবহৃত হয় ।</p>

                <p className='mt-5 mb-4'><span className='text-red-400'>{"<img>"}</span> ট্যাগের কোন closing tag নেই । এই ট্যাগে src এবং alt ব্যবহার করা হয়। </p>
                <div className='border-3 p-3'>
                    <p className='text-2xl'>Image Tag Practice</p>
                    <img className='border-3 p-2 mt-3' src={image} alt="" />
                </div>
            </div>
            <div className='mt-5'>
                <p>Note:- <span className='text-red-400'>{'src = "_" '}</span> &nbsp; ট্যাগ ব্যবহার করা হয় image path set করার জন্য আর <span className='text-red-400'>{'alt = "_"'}</span>  ট্যাগ ব্যবহার করা হয় কোন কারনে <span className='text-red-400'>{'src = "_" '}</span> ট্যাগ কাজ না করলে যেন <span className='text-red-400'>{'alt = "_"'}</span> ট্যাগের টেক্সট দেখানো যায় সেই image এর পরিবর্তে । <span className='text-red-400'>{'alt = "_"'}</span> ট্যাগে সবসময় image ট্যাগে image সম্পর্কিত তথ্যই লিখা উচিত যেন কোন কারনে ইউজার ওয়েবসাইটে ছবি দেখতে না পারলেও লিখা দেখে তা অনুমান করতে পারেন ।</p>
            </div>
        </div>
    );
};

export default Image;