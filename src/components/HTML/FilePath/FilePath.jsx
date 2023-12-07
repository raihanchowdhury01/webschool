import React from 'react';
import filePath from '../../Image/HTML/imageFilePath.png';
const FilePath = () => {
    return (
        <div className='w-[70%] mx-auto my-5'>
            <div>
                <p>আমরা পূর্বে image tag এর মধ্যে <span className='text-red-400'>{"src = '_' "}</span> attribute এ url বসিয়ে image tag ব্যবহারের নিয়ম জেনেছিলাম । এবার আমরা জানব file path সম্পর্কে । সেই url  সঠিক নিয়মে ব্যবহার করার নিয়ম শিখব ।</p>
            </div>
            <div>
                <p>আপনি যদি ইন্টারনেট থেকে সরাসরি যেকোন ধরনের লিংক যেমন ছবি , ভিডিও বা ফাইল লিংক ব্যবহার করতে চান তাহলে সেই লিংক নিয়ে <span className='text-red-400'>{"src = '___' "}</span> attribute এর মধ্যে “link" বসিয়ে দিতে হবে । </p>

                <p>
                    অথবা আপনি যদি অফলাইনে আপনার ফাইলে থাকা কোন কিছু ব্যবহার করতে চান তাহলে আপনি যে ফাইল ব্যবহার করছেন সেই ফাইলেই যদি সেই সকল ছবি বা ভিডিও এসব থেকে থাকে তাহলে আপনাকে <span className='text-red-400'>{"src = './' "}</span> attribute এর মধ্যে ./ দিয়ে সেই ফাইল খুজে বসাতে হবে ।
                </p>

                <p>
                    আর যদি সেই ফাইলগুলো Workspace ফাইল ব্যতিত অন্য কোন ফাইলে রাখেন তাহলে সেটাকে দেখানোর উপায় হচ্ছে ./ এর জায়গায় ../../../ এভাবে খুঁজে বের করে বসাতে পারেন ।
                </p>
                <div className='border-3 p-3 my-5'>
                    <p className='text-2xl'>File path Example with image tag</p>
                    <p className='border-3 p-3 my-2'>
                    <img src={filePath} alt="" />
                </p>
                </div>
                <p>
                    <span className='font-semibold text-xl'>Note:- </span> ./ দ্বারা বোঝায় আপনি যেই ফাইলে আছেন সেই ফাইলের লোকেশনকে আর ../ দ্বারা বোঝায় আপনি যেই ফাইলে আছেন সেখান থেকে এক ধাপ উপরে আপনার ফাইল লোকেশনকে ।
                </p>
            </div>
        </div>
    );
};

export default FilePath;