import { useRef, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

interface DateRangePickerFieldProps {
  label: string;
  confirmButtonLabel: string;
  onClickToConfirmButton?: (date?: DateRange) => void;
}

const DateRangePickerField: React.FC<DateRangePickerFieldProps> = ({
  label,
  confirmButtonLabel,
  onClickToConfirmButton,
}) => {
  const drawerToggleRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<DateRange | undefined>({ from: new Date(), to: new Date() });

  return (
    <div className="mr-2">
      <legend className="w-full fieldset-legend text-base">{label}</legend>
      <input id="account-drawer" type="checkbox" className="drawer-toggle" ref={drawerToggleRef} />
      <button
        popoverTarget="rdp-popover"
        className="input input-border text-center text-base-content/50 cursor-pointer"
        style={{ anchorName: '--rdp' } as React.CSSProperties}
      >
        <span className="w-full">
          {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
        </span>
      </button>
      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown flex flex-col overflow-hidden"
        style={{ positionAnchor: '--rdp' } as React.CSSProperties}
      >
        <DayPicker
          className="react-day-picker"
          mode="range"
          selected={date}
          onSelect={setDate}
          fixedWeeks
          required
          numberOfMonths={2}
          navLayout="around"
          footer={
            <button
              className="btn btn-primary w-full"
              onClick={() => {
                if (onClickToConfirmButton) {
                  onClickToConfirmButton(date);
                }
                const popover = document.getElementById('rdp-popover') as HTMLDivElement & {
                  hidePopover: () => void;
                };
                if (popover?.hidePopover) {
                  popover.hidePopover();
                }
              }}
            >
              {confirmButtonLabel}
            </button>
          }
        />
      </div>
    </div>
  );
};

export default DateRangePickerField;
