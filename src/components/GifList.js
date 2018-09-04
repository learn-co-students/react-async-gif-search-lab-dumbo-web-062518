import React from 'react';

export default class GifList extends React.Component{

  renderGifs = () => {
    if (this.props.gifs[0] !== undefined){
      return( this.props.gifs.map(image => {
          const url = image.images.downsized.url
          return(
            <div>
              <img key={image.slug} src={url} alt={image.title}  />
            </div>
          )
        }))

    } else {
        return <h3>Please Enter a valid search!</h3>
      }
  }

  render () {
    return (
      <div>
        {this.renderGifs()}
      </div>
    )
  }
}
