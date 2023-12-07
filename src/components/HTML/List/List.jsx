import React from 'react';
import listItems from '../../Image/HTML/listItem.png';
import unorderedList from '../../Image/HTML/unorderedInput.png';
import orderedList from '../../Image/HTML/orderedList.png';
import unorderedListMarker from '../../Image/HTML/unorderedListMarker.png';
import unorderedListMarkerInput from '../../Image/HTML/unorderedListMarkerInput.png';
import orderedListMarker from '../../Image/HTML/orderedListMarker.png';
import orderedListMarkerInput from '../../Image/HTML/orderedListMarkerInput.png';
import orderedListMarkerOutput from '../../Image/HTML/orderedListMarkerOutput.png';
import discriptionListInput from '../../Image/HTML/discriptionListInput.png';
import discriptionListOutput from '../../Image/HTML/discriptionListOutput.png';
const List = () => {
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <p className='text-3xl mb-5'>HTML List</p>
            </div>
            <div>
                <p>** List tag ব্যবহার করা হয় কোন কিছুর list group আকারে তৈরি করার জন্য ।</p>
            </div>
            <div className='border-5 mt-5 w-[70%]'>
                <p className='p-2 text-2xl'>Ordered and Unordered Example</p>
                <img className='border-3 w-[100%]' src={listItems} alt="" />
            </div>
            <div>
                <p className='mt-5 mb-3 text-2xl'>Unordered HTML List</p>
                <p>** Unordered List tag <span className='text-red-400'>{"<ul>"}</span> দ্বারা শুরু হয় । এবং List Item গুলো শুরু হয় <span className='text-red-400'>{"<li>"}</span> ট্যাগ দিয়ে । আর <span className='text-red-400'>{"<li>"}</span> শুরু হয় কালো বৃত্ত দিয়ে ।</p>
            </div>
            <div className='border-3 mt-5 w-[40%]'>
                <p className='text-2xl mb-4'>Unordered List Input Tag Example</p>
                <img className='border-3 w-[100%] px-28' src={unorderedList} alt="" />
            </div>
            <div>
                <p className='mt-5 mb-3 text-3xl'>Unordered List Item Marker</p>
                <img src={unorderedListMarker} alt="" /><br />
                <img className='border-3' src={unorderedListMarkerInput} alt="" />
                <p className='mt-10 font-mono'>Note:- marker use করার জন্য Unordered List এর সাথে CSS <span className='text-red-400'>{"list-style-type"}</span> property ব্যবহার করতে হবে ।<span className='text-red-400'>{"<ul>"}</span> এর মধ্যে ।</p>
            </div>
            <div>
                <p className='mt-5 mb-3 text-2xl'>Ordered HTML List</p>
                <p>** Ordered List tag <span className='text-red-400'>{"<ol>"}</span> দ্বারা শুরু হয় । এবং List Item গুলো শুরু হয় <span className='text-red-400'>{"<li>"}</span> ট্যাগ দিয়ে । আর <span className='text-red-400'>{"<li>"}</span> তৈরি হয় number দিয়ে ।</p>
            </div>
            <div className='border-3 mt-5 w-[40%]'>
                <p className='text-2xl mb-4'>Ordered List Input Tag Example</p>
                <img className='border-3 w-[100%] px-28' src={orderedList} alt="" />
            </div>
            <div>
                <p className='mt-5 mb-3 text-3xl'>Ordered List Item Marker</p>
                <img src={orderedListMarker} alt="" />
                <p className='mt-5 mb-3'>Ordered List Item Marker Input and Output</p>
                <img className='border-3' src={orderedListMarkerInput} alt="" /><br />
                <img src={orderedListMarkerOutput} alt="" />
                <p className='mt-10 font-mono mb-3'>Note:- marker use করার জন্য Ordered List এর সাথে <span className='text-red-400'>{"type"}</span> attribute ব্যবহার করতে হবে <span className='text-red-400'>{"<ol>"}</span> এর মধ্যে ।</p>
            </div>
            <div>
                <p className='mt-5 text-3xl font-semibold mb-3'>HTML Description Lists</p>
                <p className='mb-5'>Description list তৈরির নিয়ম নিম্নরুপ :-  </p>
                <div className='border-5 w-[40%]'>
                <p className='p-3 text-2xl'>Description List Input </p>
                <img className='border-3 p-3 w-[100%]' src={discriptionListInput} alt="" />
                </div>
                <div className='border-3 mt-5 w-[40%]'>
                <p className='mb-3 text-3xl p-3'>Description List Output </p>
                <img className='border-3 w-[100%] p-5' src={discriptionListOutput} alt="" />
                </div>
            </div>
        </div>
    );
};

export default List;