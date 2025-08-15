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

// =================================================================
// CRM TABLES DATA
// =================================================================

import {
  Model,
  Status,
  AssignedModel,
  MarketingModel,
  MarketingStatus,
  StaffRatingModel,
  StaffRole,
} from '../../../types/model';

// =================================================================
// DATA POOLS
// =================================================================

export const dataPools = {
  firstNames: ['Мария', 'Анна', 'Екатерина', 'Ольга', 'София', 'Виктория', 'Алиса'],
  lastNames: ['Иванова', 'Петрова', 'Смирнова', 'Кузнецова', 'Попова', 'Васильева', 'Соколова'],
  patronymics: ['Сергеевна', 'Андреевна', 'Алексеевна', 'Дмитриевна', 'Максимовна', 'Ивановна'],

  superAdmins: ['Иван Грозный', 'Екатерина Великая'],
  topAdmins: ['Александр Суворов', 'Михаил Кутузов', 'Георгий Жуков'],
  admins: ['Петр I', 'Николай II', 'Александр III'],
  operators: ['Юрий Гагарин', 'Валентина Терешкова', 'Герман Титов', 'Алексей Леонов'],
  marketingAdmins: ['Маркетолог-1', 'Маркетолог-2'],

  locations: ['Киев', 'Варшава', 'Лиссабон', 'Тбилиси'],
  trafficSources: ['Facebook', 'Instagram', 'TikTok', 'BongaCams'],
  sources: ['Реклама', 'Сарафан', 'Партнерка'],
  reasonsForLeaving: ['Проф. выгорание', 'Переезд', 'Личные причины', null],

  statuses: {
    model: ['работает', 'ушла', 'блок', 'удалена'] as Status[],
    marketing: ['работает', 'уволен', 'отдыхает', 'болеет'] as MarketingStatus[],
  },

  questionnaire: {
    notReadyOptions: ['Экстрим', 'Скат', 'Насилие', 'Анал', 'Ступни', 'Моча', ''],
    sexToysOptions: [
      'Дилдо',
      'Вибратор',
      'Анальная пробка',
      'Вибромассажер',
      'Все виды',
      'Нет',
      'Стеклянный дилдо',
    ],
  },
};

// =================================================================
// BASE GENERATORS
// =================================================================

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomBoolean = (): boolean => Math.random() > 0.5;
const getRandomId = (): number => new Date().getTime() + Math.random();

const generateSinglePerson = () => ({
  id: getRandomId(),
  fullName: `${getRandomElement(dataPools.lastNames)} ${getRandomElement(dataPools.firstNames)} ${getRandomElement(dataPools.patronymics)}`,
});

const generateSingleFakeModel = (): Model => {
  const person = generateSinglePerson();
  const randomImgId = Math.floor(Math.random() * 70) + 1;

  return {
    ...person,
    avatar: `https://i.pravatar.cc/150?img=${randomImgId}`,
    ml: `ML-${getRandomInt(10000, 99999)}`,
    status: getRandomElement(dataPools.statuses.model),
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
      notReadyFor: getRandomElement(dataPools.questionnaire.notReadyOptions),
      sexToys: getRandomElement(dataPools.questionnaire.sexToysOptions),
      customs: getRandomBoolean(),
      videoCalls: getRandomBoolean(),
    },
  };
};

// =================================================================
// EXPORTED GENERATORS
// =================================================================

/** Generates data for the main Models table */
export const generateFakeModelsData = (count: number): Model[] => {
  return Array.from({ length: count }, generateSingleFakeModel);
};

/** Generates data for the Bindings (Assigned Models) table */
export const generateFakeAssignedModelsData = (count: number): AssignedModel[] => {
  return Array.from({ length: count }, () => {
    const baseModel = generateSingleFakeModel();
    const registrationDate = new Date(Date.now() - getRandomInt(0, 365) * 24 * 60 * 60 * 1000);
    return {
      ...baseModel,
      questionnaire: undefined, // remove questionnaire
      total: getRandomInt(0, 5000),
      forecast: getRandomInt(0, 8000),
      registrationDate: registrationDate.toISOString().split('T')[0],
      superAdmin: getRandomElement([...dataPools.superAdmins, null]),
      topAdmin: getRandomElement([...dataPools.topAdmins, null]),
      admin: getRandomElement([...dataPools.admins, null]),
      operator: getRandomElement([...dataPools.operators, null]),
    };
  });
};

/** Generates data for the Marketing table */
export const generateFakeMarketingData = (count: number): MarketingModel[] => {
  const operatorsForReferral = Array.from({ length: 10 }, () => ({
    fullName: `${getRandomElement(dataPools.lastNames)} ${getRandomElement(dataPools.firstNames)}`,
    id: getRandomId(),
  }));

  return Array.from({ length: count }, () => {
    const person = generateSinglePerson();
    const hireDate = new Date(Date.now() - getRandomInt(0, 730) * 24 * 60 * 60 * 1000);
    const status = getRandomElement(dataPools.statuses.marketing);
    const fireDate =
      status === 'уволен'
        ? new Date(hireDate.getTime() + getRandomInt(1, 365) * 24 * 60 * 60 * 1000)
        : null;

    return {
      ...person,
      status,
      hireDate: hireDate.toISOString().split('T')[0],
      fireDate: fireDate ? fireDate.toISOString().split('T')[0] : null,
      workDays: fireDate
        ? Math.floor((fireDate.getTime() - hireDate.getTime()) / (1000 * 3600 * 24))
        : Math.floor((Date.now() - hireDate.getTime()) / (1000 * 3600 * 24)),
      reasonForLeaving: getRandomElement(dataPools.reasonsForLeaving),
      contactTelegram: `@${Math.random().toString(36).substring(7)}`,
      location: getRandomElement(dataPools.locations),
      trafficSource: getRandomElement(dataPools.trafficSources),
      source: getRandomElement(dataPools.sources),
      administrator: getRandomElement(dataPools.marketingAdmins),
      referral: getRandomBoolean() ? getRandomElement(operatorsForReferral) : null,
      superTopAdmin: getRandomElement([...dataPools.superAdmins, null]),
      topAdmin: getRandomElement([...dataPools.topAdmins, null]),
    };
  });
};

/** Generates data for the Staff Ratings table */
export const generateFakeStaffRatingData = (count: number): StaffRatingModel[] => {
  const roles: StaffRole[] = ['Супер админ', 'Топ админ', 'Администратор', 'Оператор', 'HR'];
  const namePool = {
    'Супер админ': dataPools.superAdmins,
    'Топ админ': dataPools.topAdmins,
    Администратор: dataPools.admins,
    Оператор: dataPools.operators,
    HR: dataPools.marketingAdmins, // Assuming HRs are from marketing admins pool
  };

  return Array.from({ length: count }, () => {
    const role = getRandomElement(roles);
    return {
      id: getRandomId(),
      fullName: getRandomElement(namePool[role]),
      role,
      rating: getRandomInt(1, 1000),
    };
  });
};

// --- Data for LeavingsTable ---
import { LeavingModel, LeavingType } from '../../../types/model';

const translators = ['Переводчик-1', 'Переводчик-2', 'Переводчик-3'];
const leavingTypes: LeavingType[] = ['По собственному', 'Уволен', 'Перевод'];

const generateSingleLeaving = (): LeavingModel => {
  const hireDate = new Date(Date.now() - getRandomInt(30, 1000) * 24 * 60 * 60 * 1000);
  const fireDate = new Date(hireDate.getTime() + getRandomInt(30, 365) * 24 * 60 * 60 * 1000);
  const workDays = Math.floor((fireDate.getTime() - hireDate.getTime()) / (1000 * 3600 * 24));
  const balanceCurrent = getRandomInt(0, 500);
  const balancePrevious = getRandomInt(100, 2000);
  const balanceWayBack = getRandomInt(100, 2000);

  return {
    id: getRandomId(),
    fullName: `${getRandomElement(dataPools.lastNames)} ${getRandomElement(dataPools.firstNames)} ${getRandomElement(dataPools.patronymics)}`,
    hireDate: hireDate.toISOString().split('T')[0],
    fireDate: fireDate.toISOString().split('T')[0],
    workDays,
    leavingType: getRandomElement(leavingTypes),
    contactTelegram: `@${Math.random().toString(36).substring(7)}`,
    location: getRandomElement(dataPools.locations),
    superTopAdmin: getRandomElement([...dataPools.superAdmins, null]),
    topAdmin: getRandomElement([...dataPools.topAdmins, null]),
    administrator: getRandomElement([...dataPools.admins, null]),
    translator: getRandomElement([...translators, null]),
    balance: {
      current: balanceCurrent,
      previous: balancePrevious,
      позапрошлый: balanceWayBack,
      total: balanceCurrent + balancePrevious + balanceWayBack,
    },
  };
};

export const generateFakeLeavingsData = (count: number): LeavingModel[] => {
  return Array.from({ length: count }, generateSingleLeaving);
};

// --- Data for UsersTable ---
import { UserModel, UserRole } from '../../../types/model';

const userRoles: UserRole[] = [
  'superAdmin',
  'topAdmin',
  'admin',
  'operator',
  'hr',
  'translator',
  'user',
];

const generateSingleUser = (): UserModel => {
  const lastLoginDate = new Date(Date.now() - getRandomInt(0, 30) * 24 * 60 * 60 * 1000);
  return {
    id: getRandomId(),
    username: `${getRandomElement(dataPools.lastNames)}_${getRandomInt(10, 99)}`,
    role: getRandomElement(userRoles),
    lastLogin: lastLoginDate.toISOString(),
    balance: getRandomInt(0, 10000),
  };
};

export const generateFakeUsersData = (count: number): UserModel[] => {
  return Array.from({ length: count }, generateSingleUser);
};
