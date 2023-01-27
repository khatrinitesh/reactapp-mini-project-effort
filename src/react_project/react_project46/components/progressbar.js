import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export default function CustomProgressBar() {
  return (
    <div>
        <ProgressBar completed={60} maxCompleted={200}/>
    </div>
  )
}
