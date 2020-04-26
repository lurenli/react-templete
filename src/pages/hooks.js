
import React, { useState, useEffect, createContext, useReducer } from 'react'; //useState 方法是用来修改数据状态

// 可维护和可扩展性代码 更易于优化 省去了class 的满天飞

// 可以让我们在函数式组件中添加state,也可以让我们使用部分生命周期钩子函数
import Example from './useContext'
// useEffect 方法是用来执行 DOM 挂载或者更新之后的事务  return 就是消除
// useContext 方法是用来共享数据，跨组件传值。 相当于父子组件传值
// useReducer 用于复杂的状态管理 useReducer 确实是 同步 更新数据 就像redux

// createRows 只会被执行一次
// const [rows, setRows] = useState(() => createRows(props.count));
export const ThemeContext = createContext(null);


function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Login() {
    return <div>Register</div>;
  }
  
  function Register() {
    return <div>Login</div>;
  }
  
function HookExample({ initialCount = 0 }) {
    // 声明一个名为“count”的新状态变量
    const [count, setCount, setUI, UI] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialCount, init);

    const handleClick = () => {
        console.log('鼠标点击');
    }

    // 类似于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // dosomething()
        // 使用浏览器API更新文档标题
        document.title = `You clicked ${count} times`;

        // 给 window 绑定点击事件
        window.addEventListener('click', handleClick);

        return () => { // 在组件被销毁时，会自动执行这个函数
            // 给 window 移除点击事件
            window.addEventListener('click', handleClick);

        }
    })

    useEffect(() => { 
        // useEffect 的第二个参数是一个数组，里面放入在 useEffect 使用到的 state 值
        // 1.不传 每次render 都会走一次useEffect
        // 2.传[] 走一次useEffect
        // 3.传变量 数据变化才走
        // 使用浏览器API更新文档标题
        document.title = `You clicked ${count} times`;
    }, [count]);

    let onClickLogin = () => {
        showUI('Login')
    }
    let onClickRegister = () => {
        showUI('Register')
    }
    let showUI = () => {
        switch (UI) {
            case 'Login':
                return <Login />
            case 'Register':
                return <Register />
            default :
             return <Login />
        }
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <ThemeContext.Provider value="light">
                <Example />
            </ThemeContext.Provider>


            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
             </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>

            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickRegister}>Register</button>
            <div>
                {showUI()}
            </div>
        </div>
    );
}

export default HookExample
