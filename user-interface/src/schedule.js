import React, { useState } from 'react';

const currentSchedules = {
    farmname:[],
    duration:[],
    saturation:[],
    frequency:[]
};
  

const Schedule = () =>{
    const [formData, setFormData] = useState({farmname:[],
        duration:[],
        saturation:[],
        frequency:[]});
    

    const handleSubmit = (event) => {
      event.preventDefault();
      const newFormData = {
        farmname: event.target[0].value,
        duration:event.target[1].value,
        saturation:event.target[2].value,
        frequency:event.target[3].value,
      };


      currentSchedules.farmname.push(newFormData.farmname)
      currentSchedules.duration.push(newFormData.duration)
      currentSchedules.saturation.push(newFormData.saturation)
      currentSchedules.frequency.push(newFormData.frequency)
    setFormData(newFormData);
    console.log(formData)
    console.log(newFormData);
    console.log(currentSchedules);
    };
    return (<div>
        <form onSubmit={handleSubmit} className='schedule-form'>
            <h3>New schedule</h3>
            <label htmlFor="farmname">Farm name:</label>
            <input name="farmname" id='farmname' type="text"/>
            <label htmlFor="duration">Duration:</label>
            <input type="number" name="duration" id='duration'/>
            <label htmlFor="saturation">Saturation:</label>
            <input type="text" name="saturation" id='saturation'/>
            <label htmlFor="frequency">Frequency:</label>
            <input type="number" name="frequency" id='frequency'/>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default Schedule;