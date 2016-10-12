import { createStore, applyMiddleware } from 'redux'
import { initialState} from '../initialState'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER'

function reducer (state = initialState, action) {
  console.log('in the reducer', action)
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

export const fetchAlbumsFromServer =() => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbums(albums)));
  }
}

// // definition pattern
// const asyncActionCreator = function () {
//   return function (dispatch) {
//     // ... real action happens
//   };
// };

// // usage pattern
// ...
// asyncActionCreator()(dispatch);
// // OR
// dispatch(asyncActionCreator());
// ...


export const receiveAlbums = function (albums) {
  return { type: RECEIVE_ALBUMS_FROM_SERVER, albums }
};

const logger = createLogger()

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// store.getState()
// store.dispatch({type: RECEIVE_ALBUMS_FROM_SERVER, albums: ['album1', 'album2']});
// store.getState()

export default store;

