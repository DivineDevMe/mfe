import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const Marketing =(el) =>{

    // const App = ()=>(
    //     <div>Marketing</div>
    // )
    
    ReactDOM.render(<App/>,el)
}

if(process.env.NODE_ENV === 'development'){

    const el = document.querySelector('#_marketing-dev-root_');
    if(el){
        Marketing(el);
    }
}

export { Marketing }
