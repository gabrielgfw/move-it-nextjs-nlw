import styles from '../styles/components/Countdown.module.css'
import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  // Transformando em String, chegando se o resultado tem 2 dígitos,
  // caso contrário será acrescido um '0' na frente.
  // Em sequência a string é dividida em um array para cada dígito.
  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondsLeft, secondsRight ] = String(seconds).padStart(2, '0').split('');
  
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

      { hasFinished ? (
        <button
          disabled
          className={ styles.countdownButton }
          >
          Ciclo encerrado
        </button>
      ) : (
        <>
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
        </>
      ) }

      
      
    </div>
  )
}