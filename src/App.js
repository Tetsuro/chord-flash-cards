import React from 'react';
import styles from './App.module.scss';

import {GeneratorButton} from './components';

function App() {
  return (
    <div className={styles.Container}>
      <GeneratorButton />
    </div>
  );
}

export default App;
