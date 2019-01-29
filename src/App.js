import React, { PureComponent } from 'react';
import io from 'socket.io-client';
import './App.css';
import Conversation from './page/conversation';

const socket = io();

const user = new Date().valueOf();

class App extends PureComponent {

	componentDidMount() {
		socket.emit('LOGIN', user);
	}

	render() {
		return (
			<div className="App">
				<Conversation socket={socket} user={user} />
			</div>
		);
	}
}

export default App;
