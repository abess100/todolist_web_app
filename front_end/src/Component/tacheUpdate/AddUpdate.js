import React, { useState } from "react";
import "./AddUpdate.css";
import HeadTaskCategory from "../HeadTaskCatego/HeadTaskCategory";
import { HiX } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function Add({ setIsOpen, Task, id }) {
  const navigate = useNavigate()

  const [Title, setTitle] = useState(Task.title);
  const [Description, setDescription] = useState(Task.description);
  const [Status, setStatus] = useState(Task.status);
  const [Priority, setPriority] = useState(Task.priority);
  const [file, setFile] = useState(Task.file);

  const useQuery = useQueryClient()
  const mutation = useMutation({
    mutationFn: (task) => {
      return   axios.put("http://localhost:1000/task/" + id.id,task)
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      useQuery.invalidateQueries(['task'])
      setIsOpen(false)
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: Title,
      description: Description,
      status : Status,
      priority : Priority,
      file : file
    }

    const task = new FormData()
    task.append('title', data.title)
    task.append('description', data.description)
    task.append('priority', data.priority)
    task.append('file', data.file)
    task.append('status', data.status)
    console.log(task);
    mutation.mutate(task)
  }

  return (
    <div className="AddTaskPop">
      <div className="popUp">
        <HeadTaskCategory
          status={"Ajouter une tâche"}
          setOpen={setIsOpen}
          button={
            <HiX
              size={16}
              color="#F24E1E"
              cursor={"pointer"}
              onClick={() => setIsOpen(false)}
            />
          }
        />
        <div className="bodyAdd">
          <form action="">
            <label htmlFor="title">Titres</label>
            <br />
            <input type="text" id="title" value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="title">Status</label>
            <br />

            <select name="status" id="choix"  onChange={(e) => setStatus(e.target.value)}>
              <option value="En attente">En attente</option>
              <option value="En cours">En Cours</option>
              <option value="Terminé">Terminée</option>
            </select>

            <br />
            <label htmlFor="title">priorité</label>
            <br />
            <select name="priority" id="priority" onChange={(e) => setPriority(e.target.value)}>
              <option value="Pas important">Pas important</option>
              <option value="Important">Important</option>
              <option value="Urgent">Urgent</option>
            </select>

            <div className="descript">
              <textarea
                name=""
                id=""
                placeholder="Décrire votre tâche ici"
                rows={12}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <input type="file" id="photo" name="photo"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <input type="submit" value="Ajouter" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}
