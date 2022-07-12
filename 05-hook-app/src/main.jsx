import React from 'react';
import ReactDOM from 'react-dom/client';
import { Padre } from './07-tarea-memo/Padre';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemorizeHook';
//import { Memorize } from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import './index.css';

//import './08-useReducer/intro-reducer';           // presentacion de useReducer
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
  //</React.StrictMode>
)
