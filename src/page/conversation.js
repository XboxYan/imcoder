/**
 * main
 */

import React,{ useState } from 'react';
import MesList from '../com/MesList';
import MesInput from '../com/MesInput';
import './index.css';

const testList = [
    {
        message:'00就看就看家看看叫进空间即可就看',
        type:0,
        id:0,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:'11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看11就看就看家看看叫进空间即可就看',
        id:1,
        type:0,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:'22就看就看家看看叫进空间即可就看',
        id:2,
        type:0,
        user:{
            userId:1,
            userName:'Bill'
        }
    },
    {
        message:'33就看就看家看看叫进空间即可就看',
        id:3,
        type:0,
        user:{
            userId:2,
            userName:'XboxYan'
        }
    },
    {
        message:`.mes-item[data-self=true] .mes-content{
            border-radius: 10px 0 10px 10px!important;
            background-color: var(--contentbgColor);
        }
        .mes-code>pre{
            margin: 0!important;
        }
        .mes-code>pre>code{
            padding: 10px 15px;
        }
        .mes-txt{
            margin: 0;
            padding: 10px 15px;
        }`,
        id:4,
        type:1,
        user:{
            userId:1,
            userName:'Bill'
        }
    },
];

export default () => {

    const [list, setList] = useState(testList);

    const onComfirm = (data) => {
        console.log(data)
    }

    return (
        <div className="mes-body">
            <div className="mes-right">
                <MesList data={list} />
                <MesInput onComfirm={onComfirm}/>
            </div>
        </div>
    )
}