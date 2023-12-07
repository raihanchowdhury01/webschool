import React from 'react';
import './Intro.css';
import i1st from '../../../components/Image/HTML/i1st.png';
import history from '../../Image/HTML/htmlHistory.png';

const Intro = () => {
    return (
        <div className='my-20 w-[70%] mx-auto'>
            
            <p>HTML হলো Web page এর জন্য একটি <span className='font-bold text-2xl bg-yellow-400' > Standard Markup Language </span>. HTML হচ্ছে খুব সহজ একটি ভাষা যার মাধ্যমে আপনি খুব সহজেই আপনার নিজেস্ব একটি সাইট বানানোর ক্ষেত্রে ব্যবহার করতে পারেন । এবং এটি শিখে নেওয়ার জন্য একটি সহজ ভাষা। </p>
            <p>HTML এর পূর্ণরূপ হচ্ছে - <mark> Hyper Text Markup Language</mark></p>
            <p>HTML এর মাধ্যমে আপনি খুব সহজেই ব্রাউজারে আপনার ইচ্ছেমতো সাইট তৈরি করার জন্য কাজ করতে পারবেন । </p>
            <div>
                <p>HTML এর একটি Basic Structure আছে । এর একটি নমুনা নিচে দেখানো হয়েছে  Example এ :- </p>
                <p className='text-2xl'>Example: </p>
                <img src={i1st} alt="" />
            </div>
            <div className='tagExplain'>
                <p className='mt-10 mb-3 text-2xl'><mark>Example Explained</mark> :-</p>
                1. <span className='text-red-500'>{
                    "<DOCTYPE html>"
                }</span>
                <span> দ্বারা বোঝানো হয় এটা HTML5 এর Document file</span>
                <br />
                2. <span className='text-red-500'>
                    {
                        "<html>"
                    }
                </span>
                <span> হলো Document file এর মূল উপাদান</span><br />
                3. <span className='text-red-500'>
                    {
                        "<head>"
                    }
                </span>
                <span> এই tag এর মধ্যে আমরা meta tag use করব । meta tag কি? কিভাবে ব্যবহার করা হয় এ সম্পর্কে জানব আমরা নতুন কোন Topic থেকে । </span><br />
                4. <span className='text-red-500'>
                    {
                        "<title>"
                    }
                </span>
                <span> ব্যবহার করা হয় Browser Tab এ Title এর লেখা দেখানোর কাজে। </span> <br />
                5. <span className='text-red-500'>
                    {
                        "<body>"
                    }
                </span>
                <span> tag এর ভিতরে বিভিন্ন ট্যাগ ব্যবহার করে তার আউটপুট ব্রাউজারে দেখানো হয় ।</span> <br />
                6. <span className='text-red-500'>
                    {
                        "h1"
                    }
                </span> <span> এবং </span>
                <span className='text-red-500'>
                    {
                        "p"
                    }
                </span>
                <span> ট্যাগ ব্যবহার করা হয় ব্রাউজারে টেক্সট দেখানোর জন্য ।</span><br />
                <span> *** বি: দ্র: - উপরের সমস্ত ট্যাগের ending ট্যাগ রয়েছে । </span>
                <div>
                    <p className='mt-10 mb-3 text-2xl'><mark>History of HTML</mark></p>
                    <img src={history} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;