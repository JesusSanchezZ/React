// function App() {
//     return (<h1>¡¡Hola Mundo!!</h1>);
// }

// export default App;

import { FirstApp } from './FirstApp';

export const HelloWorldApp = () => {
    return (
    <div>
        <h1>Hola mundo</h1>
        <FirstApp />
    </div>);
}