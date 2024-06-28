import React from "react";
import "./Add.css";
import HeadTaskCategory from "../HeadTaskCatego/HeadTaskCategory";
import { HiX } from "react-icons/hi";
import axios from "axios";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function AddUpdate({ setIsOpen }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  // stocker les data
  const useQuery = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTask) => {
      return axios.post('http://localhost:1000/task', newTask)
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: () => {
      useQuery.invalidateQueries('task');
      setIsOpen(false)
    }
  })


  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const task = new FormData()
    task.append('title', data.title)
    task.append('description', data.description)
    task.append('priority', data.priority)
    task.append('file', data.file[0])
    task.append('status', data.status)

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Titre</label>
            <br />
            <input type="text" id="title"
              {...register("title")} />
            <br />
            <br />
            <label htmlFor="title">Status</label>
            <br />

            <select name="choix" id="choix" {...register("status")}>
              <option value="En attente">En attente</option>
              <option value="En cours">En Cours</option>
              <option value="Terminé">Terminée</option>
            </select>

            <br />
            <label htmlFor="title">priorité</label>
            <br />

            <select name="priority" id="priority" {...register("priority")}>
              <option value="Pas important">Pas important</option>
              <option value="Pas important">Important</option>
              <option value="Pas important">Urgent</option>
            </select>


            <div className="descript">
              <textarea
                name=""
                id=""
                placeholder="Décrire votre tâche ici"
                rows={12}
                {...register("description")}
              ></textarea>

              <input type="file" id="photo" name="file"
                {...register("file")}
              />
            </div>

            <input type="submit" value="Ajouter" />
          </form>
        </div>
      </div>
    </div>
  );
}
