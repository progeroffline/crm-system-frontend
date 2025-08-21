import { StaffRatingModel } from '../../../types/model';

interface StaffRatingsTableRowProps {
  record: StaffRatingModel;
  maxRating: number;
}

const StaffRatingsTableRow: React.FC<StaffRatingsTableRowProps> = ({ record, maxRating }) => {
  const scaledRating = maxRating > 0 ? (record.rating / maxRating) * 5 : 0;
  const starRating = Math.round(scaledRating * 2) / 2;

  return (
    <tr className="hover align-middle">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={record.avatar} alt="Avatar" />
          </div>
        </div>
      </td>
      <td>{record.fullName}</td>
      <td>{record.role}</td>
      <td>
        <div
          className="tooltip tooltip-bottom"
          data-tip={`${record.rating} ( ${starRating.toFixed(1)} / 5.0 )`}
        >
          <div className="rating rating-md rating-half">
            <input type="radio" name={`rating-${record.id}`} className="rating-hidden" readOnly />
            {record.rating}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StaffRatingsTableRow;
