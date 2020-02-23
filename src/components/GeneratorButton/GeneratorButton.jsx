import React, {useState} from 'react';
import styles from './GeneratorButton.module.scss';

export function GeneratorButton() {
  const CHORDS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  const [chord, setChord] = useState('Click me');

  function handleClick() {
    const randomChord = CHORDS[Math.floor(Math.random() * CHORDS.length)];
    const randomKey =
      Math.floor(Math.random() * Math.floor(2)) === 1 ? '' : 'm';

    let randomSeventh = Math.floor(Math.random() * Math.floor(3));
    switch (randomSeventh) {
      default:
        randomSeventh = null;
        break;
      case 0:
        randomSeventh = null;
        break;
      case 1:
        randomSeventh = '7';
        break;
      case 2:
        randomSeventh = '△7';
        break;
    }

    const chordMarkup = (
      <span>
        {randomChord}
        <small className={styles.Key}>{randomKey}</small>
        <sup className={styles.Seventh}>{randomSeventh}</sup>
      </span>
    );

    setChord(chordMarkup);
  }

  return (
    <button className={styles.Button} onClick={handleClick}>
      {chord}
    </button>
  );
}
