import React from 'react';

import MesContent from './MesContent';

export default (props) => {

    return (
        <div className="mes-list">
            {
                props.data.map(d=>(
                    <div key={d.id} className="mes-item" data-self={d.user.userId===2}>
                        <div className="mes-avator">{d.user.userName[0]}</div>
                        <div  className="mes-content">
                            <MesContent message={d.message} type={d.type} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}