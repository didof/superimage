import "./App.css";

import ProgImg from "./components/progImg/ProgImg";

import SuperImage from "./components/superimage/SuperImage";

import Button from "./components/button/Button";

import Smeagol from "./assets/smeagol.jpg";

import Dog from "./assets/dog.jpg";
import Uccello from "./assets/uccello.jpg";
import { render } from "react-dom";

const picsumFull = "https://picsum.photos/id/%ID%/300";
const picsumLow = "https://picsum.photos/id/%ID%/30";

const monkeys = [
  "https://cdn.pixabay.com/photo/2014/09/16/20/52/gorilla-448731_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/09/25/21/32/chimpanzee-3703230_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/02/06/08/11/animal-world-3134166_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/05/10/12/21/lemur-1383616_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/12/23/49/monkey-1197100_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/07/18/09/03/mandrill-396289_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/15/14/42/monkeys-768641_1280.jpg",
];

function App() {
  function renderAmount(amount = 30) {
    let urls = [];

    for (let i = 30; i <= amount + 30; i++) {
      const full = picsumFull.replace("%ID%", i.toString());
      const low = picsumLow.replace("%ID%", i.toString());
      urls.push({ full, low });
    }

    return urls.map((url, index) => (
      <ProgImg src={url.full} key={url.toString() + index}>
        <ProgImg.Blurred src={url.low} blur={20} />
      </ProgImg>
    ));
  }

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr", gridAutoRows: 'auto' }}
    >
      {renderAmount(10)}
    </div>
  );

  // return (
  //   <ProgImg src={Smeagol} />
  //   <div className='grid' id='app'>
  //     <SuperImage src={Smeagol} />
  //     {monkeys.map(monkey => (
  //       <SuperImage src={monkey} >
  //         <SuperImage.RedirectToSrc />
  //       </SuperImage>
  //     ))}
  //   </div>
  //   <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  //     <Button>
  //       <Button.Label>
  //         <Button>
  //           <Button.Icon src={Smeagol} />
  //         </Button>
  //       </Button.Label>
  //       <Button.Icon src={Smeagol} />
  //     </Button>
  //   </div>
  // );
}

export default App;
