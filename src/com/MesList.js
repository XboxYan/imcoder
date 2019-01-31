import React,{ useEffect,useRef } from 'react';

import MesContent from './MesContent';

export default (props) => {

    const MesList = useRef(null);

    useEffect(()=>{
        const con = MesList.current;
        con.scrollTop = con.scrollHeight - con.clientHeight;
    })

    return (
        <div className="mes-list" ref={MesList} >
            {
                props.data.map(d=>(
                    <div key={d.id} className="mes-item" data-self={d.user.userId===props.user}>
                        <div className="mes-avator">{d.user.userName[0]}</div>
                        <div  className="mes-content">
                            <MesContent data={d} onSetMsg={props.onSetMsg} />
                        </div>
                    </div>
                ))
            }
            <div className="mes-space" />
        </div>
    )
}