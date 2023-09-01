import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs"; 


function DatePickers() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("12:00");
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };

    return (
      
      <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Hora"
        dateFormat="MMMM d, yyyy h:mm aa"
        style={{
          fontSize: "16px", // Tamaño de fuente
          border: "1px solid #ccc", // Borde
          borderRadius: "4px", // Borde redondeado
          width: "200px", // Ancho
        }}
      />
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
  
    );
  }

  export default DatePickers;