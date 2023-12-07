import React from 'react';
import { Link } from 'react-router-dom';
import './HTML.css';

const HTML = () => {
    return (
        <div className='w-[40%] mx-auto mt-5'>
            <ul className='htmlPart'>
                <li>
                    <Link to={'/intro'} target='_blank'>HTML Introduction</Link>
                </li>
                <li>
                    <Link to={'/editor'} target='_blank'>HTML Editors</Link>
                </li>
                <li>
                    <Link to={'/basic'} target='_blank'>HTML Start From Basic</Link>
                </li>
                <li>
                    <Link to={'/heading'} target='_blank'>HTML Heading</Link>
                </li>
                <li>
                    <Link to={'/paragraph'} target='_blank'>HTML Paragraphs</Link>
                </li>
                <li>
                    <Link to={'/formating'} target='_blank'>HTML Formating</Link>
                </li>
                <li>
                    <Link to={'/quotation'} target='_blank'>HTML Quotation</Link>
                </li>
                <li>
                    <Link to={'/comment'} target='_blank'>HTML Comments</Link>
                </li>
                <li>
                    <Link to={'/link'} target='_blank'>HTML Links</Link>
                </li>
                <li className='image'>
                    <Link to={'/image'} target='_blank'>HTML Image</Link>
                    {/* When I'll create this site with video tutorial, I'll make video on this comment tag and uncomment this comment tags.  */}
                    {/* <ul className='subText'>
                        <li>
                            <Link to={'/image'} target='_blank'>Image</Link>
                        </li>
                        <li>
                            <Link to={'/imageMap'} target='_blank'>Image Map</Link>
                        </li>
                        <li>
                            <Link to={'/backgroundImage'} target='_blank'>Background Image</Link>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <Link to={'/favicon'} target='_blank'>HTML Favicon</Link>
                </li>
                <li>
                    <Link to={'/title'} target='_blank'>HTML Title</Link>
                </li>
                <li>
                    <Link to={'/table'} target='_blank'>HTML Table</Link>
                </li>
                <li>
                    <Link to={'/list'} target='_blank'>HTML List</Link>
                </li>
                <li>
                    <Link to={'/blocktag'} target='_blank'>HTML Block & Inline</Link>
                </li>
                <li>
                    <Link to={'/div'} target='_blank'>HTML Div</Link>
                </li>
                <li>
                    <Link to={'/class'} target='_blank'>HTML Class & Id</Link>
                </li>
                <li>
                    <Link to={'/iframe'} target='_blank'>HTML Iframe</Link>
                </li>
                <li>
                    <Link to={'/filepath'} target='_blank'>HTML File Path</Link>
                </li>
            </ul>
        </div>
    );
};

export default HTML;