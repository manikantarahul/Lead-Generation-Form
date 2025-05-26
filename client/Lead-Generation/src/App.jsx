import Form from "./form/Form";
import { Toaster } from 'react-hot-toast';

function App() {
  return (

    <div>
      <Form/>
      <Toaster position="top-center" 
      reverseOrder={false} 
       toastOptions={{
          duration: 2000,}} 
          />
    </div>

  )
}

export default App