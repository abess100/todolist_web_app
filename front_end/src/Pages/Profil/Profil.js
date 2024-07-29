import React, { useContext } from 'react'
import { UidContext } from '../../Context/AppContext'

export default function Profil() {
  const uid = useContext(UidContext)

  return (
    <div className='Profil_container'>
        {uid ? (
            <h1>Profil</h1>
        ) : (
          <h1>
            off
          </h1>
          )}
    </div>
  )
}
