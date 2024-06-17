import React from 'react'
import './Table.css'

export default function TableTacheCategory() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Status de tâche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>En cours</td>
            <td className='Button'>
              <button>Modifier</button>
              <button>Effacer</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>En cours</td>
            <td className='Button'>
              <button>Modifier</button>
              <button>Effacer</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>En cours</td>
            <td className='Button'>
              <button>Modifier</button>
              <button>Effacer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
