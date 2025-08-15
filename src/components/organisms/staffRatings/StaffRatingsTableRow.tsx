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
      <td>{record.fullName}</td>
      <td>{record.role}</td>
      <td>
        <div
          className="tooltip tooltip-bottom"
          data-tip={`${record.rating} ( ${starRating.toFixed(1)} / 5.0 )`}
        >
          <div className="rating rating-md rating-half">
            <input type="radio" name={`rating-${record.id}`} className="rating-hidden" readOnly />
            {[...Array(10)].map((_, index) => {
              const value = (index + 1) / 2;
              return (
                <input
                  key={index}
                  type="radio"
                  name={`rating-${record.id}`}
                  className={`mask mask-star-2 ${index % 2 === 0 ? 'mask-half-1' : 'mask-half-2'} bg-orange-400`}
                  checked={starRating === value}
                  readOnly
                />
              );
            })}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StaffRatingsTableRow;
