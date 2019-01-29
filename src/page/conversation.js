/**
 * main
 */

import React, { PureComponent } from 'react';
import MesList from '../com/MesList';
import MesInput from '../com/MesInput';
import './index.css';

export default class extends PureComponent {

    state = {
        list:[]
    }

    onComfirm = (data) => {
        const {socket,user} = this.props;
        socket.emit('UPDATA_MESSAGE', {
            ...data,
            id: new Date().valueOf() + Math.floor(Math.random() * 1000),
            user: {
                userId: user,
                userName: user
            }
        })
    }

    componentDidMount() {
        const {socket} = this.props;
        socket.on('INIT', (list) => {
            this.setState({list});
        })
        socket.on('UPDATA_MESSAGE', (msg) => {
            const {list} = this.state;
            this.setState({list:[...list,msg]});
        })
    }


    render() {
        const {list} = this.state;
        const {user} = this.props;
        return (
            <div className="mes-body">
                <div className="mes-right">
                    <MesList data={list} user={user} />
                    <MesInput onComfirm={this.onComfirm} />
                </div>
            </div>
        );
    }
}