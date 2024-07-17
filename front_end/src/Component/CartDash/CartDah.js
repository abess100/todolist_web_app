import React, { useEffect, useState } from "react";
import CartToto from "../Cart_todo/CartToto";
import AddTask from "../AddTAsk/AddTask";
import axios from "axios";
import {useQuery, useQueryClient} from '@tanstack/react-query'

export default function CartDah() {

  const queryClient = useQueryClient();
  const {data:Task, isLoading} = useQuery({
    queryKey: ["Task"],
    queryFn: () => 
      axios
      .get("http://localhost:1000/task")
      .then((res) => res.data),
      onerror: (error) => {
        console.log(error);
      }
  })

  if(isLoading){
    return <h1>Loading......</h1>
  } 
 

  return (
    <div className="CartDah">
      <AddTask />
      <CartToto data={Task} />    
    </div>
  );
}
