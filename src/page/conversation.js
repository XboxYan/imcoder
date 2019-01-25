/**
 * main
 */

import React,{ useState } from 'react';
import MesList from '../com/MesList';
import MesInput from '../com/MesInput';
import './index.css';

const testList = [
    {
        message:'Many of the methods above return change objects. These objects consist of the following fields',
        type:0,
        id:0,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:'Many of the methods above return change objects. These objects consist of the following fields Many of the methods above return change objects. These objects consist of the following fields',
        id:1,
        type:0,
        user:{
            userId:0,
            userName:'Allo'
        }
    },
    {
        message:` <div>
+    <div class="333">1w</div>
     <div>1</div>
-    <div>1</div>
-    <div>3</div>
+    <div>3ss</div>
     <div>4</div>
     <div>
         <span>4444</span>
-        <p>4444</p>
+        <span>1</span>
     </div> 
 </div>`,
        id:2,
        type:1,
        user:{
            userId:1,
            userName:'Bill'
        }
    },
    {
        message:'hello',
        id:3,
        type:0,
        user:{
            userId:2,
            userName:'XboxYan'
        }
    },
    {
        message:`#import <UIKit/UIKit.h>
#import "Dependency.h"

@protocol WorldDataSource
@optional
- (NSString*)worldName;
@required
- (BOOL)allowsToLive;
@end

@property (nonatomic, readonly) NSString *title;
- (IBAction) show;
@end`,
        id:4,
        type:1,
        user:{
            userId:2,
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