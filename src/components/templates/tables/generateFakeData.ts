type MonthDailySalaryWithTimeShift = {
  id: number;
  operatorName: string;
  [key: string]: string | number | null;
};

// helpers
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number) {
  return Math.random() > 0.2 ? +(Math.random() * (max - min) + min).toFixed(2) : null;
}

export function generateMonthDailySalaries(
  daysInMonth: number,
  operatorsCount: number
): MonthDailySalaryWithTimeShift[] {
  const shiftLabels = ['I', 'II', 'III'];
  const adminNames = ['Deadpool', 'Creator'];

  const data: MonthDailySalaryWithTimeShift[] = [];

  for (let opIndex = 1; opIndex <= operatorsCount; opIndex++) {
    const row: MonthDailySalaryWithTimeShift = {
      id: opIndex,
      operatorName: `ОP ${String.fromCharCode(64 + opIndex)}`,
    };

    for (let day = 1; day <= daysInMonth; day++) {
      for (const shift of shiftLabels) {
        // Кол-во часов
        row[`timeShiftNumber_${day}_${shift}`] = getRandomInt(1, 8);

        // Две зарплаты
        for (let salaryIndex = 0; salaryIndex < 2; salaryIndex++) {
          const salary = getRandomFloat(30, 60);
          row[`adminSalary_${day}_${shift}_${salaryIndex}`] = salary;

          // Два администратора
          for (let adminIndex = 0; adminIndex < adminNames.length; adminIndex++) {
            row[`adminName_${day}_${shift}_${adminIndex}`] = adminNames[adminIndex];
          }
          for (let adminIndex = 0; adminIndex < adminNames.length; adminIndex++) {
            row[`adminName_${day}_${shift}_${adminIndex}`] = getRandomFloat(0, 4000);
          }
        }
      }
    }

    data.push(row);
  }

  return data;
}

type DayNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type YearDailySalary = {
  id: number;
  operatorName: string;
  predicate: number;
} & {
  [K in `dayNumber_${DayNumber}`]: number | null;
};

export function generateYearDailySalaries(
  operatorsCount: number,
  daysInMonth: number = 31
): YearDailySalary[] {
  const data: YearDailySalary[] = [];

  for (let i = 1; i <= operatorsCount; i++) {
    const row: any = {
      id: i,
      predicate: 0,
      operatorName: `OP ${String.fromCharCode(64 + i)}`, // Оператор А, Б, В...
    };

    for (let day = 1; day <= daysInMonth; day++) {
      const daySalary = getRandomFloat(0, 4000);
      row[`dayNumber_${day}`] = daySalary;
      if (typeof daySalary === 'number') row.predicate += daySalary;
    }

    data.push(row as YearDailySalary);
  }

  return data;
}

import { Model, Status, AssignedModel } from '../../../types/model';

// --- Data for ModelsTable ---
const firstNames = ['Мария', 'Анна', 'Екатерина', 'Ольга', 'София', 'Виктория', 'Алиса'];
const lastNames = [
  'Иванова',
  'Петрова',
  'Смирнова',
  'Кузнецова',
  'Попова',
  'Васильева',
  'Соколова',
];
const patronymics = [
  'Сергеевна',
  'Андреевна',
  'Алексеевна',
  'Дмитриевна',
  'Максимовна',
  'Ивановна',
];
const statuses: Status[] = ['работает', 'ушла', 'блок', 'удалена'];
const notReadyOptions = ['Экстрим', 'Скат', 'Насилие', 'Анал', 'Ступни', 'Моча', ''];
const sexToysOptions = [
  'Дилдо',
  'Вибратор',
  'Анальная пробка',
  'Вибромассажер',
  'Все виды',
  'Нет',
  'Стеклянный дилдо',
];

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomBoolean = (): boolean => Math.random() > 0.5;
const getRandomId = (): number => new Date().getTime() + Math.random();

const generateSingleFakeModel = (): Model => {
  const fullName = `${getRandomElement(lastNames)} ${getRandomElement(firstNames)} ${getRandomElement(patronymics)}`;
  const randomImgId = Math.floor(Math.random() * 70) + 1;

  return {
    id: getRandomId(),
    avatar: `https://i.pravatar.cc/150?img=${randomImgId}`,
    fullName,
    ml: `ML-${Math.floor(Math.random() * 90000) + 10000}`,
    status: getRandomElement(statuses),
    mailing: getRandomBoolean(),
    questionnaire: {
      vaginalMasturbationToys: getRandomBoolean(),
      vaginalMasturbationFingers: getRandomBoolean(),
      analMasturbationToys: getRandomBoolean(),
      analMasturbationFingers: getRandomBoolean(),
      sexWithMan: getRandomBoolean(),
      oralSexToy: getRandomBoolean(),
      squirtVideo: getRandomBoolean(),
      feet: getRandomBoolean(),
      peeVideo: getRandomBoolean(),
      periodVideo: getRandomBoolean(),
      minEnglish: getRandomBoolean(),
      notReadyFor: getRandomElement(notReadyOptions),
      sexToys: getRandomElement(sexToysOptions),
      customs: getRandomBoolean(),
      videoCalls: getRandomBoolean(),
    },
  };
};

export const generateFakeModelsData = (count: number): Model[] => {
  return Array.from({ length: count }, generateSingleFakeModel);
};

// --- Data for BindingsModelsTable ---
export const superAdmins = ['Иван Грозный', 'Екатерина Великая'];
export const topAdmins = ['Александр Суворов', 'Михаил Кутузов', 'Георгий Жуков'];
export const admins = ['Петр I', 'Николай II', 'Александр III'];
export const operators = ['Юрий Гагарин', 'Валентина Терешкова', 'Герман Титов', 'Алексей Леонов'];

const generateSingleAssignedModel = (): AssignedModel => {
  const baseModel = generateSingleFakeModel();
  const registrationDate = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);

  return {
    id: baseModel.id,
    avatar: baseModel.avatar,
    fullName: baseModel.fullName,
    ml: baseModel.ml,
    status: baseModel.status,
    mailing: baseModel.mailing,
    total: Math.floor(Math.random() * 5000),
    forecast: Math.floor(Math.random() * 8000),
    registrationDate: registrationDate.toISOString().split('T')[0],
    superAdmin: getRandomElement([...superAdmins, null]),
    topAdmin: getRandomElement([...topAdmins, null]),
    admin: getRandomElement([...admins, null]),
    operator: getRandomElement([...operators, null]),
  };
};

export const generateFakeAssignedModelsData = (count: number): AssignedModel[] => {
  return Array.from({ length: count }, generateSingleAssignedModel);
};
