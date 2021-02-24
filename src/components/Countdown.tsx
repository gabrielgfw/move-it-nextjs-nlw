import styles from '../styles/components/Countdown.module.css'
import { useState, useEffect } from 'react'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [ time, setTime ] = useState(25 * 60);
  const [ isActive, setIsActive ] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Transformando em String, chegando se o resultado tem 2 dígitos,
  // caso contrário será acrescido um '0' na frente.
  // Em sequência a string é dividida em um array para cada dígito.
  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('');
  
  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  // UseEffect recebe 2 parâmetros:
  // 1º: O que será executado?
  // 2º: Quando será executado?
  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  },  [ isActive, time ]);

  return (
    <div>
       <div className={ styles.countdownContainer }>
        <div>
          <span>{ minuteLeft }</span>
          <span>{ minuteRight }</span>
        </div>
        <span>:</span>
        <div>
          <span>{ secondsLeft }</span>
          <span>{ secondsRight }</span>
        </div>
      </div>

      { isActive ? (
        // Concatenação nos styles para acrescentar mais de um style.  
        <button
          type="button"
          className={ `${ styles.countdownButton } ${ styles.countdownButtonActive }` }
          onClick={ resetCountdown }
          >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          className={ styles.countdownButton }
          onClick={ startCountdown }
          >
          Iniciar um ciclo
      </button>
      ) }
      
    </div>
  )
}