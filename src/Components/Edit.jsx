import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");
  const navigate = useNavigate();
  let {id} = useParams()

  const handleEdit = async () => {
    try {
      let data = { name, email, user, city, number, website };
      let res = await axios.put(`${API_URL}/${id}`, data);
      if (res.status === 200) {
        toast.success("Edited Successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error");
    }
  };

 const getData = async ()  => {
    try {
        
        let res = await axios.put(`${API_URL}/${id}`) 
        if(res.status===200){
            setName(res.data.name)
            setEmail(res.data.email)
            setUser(res.data.user)
            setCity(res.data.city)
            setNumber(res.data.number)
            setWebsite(res.data.website)
        }
    } catch (error) {
        
    }
 }

 useEffect(() => {
    getData()
 },[])

  return (
    <>
      <Topbar />
      <br />
      <div className="container">
        <Form>
          <div className="row">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username" value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City" value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Website" value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number" value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
          </div>
          <Button variant="primary" onClick={() => handleEdit()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Edit;
