import React, { useState } from "react";
import DatePicker from "react-datepicker";


function DatePickers() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    return (
      <div>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>
    );
  }

  export default DatePickers;