import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePickerComponent.scss';
 
const DateRangePickerComponent: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
 
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? undefined);
    setEndDate(end ?? undefined);
 
    if (start && end) {
      setIsOpen(false);
    }
  };
 
  const handleInputClick = () => {
    setIsOpen(true);
  };
 
  const formatDate =(date:Date | null) =>{
    if(!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric'});
 
  };
  const CustomInput = React.forwardRef<HTMLInputElement, any>(({ onClick, value }, ref) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        readOnly
        onClick={handleInputClick}
        placeholder="Select date "
        value={
          startDate && endDate
            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
            : 'Select date'
        }
        ref={ref}
        className="date-input"
      />
   
    </div>
  ));
 
  return (
    <div >
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
        customInput={<CustomInput />}
        shouldCloseOnSelect={false}
        minDate={new Date()}
      />
    </div>
  );
};
 
export default DateRangePickerComponent;