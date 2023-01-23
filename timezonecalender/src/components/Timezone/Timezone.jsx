import data from "./data.json"
import "./Timezone.css"


export const Timezone = () =>{
    return(
        <div>
            <div>
                <div><p>Timezone</p></div>
                <div>
                    <select id="">
                        <option value="">[UTD-5] Eastern Standard Time</option>
                        <option value="">[UTD-3] Western Standard Time</option>
                    </select>
                </div>
            </div>
            <br />
            <br />
            <div>
                <div className="dayBox">
                    <div className="day">Mon 23/01</div>
                    <div className="timeBox">Past</div>
                </div>
                <div className="dayBox">
                    <div className="day">Tues 24/01</div>
                    <div className="timeBox">
                    Past
                    </div>
                </div>
                <div className="dayBox">
                    <div className="day">Wednes 25/01</div>
                    <div className="timeBox">{
                                data.map((e)=>{
                                    return(
                                        <div key={e.id} className="checkbox">
                                          <div><input type="checkbox"/></div>
                                          <div>{e.time}</div>
                                        </div>
                                    )
                                })
                            }</div>
                </div>
                <div className="dayBox">
                    <div className="day">Thurs 26/1</div>
                    <div className="timeBox">{
                                data.map((e)=>{
                                    return(
                                        <div key={e.id} className="checkbox">
                                          <div><input type="checkbox"/></div>
                                          <div>{e.time}</div>
                                        </div>
                                    )
                                })
                            }</div>
                </div>
                <div className="dayBox">
                    <div className="day">Fri 27/1</div>
                    <div className="timeBox">
                    {
                                data.map((e)=>{
                                    return(
                                        <div key={e.id} className="checkbox">
                                          <div><input type="checkbox"/></div>
                                          <div>{e.time}</div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}