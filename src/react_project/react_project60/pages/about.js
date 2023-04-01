import React,{useState} from 'react';
import Banner from '../components/banner';
import { Map } from 'immutable';

export default function About() {
  const [value, setValue] = useState(0);
  const calculation = doCalculation();

  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <h1>{`Calculation is ${calculation}`}</h1>
        </div>
        <MyComponent/>
        <MyComponentTwo/>
        <MyComponentTwo/>
        <MyComponentThree/>
        <CustomTheme/>
    </div>
  )
}

function doCalculation() {
  const now = performance.now();
  while (performance.now() - now < 500) {
    // do nothing for 500ms
  }

  return Math.random();
}

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      counter:0
    }
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      counter:prevState.counter + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

function MyComponentTwo() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter => counter + 1)
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

class MyComponentThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Map({ counter: 0 })
    };
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      data: prevState.data.update('counter', value => value + 1)
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <p>Counter: {this.state.data.get('counter')}</p>
      </div>
    );
  }
}

const CustomTheme = () => {
    const [theme, setTheme] = useState('light');
    return (
      <div className={`app ${theme === 'dark' ? 'app-dark' : ''}`}>
        <h1>My App</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    );
}