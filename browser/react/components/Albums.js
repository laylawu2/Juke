'use strict';

import React from 'react';

// props: albums
function convertSong (song) {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

function convertAlbum(album) {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong)
  return album;
  }

  function convertAlbums(albums) {
  return albums.map(album => convertAlbum(album))
  }

class Albums extends React.Component {
  constructor() {
    super()
  }


  componentDidMount () {
    this.props.loadAlbums()

  }

  render(){
    console.log('props', this.props.albums)
    return (
      <div>
        <h3>Albums</h3>
        <div  className="row">
        {
          this.props.albums.map((album, idx) => {
            console.log(album, idx)
            return(
            <div key={idx} className="col-xs-4">
              <a className="thumbnail" href="#">
              <img src={album.imageUrl}/>
                <div className="caption">
                  <h5>{album.name}</h5>
                  <small>{album.songs.length}</small>
              </div>
              </a>
            </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default Albums
