import { useState } from 'react';

// Props:

// Estamos utilizando interfaces para definir as propriedades
// do componente.

// Para que o componente assuma a propriedade criada a partir
// da interface, é necessário passar no parâmetro da função
// que retorna o elemento em si, a propriedade via tipagem.

interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(1)

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button 
    type="button" 
    style={{ backgroundColor: props.color }}
    onClick={ increment }
    >
      { props.children } 
      <strong> { counter } </strong>
    </button>
  );
}