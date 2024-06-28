import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Menu from "../../Component/Menu/Menu";
import image from "../../assets/page.jpg";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import "./TaskDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment'
import AddUpdate from "../../Component/tacheUpdate/AddUpdate";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

export default function TaskDetail() {
  const navigate = useNavigate();
  const id = useParams();
  // const [Task, setTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const usequery = useQueryClient()
  const queryClient = useQueryClient()
  const {data:Task,error, isLoading} = useQuery({
    queryKey: ['Task'],
    queryFn: () =>
      axios
    .get("http://localhost:1000/task/" + id.id)
    .then((res) => res.data),
    onerror: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      usequery.invalidateQueries(['task'])
    }
    
  })
 
  // useEffect(() => {
    
  //   axios
  //     .get("http://localhost:1000/task/" + id.id)
  //     .then((res) => {
  //       setTask(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }, []);

  // mutation pour delete tâche
  const mutation = useMutation({
    mutationFn: () => {
      return  axios.delete('http://localhost:1000/task/' + id.id)
    },
    onError: (error) => {
      console.log(error)
      alert('une erreur est survenue')
    },
    onSuccess: () => {
      usequery.invalidateQueries(['task'])
      navigate('/task')
    }
  })

  const deleteTask = () => {
      mutation.mutate()
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="TaskDetail">
      <Navbar />
      <div className="conteneur">
        <Menu />
        <div className="conteneur-Taskdetail">
          {
            <div>
              <div className="Taskdetail-head">
                <div className="imgTask">
                  <img src={`http://localhost:1000` + Task.file} alt="" />
                </div>
                <div className="taskText">
                  <h1>{Task.title}</h1>
                  <p>
                    priorité : <span>{Task.priority}</span>
                  </p>
                  <p>
                    Status : <span> {Task.status}</span>
                  </p>
                  <p> créer le : {moment(Task.date).format('DD/MM/YYYY')}</p>
                </div>
              </div>
              <div className="detailTask">
                <p>
                  {Task.description}
                </p>
              </div>
            </div>
          }
          <div className="button">
            <div className="button0"></div>
            <div className="button0">
              <div className="button1" onClick={deleteTask}>
                {/* button de suppression */}
                <MdDelete color="white" />
              </div>
              <div className="button1" onClick={() => setIsOpen(true)}>
                {/* button de modification */}
                <LiaEditSolid color="white" size={14} />
              </div>
              {isOpen && <AddUpdate props={isOpen} setIsOpen={setIsOpen}
                Task={Task} id={id} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
