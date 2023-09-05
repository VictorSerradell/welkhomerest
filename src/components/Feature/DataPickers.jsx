import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-time-picker/dist/TimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Abre el modal automáticamente al montar el componente
    setIsModalOpen(true);
  }, []);

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.0)",
        borderRadius: "6px",
        padding: "80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "20px",
        color: "black",
        position: "relative", // Agrega esta propiedad
      }}
    >
      {isModalOpen && (
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.0)",
            padding: "10px",
            borderRadius: "4px",
            width: "100%",
            height: "auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#ffffff",
            }}
          >
            Selecciona Fecha
          </p>
          <DatePicker
            showIcon
            selected={selectedDate}
            onChange={handleDateChange}
            isClearable
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="MMMM d, yyyy h:mm aa"
            style={{
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "80%",
              height: "80%",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
