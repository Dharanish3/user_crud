import React , {useState} from "react";
import Topbar from "./Topbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [user,setUser] = useState("")
    const [city,setCity] = useState("")
    const [number,setNumber] = useState("")
    const [website,setWebsite] = useState("")
    const navigate = useNavigate()


    const handleCreate = async () => {
        try {
            let data = {name,email,user,city,number,website}
            let res = await axios.post(API_URL,data)
            if(res.status===201){

                toast.success("Created Successfully")
                navigate('/')
            }

            
        } catch (error) {
            toast.error("Error")
        }

    }


  return (
    <>
      <Topbar />
      <br />
      <div className="container">
        <Form>
          <div className="row">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" placeholder="Website" onChange={(e) => setWebsite(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control type="text" placeholder="Number" onChange={(e) => setNumber(e.target.value)}  />
            </Form.Group>
           
          </div>
          <Button variant="primary" onClick={() => handleCreate()}>Submit</Button>
        </Form>
      </div>
    </>
  );
}

export default Create;
