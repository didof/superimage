import './App.css'

import SuperImage from './components/superimage/SuperImage'

const picsum = 'https://picsum.photos/id/%ID%/200/300'

const monkeys = [
  'https://cdn.pixabay.com/photo/2014/09/16/20/52/gorilla-448731_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/09/25/21/32/chimpanzee-3703230_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/06/08/11/animal-world-3134166_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/05/10/12/21/lemur-1383616_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/02/12/23/49/monkey-1197100_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/07/18/09/03/mandrill-396289_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/05/15/14/42/monkeys-768641_1280.jpg',
]

function App() {
  return (
    <div className='grid' id='app'>
      {monkeys.map(monkey => (
        <SuperImage src={monkey}>
          <SuperImage.RedirectToSrc />
          <SuperImage.LowResolution />
        </SuperImage>
      ))}
    </div>
  )
}

export default App
