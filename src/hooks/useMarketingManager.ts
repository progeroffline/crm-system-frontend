import { useState } from 'react';
import { MarketingModel } from '../types/model';

export const useMarketingManager = (initialData: MarketingModel[]) => {
  const [data, setData] = useState<MarketingModel[]>(initialData);
  const [editingRecord, setEditingRecord] = useState<MarketingModel | null>(null);

  const isEditing = !!editingRecord;

  const handleEdit = (record: MarketingModel) => setEditingRecord({ ...record });
  const handleCancelEdit = () => setEditingRecord(null);

  const handleSaveEdit = () => {
    if (editingRecord) {
      setData(data.map((rec) => (rec.id === editingRecord.id ? editingRecord : rec)));
      setEditingRecord(null);
    }
  };

  const handleDelete = (id: number | null) => {
    if (id !== null && window.confirm('Вы уверены, что хотите удалить эту модель?')) {
      setData(data.filter((record) => record.id !== id));
    }
  };
  return {
    data,
    editingRecord,
    setEditingRecord,
    isEditing,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
  };
};
