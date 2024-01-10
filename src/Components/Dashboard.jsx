import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { API_URL } from '../App';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Dashboard() {
  let [blog, setBlog] = useState([]);
  let navigate = useNavigate()

  const getData = async() => {
    try {
      let res = await axios.get(API_URL)
      if(res.status === 200){

        setBlog(res.data)
      }
      
    } catch (error) {
      toast.error('error')
    }
  }



  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if(res.status === 200){

        toast.success('Deleted Succcessfully')
        getData()
      }
    } catch (error) {
      toast.error("Error")
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <Topbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S,No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Mobile</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blog.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.user}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td>{e.number}</td>
                <td>{e.website}</td>
                <td>
                  <Button variant="primary" onClick={() => navigate(`/edit/${e.id}`)}>Edit</Button>{" "}
                  <Button variant="danger" onClick={() => handleDelete(e.id)}>Delete</Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
