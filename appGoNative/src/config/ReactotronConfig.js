import Reactotron from 'reactotron-react-native';

const tron = Reactotron
  .configure()
  .useReactNative()
  .connect();

console.tron = tron;
console.display = tron;
