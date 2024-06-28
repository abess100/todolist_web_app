import React, { useState } from 'react'
import './TableButton.css'
import HeadTaskCategory from '../HeadTaskCatego/HeadTaskCategory'


export default function TableButton({ Open, setOpen, name, id, update,setOpenPop }) {
    const [Name, setName] = useState(name)

    const onsubmit = (data) => {
        update(id, Name)
        setOpen(false)

    }
    return (
        <>
          
            <div className='TableButtons'>
                <div className='TableButton'>
                    <HeadTaskCategory status={"Modifier le status"} button={"Back"} Open={Open} setOpen={setOpen} setOpeP={setOpenPop}/>
                    <input type="text" name='name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={onsubmit}>Enregister</button>
                </div>
            </div>

        </>
    )
}
