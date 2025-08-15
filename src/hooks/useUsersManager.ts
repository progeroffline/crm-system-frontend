// src/hooks/useUsersManager.ts

import { useState } from 'react';
import { UserModel } from '../types/model';

export const useUsersManager = (initialData: UserModel[]) => {
  const [data, setData] = useState<UserModel[]>(initialData);
  const [editingRecord, setEditingRecord] = useState<UserModel | null>(null);

  const handleEdit = (record: UserModel) => setEditingRecord({ ...record });
  const handleCancelEdit = () => setEditingRecord(null);

  const handleSaveEdit = () => {
    if (editingRecord) {
      setData(data.map((rec) => (rec.id === editingRecord.id ? editingRecord : rec)));
      setEditingRecord(null);
    }
  };
  
  const handleDelete = (id: number) => {
      if (window.confirm('Вы уверены, что хотите удалить этого пользователя?')) {
          setData(data.filter(user => user.id !== id));
      }
  }

  return {
    data,
    editingRecord,
    setEditingRecord,
    handleEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
  };
};
