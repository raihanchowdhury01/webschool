import React from 'react';
import singleLineComment from '../../Image/HTML/commentSingleLine.png';
import multiLineComments from '../../Image/HTML/multiLineComment.png';
const Comments = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
             <div>
                <p>HTML comments tag কখোন browser এ display হয় না । এটি শুধুমাত্র HTML document file এ দেখায় । এটি দ্বারা বোঝানো হয় document file এ কোন tag বা অংশ কি কারনে লিখা হয়েছে । </p>
                <p className='mt-10 mb-2'>Comment tag symbol - </p>
                <span className='text-green-800 font-serif'>{"<!-- comment text -->"}</span>
                <p className='text-xl mt-3'>multi line comment and single line comment are same.</p>
                <p className='mt-10 mb-2 text-2xl'>Single line comment practice</p>
                <img src={singleLineComment} alt="" />
                <p className='mt-10 mb-2 text-2xl'>Multi line comment practice</p>
                <img src={multiLineComments} alt="" />
                
             </div>
        </div>
    );
};

export default Comments;