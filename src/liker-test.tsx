import React, {createElement as e, useState} from 'react'; // что бы не писать каждый раз createElement его записал в 'e' 

function App() {
  const [count, setCount] = useState(0)
 /** Создаем в блок div с элементами h1 и button */
 return e('div', {className: 'container'}, [
  e('h1', {className: 'font-bold'}, `Test JS ${count}`),
  e('button', {
    className: 'red', 
    key: 2,
    onClick: () => setCount(count +1),
  }, 'Like'),

  e('button', {
    className: 'red', 
    key: 2,
    onClick: () => setCount(count -1),
  }, 'Deslike'),
])
  
}

export default App;
