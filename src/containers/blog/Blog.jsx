import React from 'react'
import './blog.css'
import {blog01, blog02, blog03, blog04, blog05} from '../../components/article/import'
import Article from '../../components/article/Article'
function Blog() {
  return (
    <div className='blog section-padding obj-width'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='blog-container'>
          <div className='blog-cardA'>
              <Article imgURL={blog01} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          </div>
          <div className='blog-cardB'>
              <Article imgURL={blog02} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imgURL={blog03} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imgURL={blog04} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imgURL={blog05} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
      </div>
    </div>
  )
}

export default Blog