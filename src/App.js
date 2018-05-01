import React , {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {


    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    addTrack() {
        console.log('addTrack:', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value ='';
    }

    render() {
        console.log('this.props.testStore:',this.props.testStore);
        return (
            <div>
                <input type="text" ref={(input) => {this.trackInput = input}} />
                <button onClick={this.addTrack}>add</button>
                <ul className="list">
                    {this.props.testStore.map((track, index) =>
                    <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName});
        }
    })
)(App);






















/*











const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe( () => {
    console.log('subscribe: ',store.getState());
    list.innerHTML = '';
    trackInput.value='';
    store.getState().forEach( track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    })
});

store.dispatch({
    type: 'addTrack',
    payload: 'red cold river'
});



addTrackBtn.addEventListener('click', ()=> {
    const trackName = trackInput.value;
    console.log('trackName: ',trackName);
    store.dispatch({
        type: 'addTrack',
        payload: trackName
    });
});*/
