/**
 * main
 */

import React, { PureComponent } from 'react';
import MesList from '../com/MesList';
import MesInput from '../com/MesInput';
import './index.css';

export default class extends PureComponent {

    state = {
        list:[],
        msg:{},
    }

    onComfirm = (data) => {
        const {socket,user} = this.props;
        const {msg} = this.state;
        socket.emit('UPDATA_MESSAGE', {
            ...data,
            id: new Date().valueOf() + Math.floor(Math.random() * 1000),
            user: {
                userId: user,
                userName: user
            },
            diff:this.type===3?msg.message:null
        })
    }

    onSetMsg = (msg,type) => {
        this.type = type;
        this.setState({
            msg:{...msg}
        })
    }

    componentDidMount() {
        const {socket} = this.props;
        socket.on('INIT', (list) => {
            this.setState({list});
        })
        socket.on('UPDATA_MESSAGE', (msg) => {
            console.log(msg)
            const {list} = this.state;
            this.setState({list:[...list,msg]});
        })
    }


    render() {
        const {list,msg} = this.state;
        const {user} = this.props;
        return (
            <div className="mes-body">
                <div className="mes-right">
                    <MesList data={list} user={user} onSetMsg={this.onSetMsg} />
                    <MesInput onComfirm={this.onComfirm} msg={msg} />
                </div>
            </div>
        );
    }
}