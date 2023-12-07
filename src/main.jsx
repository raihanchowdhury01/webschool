import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx/Header';
import Home from './components/Home/Home';
import HTML from './components/HTML/HTML';
import Basic from './components/HTML/Basic/Basic';
import Editor from './components/HTML/Editor/Editor';
import CSS from './components/CSS/CSS';
import JS from './components/JS/JS';
import Intro from './components/HTML/Intro/Intro';
import Heading from './components/HTML/Heading/Heading';
import Paragraphs from './components/HTML/Paragraphs/Paragraphs';
import Formating from './components/HTML/Formating/Formating';
import Quotation from './components/HTML/Quotation/Quotation';
import Comments from './components/HTML/Comments/Comments';
import Link from './components/HTML/Link/Link';
import Image from './components/HTML/Image/Image';
import Favicon from './components/HTML/Favicon/Favicon';
import Title from './components/HTML/Title/Title';
import Table from './components/HTML/Table/Table';
import List from './components/HTML/List/List';
import BlockandInline from './components/HTML/BlockandInline/BlockandInline';
import Div from './components/HTML/Div/Div';
import Class from './components/HTML/Class&Id/Class&Id';
import Iframes from './components/HTML/Iframes/Iframes';
import FilePath from './components/HTML/FilePath/FilePath';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/html',
        element : <HTML></HTML>,
      },
      {
        path : '/css',
        element : <CSS></CSS>
      },
      {
        path: '/js',
        element: <JS></JS>
      },
      {
        path : '/intro',
        element : <Intro></Intro>
      },
      {
        path : '/editor',
        element : <Editor></Editor>
      },
      {
        path : '/basic',
        element : <Basic></Basic>
      },
      {
        path: '/heading',
        element: <Heading></Heading>
      },
      {
        path: '/paragraph',
        element: <Paragraphs></Paragraphs>
      },
      {
        path: '/formating',
        element: <Formating></Formating>
      },
      {
        path: '/quotation',
        element: <Quotation></Quotation>
      },
      {
        path: '/comment',
        element: <Comments></Comments>
      },
      {
        path: '/link',
        element: <Link></Link>
      },
      {
        path: '/image',
        element: <Image></Image>
      },
      {
        path: '/favicon',
        element: <Favicon></Favicon>
      },
      {
        path: '/title',
        element: <Title></Title>
      },
      {
        path: '/table',
        element: <Table></Table>
      },
      {
        path: '/list',
        element: <List></List>
      },
      {
        path:'/blocktag',
        element: <BlockandInline></BlockandInline>
      },
      {
        path: '/div',
        element: <Div></Div>
      },
      {
        path: '/class',
        element: <Class></Class>
      },
      {
        path: '/iframe',
        element: <Iframes></Iframes>
      },
      {
        path: '/filepath',
        element: <FilePath></FilePath>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
