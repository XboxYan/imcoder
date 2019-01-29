/**
 * main
 */

import React,{ useState } from 'react';
import MesList from '../com/MesList';
import MesInput from '../com/MesInput';
import './index.css';

let meslist = [];

export default ({socket,user}) => {

    const [init, setInit] = useState(false);

    const [list, setList] = useState([]);

    const onComfirm = (data) => {
        socket.emit('UPDATA_MESSAGE',{
            ...data,
            id:new Date().valueOf() + Math.floor(Math.random()*1000),
            user:{
                userId:user,
                userName:user
            }
        })
    }

    const updataMes = (mes) => {
        meslist.push(mes);
        setList(meslist);
    }

    const initMes = (list) => {
        meslist = list;
        setList(list);
    }

    if(!init){
        setInit(true);
        socket.on('INIT',(list)=>{
            initMes(list);
        })
        socket.on('UPDATA_MESSAGE',(msg)=>{
            updataMes(msg);
        })
    }

    return (
        <div className="mes-body">
            <div className="mes-right">
                <MesList data={list} user={user} />
                <MesInput onComfirm={onComfirm}/>
            </div>
        </div>
    )
}