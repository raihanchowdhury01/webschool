import React from 'react';
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import './Home.css';
import banner_img from '../../components/Home/Image/header_image.png';
const Home = () => {
    const [text] = useTypewriter (
        {
            words: ["Hi, I'm MD. Raihan Chowdhury.", "I'm a Developer!"],
            loop: {},
            typeSpeed: 300,
            delaySpeed: 20
        }
    )
    return (
        <div className='w-[100%] bg-gray-100 mb-20'>
            <div>
                <div className=' '>
                    <p className='w-[50%] mx-auto my-5 py-5 text-5xl'>Start Learning With Your Comfortable Language!</p>
                </div>
                <div className="header_section md:items-center w-[90%] ml-[10%]">

                    <div className='w-[60%] mx-auto'>
                    <span className=' w-[70%] mx-auto text-5xl font-bold header_text'>
                        {text}
                    </span>
                    <span className='text-red-950'>
                        <Cursor></Cursor>
                    </span>
                    </div>
                    <div className='ml-10'>
                    <img className='rounded-xl' src={banner_img} alt="" />
                    </div>
                </div>
                
            </div>
            </div>
    );
};

export default Home;