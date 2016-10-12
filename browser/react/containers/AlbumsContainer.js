import Albums from '../components/Albums'
import { connect } from 'react-redux'
import React from 'react'
import initialState from '../initialState'
import {fetchAlbumsFromServer, receiveAlbums} from '../components/myRedux'

//pass all props and functions to Album component
const AlbumsContainer = connect (mapStateToProps, mapDispatchToProps)(Albums);

    function mapStateToProps(state=initialState, ownProps){
      return {
        albums: state.albums
      }
    }

    function mapDispatchToProps(dispatch, ownProps){
      return { //we could have as many functions as we want here
        loadAlbums () {
         dispatch(fetchAlbumsFromServer())
        }

      }
    }

export default AlbumsContainer;
