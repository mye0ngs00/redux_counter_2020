import React from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer />
            </div>
        )
    }
}

// 여기서 버튼은 State를 가질 필요가 없으므로 mapDispatchToProps만 전달한다.
const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);