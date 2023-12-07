import React from 'react';
import blockTag from '../../Image/HTML/blockLavelTag.png';
import inlineTag from '../../Image/HTML/inlineTagList.png';
const BlockandInline = () => {
    return (
        <div className='my-5 w-[70%] mx-auto'>
            <div className='w-[100%] border-3 mb-5'>
                <p className='text-2xl font-semibold p-3'>Here Are The Block-Level Elements In HTML Tag List</p>
                <img className='w-[100%] p-3 border-3' src={blockTag} alt="" />
            </div>
            <div>
                <p><span className='font-bold'>Note:-</span> Block Level tag বা Elements বলতে সেই সকল tag বা elements কে বোঝায় যেগুলো যদি কোন লাইনে ব্যবহার করা হয় তবে সেই পুরো লাইনটাই সেই ট্যাগের জন্য block হয়ে যায় । অর্থাৎ ঐ লাইনে ঐ ট্যাগ ব্যতিত আর কোন ট্যাগ যুক্ত হতে পারবে না, শুধুমাত্র এই ট্যাগগুলো ব্যবহারে । </p>
            </div>
            {/* inline element list  */}
            <div className='w-[100%] border-3 mt-5 mb-5'>
                <p className='text-2xl font-semibold p-3'>Here Are The Inline Elements In HTML Tag List</p>
                <img className='w-[100%] p-3 border-3' src={inlineTag} alt="" />
            </div>
            <div>
                <p><span className='font-bold'>Note:-</span> Inline tag বা Elements বলতে সেই সকল tag বা elements কে বোঝায় যেগুলো যদি কোন লাইনে ব্যবহার করা হয় তবে সেই ট্যাগগুলো ঐ লাইনের ঠিক ততটুকু অংশই block হয়ে যায় যতটুকু অংশ ঐ ট্যাগগুলোর মধ্যে থাকা content নিয়ে থাকে । অর্থাৎ ঐ লাইনে ঐ ট্যাগ ব্যতিত ট্যাগও যুক্ত হতে পারবে, শুধুমাত্র এই ট্যাগগুলো ব্যবহারে ঐ ট্যাগগুলোর মধ্যে থাকা content এর অংশ ব্যাতিত । </p>
            </div>
        </div>
    );
};

export default BlockandInline;