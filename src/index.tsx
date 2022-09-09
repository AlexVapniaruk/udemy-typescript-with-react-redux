import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

class App extends React.Component<AppProps> {
    state = { counter: 0 }

    onInrement = ():void => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = ():void => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return <div>
            <button onClick={this.onInrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
            { this.state.counter }
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))