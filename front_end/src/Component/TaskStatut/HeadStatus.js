import React from 'react'
import { TbClipboardCopy } from "react-icons/tb";
import './HeadStatus.css'

export default function HeadStatus() {
  return (
    <div className="headStatus">
      <TbClipboardCopy  size={17}/>
      <p>Task Status</p>
    </div>
  )
}
