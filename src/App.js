import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <>
      <div className='container bgcolorb h-100'>
        <div className='d-flex justify-content-center align-items-center ' >
          <div className=' gbox '>
            <div className='text-center pb-4 '><img src={logo} className="App-logoo" alt="logo" /></div>
            <div className='textt text-center '>
              <h3>Sign in to your account</h3>
              <p><span>Or</span> Resister Your Profile</p>
            </div>
            <div className='otpbox p-3'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicnumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" placeholder="9131561335" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                  <Form.Text className="text-mutedd text-right" >
                    <a href="/#" className='linkc'>Forget Your Password?  </a>
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" size="100%">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
