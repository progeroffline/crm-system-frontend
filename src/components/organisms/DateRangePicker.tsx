import { useState } from 'react';
import 'flatpickr/dist/themes/light.css';
import Flatpickr from 'react-flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

interface DateRangePickerFieldProps {
  title: string;
  onSelect: (date: string[]) => void;
}

const DateRangePickerField: React.FC<DateRangePickerFieldProps> = ({ title, onSelect }) => {
  const [state, setState] = useState({
    date: ['2016-10-10', '2016-10-20'],
  });

  return (
    <div className="flex flex-col">
      <legend className="w-full fieldset-legend text-base">{title}</legend>
      <Flatpickr
        className="input input-bordered"
        options={{
          dateFormat: 'd.m.Y',
          showMonths: 2,
          mode: 'range',
          static: true,
          locale: Russian,
        }}
        value={state.date}
        onChange={onSelect}
      />
    </div>
  );
};

export default DateRangePickerField;
