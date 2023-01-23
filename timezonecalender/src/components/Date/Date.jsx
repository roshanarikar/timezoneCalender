import moment from "moment/moment"
import { useState } from "react"
import "./Date.css"

export const Date = () =>{
const [ date, setDate] = useState(moment())

    return(
        <div id="dateDiv">
          <div><button onClick={()=> setDate(moment().add(-1, 'days'))}>Previous Week</button></div>
          <div>{date.format("MMM DD YYYY")}</div>
          <div><button onClick={()=> setDate(moment().add(1, 'days'))}>Next Week</button></div>
        </div>
    )
}