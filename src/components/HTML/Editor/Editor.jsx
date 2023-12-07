import React from 'react';
import './Editor.css';
const Editor = () => {
    return (
        <div className='my-20 mx-auto w-[50%]'>
            <div>
                <p className='text-3xl'> HTML code editor এর জন্য কয়েকটি Windows Software রয়েছে : </p>
                <ul className='ml-3 text-3xl mb-10 editorItems'>
                    <li>1. Visual Studio Code Editor</li>
                    <li>2. Atom</li>
                    <li>3. Sublime Text</li>
                    <li>4. Notepad</li>
                    <li>5. Notepad++</li>
                </ul>
                আপনি প্রতিটি Editor Software try করে দেখে সিদ্ধান্ত নিতে পারেন যে কোনটি comfortable আপনার জন্য । যেটা আপনার কাছে সহজ মনে হবে সেটাই ব্যবহার করতে পারেন । <br/> <br/>
                তবে suggestion হিসেবে আমরা বলতে পারি আপনি প্রাথমিক অবস্থায় Notepad++ ব্যবহার করতে পারেন । এতে করে যখন কোড টাইপ করে লিখবেন তখন আপনার কোড মনে থাকার পরিমান অধিক বেড়ে যাবে । পরবর্তীতে যখন professional ভাবে কাজ করবেন তখন Visual Studio Code Editor ব্যবহার করতে পারেন।  
            </div>
        </div>
    );
};

export default Editor;