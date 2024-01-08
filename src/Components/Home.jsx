import React,{useEffect, useState} from "react";
import Topbar from "./Topbar";
import Cards from "./Cards";
import axios from "axios";
import { API_URL } from '../App';
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

function Home() {
    const navigate = useNavigate()
    const [blog,setBlog] = useState([])

    const getBlog = async () => {
        try {
            let res = await axios.get(API_URL)
        if(res.status === 200){

            setBlog(res.data)

        }
            
        } catch (error) {
            toast.error("Error")
        }
        
    }

    useEffect(()=> {
        getBlog()
    },[])

  return (
    <>
      <Topbar />

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder"></h2>
              </div>
            </div>
          </div>
          <div className="row gx-5">
          {
            blog.map((e) => {
                return( <Cards name={e.name} user={e.user} email={e.email} city={e.city} number={e.number}website={e.website} />)
            } )
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
