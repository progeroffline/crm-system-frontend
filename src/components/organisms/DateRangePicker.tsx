import { useState } from 'react';
import 'flatpickr/dist/themes/light.css';
import DatePicker from 'react-datepicker';

interface DateRangePickerFieldProps {
  title: string;
  onSelect: (date: string[]) => void;
}

const DateRangePickerField: React.FC<DateRangePickerFieldProps> = ({ title, onSelect }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      rangeSeparator=" to "
    />
  );
};

export default DateRangePickerField;
