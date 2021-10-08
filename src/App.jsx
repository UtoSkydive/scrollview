import Menu from "./Menu";
import Texto from "./Texto";
import './stylesTexto.css'
import place from "./placeholder.jpg"
import "./App.css";
import useObserver from "./useObserver";
import {useEffect} from 'react'


function App() {
  const images = [
    "http://placekitten.com/g/600/600",
    "http://placekitten.com/g/700/700",
    "http://placekitten.com/g/800/800"
    
  ]
  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  });
  console.log('render');


  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('entro')
        var intro = document.getElementById('red');
        intro.style.backgroundColor = '#FF00FF';
        intro.click()
        intro.scrollIntoView(false);
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        // observer.unobserve(lazyImage);
      }else{
        var intro = document.getElementById('red');
        intro.style.backgroundColor = 'yellow';
        console.log("salio")
      }
    });
  },[entries, observer]);


  useEffect(() => {
    const images = document.querySelectorAll(".lazy");
    console.log(images)
    setElements(images);
  }, [setElements]);

  return (
    <div className="App">
    
          <Menu/>
      <header className="App-header">
          
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quam dolores quisquam neque rerum quo in quibusdam quidem quaerat inventore dolor quae harum sequi sunt aliquam laboriosam magnam, soluta nostrum culpa similique saepe beatae est? Ratione beatae recusandae ullam labore, delectus nam modi libero ea praesentium, at quas sed non.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quam dolores quisquam neque rerum quo in quibusdam quidem quaerat inventore dolor quae harum sequi sunt aliquam laboriosam magnam, soluta nostrum culpa similique saepe beatae est? Ratione beatae recusandae ullam labore, delectus nam modi libero ea praesentium, at quas sed non.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quam dolores quisquam neque rerum quo in quibusdam quidem quaerat inventore dolor quae harum sequi sunt aliquam laboriosam magnam, soluta nostrum culpa similique saepe beatae est? Ratione beatae recusandae ullam labore, delectus nam modi libero ea praesentium, at quas sed non.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quam dolores quisquam neque rerum quo in quibusdam quidem quaerat inventore dolor quae harum sequi sunt aliquam laboriosam magnam, soluta nostrum culpa similique saepe beatae est? Ratione beatae recusandae ullam labore, delectus nam modi libero ea praesentium, at quas sed non.</p>
          {
            images.map(source=>(
              <img src={place} key={source} className="lazy"  data-src={source} alt="" />
            ))
          }
      </header>
    </div>
    
  );
}

export default App;
