import './App.css';
import { Alert } from './components';

function App() {
  return (
    //flex dodany przy pomocy tailwind
    <div className="flex flex-col p-4 max-w-xl">
      <Alert variant='info'>Would you like to browse our recommended products?</Alert>
      <Alert variant='error' isElevated>There was an error during your last transaction</Alert>
      <Alert variant='success' isOutlined>Payment received, thank you for your purchase</Alert>
      <Alert variant='warning' isElevated isOutlined>Please update your profile contact information</Alert>

    </div>
  );
}

export default App;
