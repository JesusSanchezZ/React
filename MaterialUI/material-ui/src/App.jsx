import { Album } from './album/pages/Album';
import './App.css';
import { Autocomplete1 } from './components/autocomplete1';
import { Botones } from './components/Botones';
import { DataGrids } from './components/DataGrid';
import { Alerts, Badges, BasicStack, Chips } from './components/Variados';

function App() {
  return (
    <>
      <Autocomplete1/>
      {/* <Album/> */}
      <Botones/>
      <DataGrids/>
      <Badges style={{ pt: 5}} />
      <Chips />
      <Alerts />
      <BasicStack />
    </>
  )
}

export default App
