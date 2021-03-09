import React,{ useRef ,useEffect} from 'react';
import {Marketing} from 'marketing/MarketingApp';


export default () =>{
    const ref = useRef(null);
    
    useEffect( ()=>{
        Marketing(ref.current);
    })

    return <div ref={ref}/>
}

