import React from 'react'
import './article.css'
import {blog01, blog02, blog03, blog04, blog05} from './import'
function Article({imgURL, title, date}) {
  return (
    <div className='article'>
      <div className='article-image'>
        <img src={imgURL} alt='article' />
      </div>
      <div className='article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article