// src/hooks/useLeavingsManager.ts

import { useState } from 'react';
import { LeavingModel } from '../types/model';

export const useLeavingsManager = (initialData: LeavingModel[]) => {
  const [data, setData] = useState<LeavingModel[]>(initialData);
  const [editingRecord, setEditingRecord] = useState<LeavingModel | null>(null);

  const handleEdit = (record: LeavingModel) => setEditingRecord({ ...record });
  const handleCancelEdit = () => setEditingRecord(null);

  const handleSaveEdit = () => {
    if (editingRecord) {
      setData(data.map((rec) => (rec.id === editingRecord.id ? editingRecord : rec)));
      setEditingRecord(null);
    }
  };

  return {
    data,
    editingRecord,
    setEditingRecord,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
  };
};
