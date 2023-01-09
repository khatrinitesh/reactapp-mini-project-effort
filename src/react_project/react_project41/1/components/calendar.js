import React,{useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'


export default function CustomCalendar() {

    const [date, setDate] = useState(new Date())

  return (
    <div>
      <Calendar value={date} onChange={setDate} selectRange={true}/>
      <div> 
        Selected Date: {date.toDateString()}
      </div>
    </div>
  )
}
