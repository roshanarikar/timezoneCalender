import { useMemo, useState } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import spacetime from "spacetime";
import data from "./data.json"
import "./Timezone.css"


export const Timezone = () =>{
    const [tz, setTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [datetime, setDatetime] = useState(spacetime.now());
    
      useMemo(() => {
        const tzValue = tz.value ?? tz;
        setDatetime(datetime.goto(tzValue));
      }, [tz]);
    
      console.log(datetime)
    return(
        <div>
            <div>
                <div><p>Timezone</p></div>
                <div>
                <TimezoneSelect
                    value={tz}
                    onChange={setTz}
                    labelStyle="altName"
                    timezones={{
                        ...allTimezones,
                        "America/Lima": "Pittsburgh",
                        "Europe/Berlin": "Frankfurt"
                    }}
                    />
                </div>
                <h3>
                  Date & Time : {datetime.unixFmt("dd.MM.YY HH:mm:ss")}
                </h3>
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