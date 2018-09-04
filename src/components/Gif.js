import React,  { Component } from 'react'

const Gif = ({gif}) => {
  return (
  <li><img src={gif.images.downsized.url} /></li>
  )
}

export default Gif
