import './App.css'

import SuperImage from './components/superimage/SuperImage'
import Smeagol from './assets/smeagol.jpg'

const monkeysCDN = [
  'https://cdn.pixabay.com/photo/2014/09/16/20/52/gorilla-448731_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/09/25/21/32/chimpanzee-3703230_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/06/08/11/animal-world-3134166_1280.jpg',
]

function App() {
  return (
    <div className='App'>
      {monkeysCDN.map(monkey => {
        return <SuperImage key={monkey} src={monkey} />
      })}
    </div>
  )
}

export default App
