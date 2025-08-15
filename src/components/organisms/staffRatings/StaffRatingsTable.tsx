import { useMemo } from 'react';
import { StaffRatingModel } from '../../../types/model';
import StaffRatingsTableRow from './StaffRatingsTableRow';

interface StaffRatingsTableProps {
  initialData: StaffRatingModel[];
}

const StaffRatingsTable: React.FC<StaffRatingsTableProps> = ({ initialData }) => {
  const maxRating = useMemo(
    () => initialData.reduce((max, item) => (item.rating > max ? item.rating : max), 0),
    [initialData]
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
            <h1 className="text-2xl font-bold">Рейтинг</h1>
            <p className="text-base-content/70">Рейтинг сотрудников по различным показателям производительности.</p>
        </div>
      </div>

      <div className="bg-base-100 shadow-xl rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="align-middle">
                <th>ФИО</th>
                <th>Роль</th>
                <th>Рейтинг</th>
              </tr>
            </thead>
            <tbody>
              {initialData.map((record) => (
                <StaffRatingsTableRow key={record.id} record={record} maxRating={maxRating} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffRatingsTable;
