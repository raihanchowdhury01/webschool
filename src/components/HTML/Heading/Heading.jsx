import React from 'react';
import './Heading.css';
import headingTag from '../../Image/HTML/heading tag.png';
import headingOutput from '../../Image/HTML/heading tag output.png';


const Heading = () => {
    return (
        <div className='my-10 mx-auto w-[70%]'>
            <div>
                <span className='text-red-500'>
                    {
                        "<h1></h1>"
                    }
                </span>
                <span> HTML heading tag 6 টি আছে । সমস্ত ট্যাগের আকার ভিন্ন ভিন্ন ।  </span> <br />
                <span className='text-red-500'>
                    {
                        "h1 < h2 < h3 < h4 < h5"
                    }
                </span><br />
            </div>
            <div>
                <p className='text-2xl mt-5 mb-3'>h1 tag practice</p>
                <div>
                    <p className="mb-3 mt-5 font-serif text-2xl">h1 to h6 tag input :-</p>
                    <img className='tag border-5 px-20 py-10' src={headingTag} alt="" />
                </div>
                <div>
                    <p className="mb-3 mt-5 font-serif text-2xl">h1 to h6 tag Output :-</p>
                    <img className='border-5 px-20 py-10' src={headingOutput} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Heading;