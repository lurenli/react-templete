
import React, { useContext } from 'react';
 
import { ThemeContext } from './hooks.js';
 
export default () => {
    
    const context = useContext(ThemeContext);
 
    return (
        <div>createContext 组件：当前 theme 是：{ context }</div>   
    )
}
