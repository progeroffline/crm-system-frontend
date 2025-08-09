import DataTable, { DataTableColumnDefinition } from '@/components/complex/DataTable';
import Stats from '@/components/complex/Stats';
import CurveArrowUp from '@/components/icons/CurveArrowUp';
import DollarIcon from '@/components/icons/Dollar';
import SearchIcon from '@/components/icons/Search';
import SearchInputField from '@/components/inputs/Search';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  job: string;
  company: string;
  location: string;
  lastLogin: string;
  favoriteColor: string;
}

const Statistics: React.FC = () => {
  const suggestions: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  const tableColumns: DataTableColumnDefinition<Person>[] = [
    { accessorKey: 'id', header: '#' },
    {
      header: 'ФИО',
      columns: [
        { accessorKey: 'firstName', header: 'Имя' },
        { accessorKey: 'lastName', header: 'Фамилия' },
      ],
    },
    { accessorKey: 'job', header: 'Работа' },
    { accessorKey: 'company', header: 'Компания' },
    { accessorKey: 'location', header: 'Локация' },
    { accessorKey: 'lastLogin', header: 'Последний вход' },
    { accessorKey: 'favoriteColor', header: 'Любимый цвет' },
  ];
  const tableRows = [
    {
      id: 1,
      firstName: 'Ertha',
      lastName: 'Jouanet',
      job: 'Marketing Assistant',
      company: 'Blogspan',
      location: 'Angered',
      lastLogin: '3/26/2025',
      favoriteColor: 'Aquamarine',
    },
    {
      id: 2,
      firstName: 'Kristan',
      lastName: 'Croix',
      job: 'Programmer Analyst IV',
      company: 'Zoonoodle',
      location: 'Dubti',
      lastLogin: '8/26/2024',
      favoriteColor: 'Purple',
    },
    {
      id: 3,
      firstName: 'Roberto',
      lastName: 'Chadwyck',
      job: 'Food Chemist',
      company: 'Realpoint',
      location: 'Gómez',
      lastLogin: '9/19/2024',
      favoriteColor: 'Khaki',
    },
    {
      id: 4,
      firstName: 'Laurie',
      lastName: 'Smowton',
      job: 'Environmental Specialist',
      company: 'Roomm',
      location: 'Oakland',
      lastLogin: '5/18/2025',
      favoriteColor: 'Teal',
    },
    {
      id: 5,
      firstName: 'Lucho',
      lastName: 'Louca',
      job: 'Pharmacist',
      company: 'DabZ',
      location: 'Mergayu',
      lastLogin: '11/11/2024',
      favoriteColor: 'Khaki',
    },
    {
      id: 6,
      firstName: 'Cyndia',
      lastName: 'Cato',
      job: 'Technical Writer',
      company: 'Edgeclub',
      location: 'Lazaro Cardenas',
      lastLogin: '4/30/2025',
      favoriteColor: 'Blue',
    },
    {
      id: 7,
      firstName: 'Benedick',
      lastName: 'Pauer',
      job: 'Paralegal',
      company: 'Yabox',
      location: 'Omiš',
      lastLogin: '8/8/2025',
      favoriteColor: 'Mauv',
    },
    {
      id: 8,
      firstName: 'Marga',
      lastName: 'Knocker',
      job: 'Data Coordinator',
      company: 'Mudo',
      location: 'Plagiári',
      lastLogin: '7/20/2025',
      favoriteColor: 'Red',
    },
    {
      id: 9,
      firstName: 'Weston',
      lastName: 'Sheards',
      job: 'Programmer II',
      company: 'Wordtune',
      location: 'Changtu',
      lastLogin: '12/24/2024',
      favoriteColor: 'Indigo',
    },
    {
      id: 10,
      firstName: 'Urban',
      lastName: 'Dragge',
      job: 'Assistant Manager',
      company: 'Skipfire',
      location: 'Kičevo',
      lastLogin: '3/14/2025',
      favoriteColor: 'Violet',
    },
    {
      id: 11,
      firstName: 'Perry',
      lastName: 'Tytcomb',
      job: 'Graphic Designer',
      company: 'Meevee',
      location: 'Khān Arnabah',
      lastLogin: '8/15/2024',
      favoriteColor: 'Orange',
    },
    {
      id: 12,
      firstName: 'Adrianna',
      lastName: 'Henrique',
      job: 'Design Engineer',
      company: 'Yata',
      location: 'Mīr Bachah Kōṯ',
      lastLogin: '10/8/2024',
      favoriteColor: 'Blue',
    },
    {
      id: 13,
      firstName: 'Peta',
      lastName: 'Wintringham',
      job: 'Clinical Specialist',
      company: 'Roombo',
      location: 'Weiguo',
      lastLogin: '7/14/2025',
      favoriteColor: 'Fuscia',
    },
    {
      id: 14,
      firstName: 'Brynne',
      lastName: 'Shillington',
      job: 'Speech Pathologist',
      company: 'Youtags',
      location: 'Honiara',
      lastLogin: '9/12/2024',
      favoriteColor: 'Orange',
    },
    {
      id: 15,
      firstName: 'Cordi',
      lastName: 'Trousdale',
      job: 'Environmental Specialist',
      company: 'Jabbersphere',
      location: 'La Roche-sur-Yon',
      lastLogin: '11/24/2024',
      favoriteColor: 'Turquoise',
    },
    {
      id: 16,
      firstName: 'Kelley',
      lastName: 'Goldthorpe',
      job: 'Engineer IV',
      company: 'Linkbuzz',
      location: 'Yuxin',
      lastLogin: '9/6/2024',
      favoriteColor: 'Crimson',
    },
    {
      id: 17,
      firstName: 'Dominique',
      lastName: 'Tenniswood',
      job: 'Structural Engineer',
      company: 'Devpulse',
      location: 'Bokani',
      lastLogin: '5/2/2025',
      favoriteColor: 'Goldenrod',
    },
    {
      id: 18,
      firstName: 'Celine',
      lastName: 'Brimilcome',
      job: 'Quality Engineer',
      company: 'Miboo',
      location: 'Shuangjie',
      lastLogin: '8/11/2024',
      favoriteColor: 'Crimson',
    },
    {
      id: 19,
      firstName: 'Clem',
      lastName: 'Brandes',
      job: 'Structural Analysis Engineer',
      company: 'Chatterpoint',
      location: 'Bol’shoy Kamen’',
      lastLogin: '12/22/2024',
      favoriteColor: 'Orange',
    },
    {
      id: 20,
      firstName: 'Cora',
      lastName: 'Iacovelli',
      job: 'Senior Cost Accountant',
      company: 'Babblestorm',
      location: 'Vlycháda',
      lastLogin: '4/24/2025',
      favoriteColor: 'Crimson',
    },
    {
      id: 21,
      firstName: 'Toni',
      lastName: 'MacGrath',
      job: 'Senior Quality Engineer',
      company: 'Tanoodle',
      location: 'Dawan',
      lastLogin: '2/27/2025',
      favoriteColor: 'Puce',
    },
    {
      id: 22,
      firstName: 'Allie',
      lastName: 'Merman',
      job: 'Social Worker',
      company: 'Voonder',
      location: 'Beskolen',
      lastLogin: '9/6/2024',
      favoriteColor: 'Pink',
    },
    {
      id: 23,
      firstName: 'Adolphus',
      lastName: 'Hocking',
      job: 'Chief Design Engineer',
      company: 'Eayo',
      location: 'Solna',
      lastLogin: '1/3/2025',
      favoriteColor: 'Teal',
    },
    {
      id: 24,
      firstName: 'Ettie',
      lastName: 'Chuter',
      job: 'Structural Analysis Engineer',
      company: 'Meevee',
      location: 'Semikarakorsk',
      lastLogin: '5/13/2025',
      favoriteColor: 'Violet',
    },
    {
      id: 25,
      firstName: 'Griz',
      lastName: 'Karlicek',
      job: 'Marketing Manager',
      company: 'Gabspot',
      location: 'Rumboci',
      lastLogin: '4/1/2025',
      favoriteColor: 'Yellow',
    },
    {
      id: 26,
      firstName: 'Goldie',
      lastName: 'Le Page',
      job: 'Mechanical Systems Engineer',
      company: 'Cogidoo',
      location: 'Paris La Défense',
      lastLogin: '2/23/2025',
      favoriteColor: 'Fuscia',
    },
    {
      id: 27,
      firstName: 'Vinny',
      lastName: 'Brolly',
      job: 'Web Designer II',
      company: 'Mudo',
      location: 'Ulundi',
      lastLogin: '11/21/2024',
      favoriteColor: 'Aquamarine',
    },
    {
      id: 28,
      firstName: 'Bran',
      lastName: 'Wadlow',
      job: 'Technical Writer',
      company: 'Talane',
      location: 'Bechlín',
      lastLogin: '3/25/2025',
      favoriteColor: 'Violet',
    },
    {
      id: 29,
      firstName: 'Kile',
      lastName: 'Sidle',
      job: 'Assistant Professor',
      company: 'Geba',
      location: 'Qingfa',
      lastLogin: '4/26/2025',
      favoriteColor: 'Turquoise',
    },
    {
      id: 30,
      firstName: 'Cordi',
      lastName: 'Destouche',
      job: 'GIS Technical Architect',
      company: 'Minyx',
      location: 'Doumen',
      lastLogin: '12/3/2024',
      favoriteColor: 'Khaki',
    },
    {
      id: 31,
      firstName: 'Alyson',
      lastName: 'Pattie',
      job: 'Financial Analyst',
      company: 'Wikibox',
      location: 'Jeżów',
      lastLogin: '6/2/2025',
      favoriteColor: 'Blue',
    },
    {
      id: 32,
      firstName: 'Ricca',
      lastName: 'Dimitriou',
      job: 'Social Worker',
      company: 'Oyoyo',
      location: 'Pyatovskiy',
      lastLogin: '3/5/2025',
      favoriteColor: 'Mauv',
    },
    {
      id: 33,
      firstName: 'Lauryn',
      lastName: 'Shower',
      job: 'Junior Executive',
      company: 'Fadeo',
      location: 'Stockholm',
      lastLogin: '2/26/2025',
      favoriteColor: 'Crimson',
    },
    {
      id: 34,
      firstName: 'Gunther',
      lastName: 'Challis',
      job: 'Financial Analyst',
      company: 'Mycat',
      location: 'Duyang',
      lastLogin: '4/29/2025',
      favoriteColor: 'Crimson',
    },
    {
      id: 35,
      firstName: 'Cinda',
      lastName: 'Abbe',
      job: 'Professor',
      company: 'Yakijo',
      location: 'Bagansiapiapi',
      lastLogin: '3/14/2025',
      favoriteColor: 'Violet',
    },
    {
      id: 36,
      firstName: 'Boyce',
      lastName: 'Poolman',
      job: 'Operator',
      company: 'Youopia',
      location: 'Chakwāl',
      lastLogin: '2/27/2025',
      favoriteColor: 'Puce',
    },
    {
      id: 37,
      firstName: 'Neall',
      lastName: 'Sebyer',
      job: 'Data Coordinator',
      company: 'Kare',
      location: 'Xibër-Murrizë',
      lastLogin: '9/8/2024',
      favoriteColor: 'Purple',
    },
    {
      id: 38,
      firstName: 'Gerti',
      lastName: 'Critchley',
      job: 'Executive Secretary',
      company: 'Camimbo',
      location: 'Ödeshög',
      lastLogin: '8/12/2024',
      favoriteColor: 'Mauv',
    },
    {
      id: 39,
      firstName: 'Moishe',
      lastName: 'McParlin',
      job: 'Occupational Therapist',
      company: 'Dabtype',
      location: 'Velké Meziříčí',
      lastLogin: '1/14/2025',
      favoriteColor: 'Red',
    },
    {
      id: 40,
      firstName: 'Sonnie',
      lastName: 'Craik',
      job: 'Human Resources Manager',
      company: 'Kare',
      location: 'Mamasa',
      lastLogin: '2/26/2025',
      favoriteColor: 'Goldenrod',
    },
    {
      id: 41,
      firstName: 'Ernesta',
      lastName: 'Lipyeat',
      job: 'Data Coordinator',
      company: 'Rhyloo',
      location: 'Pataias',
      lastLogin: '10/1/2024',
      favoriteColor: 'Puce',
    },
    {
      id: 42,
      firstName: 'Kelli',
      lastName: 'Durbridge',
      job: 'Senior Cost Accountant',
      company: 'Livepath',
      location: 'Kostarea Satu',
      lastLogin: '5/18/2025',
      favoriteColor: 'Khaki',
    },
    {
      id: 43,
      firstName: 'Franklin',
      lastName: 'Bottelstone',
      job: 'Environmental Specialist',
      company: 'Agivu',
      location: 'Yuecheng',
      lastLogin: '6/7/2025',
      favoriteColor: 'Puce',
    },
    {
      id: 44,
      firstName: 'Rosana',
      lastName: 'Suttie',
      job: 'Nurse Practicioner',
      company: 'Tavu',
      location: 'Sanjiang',
      lastLogin: '8/12/2024',
      favoriteColor: 'Goldenrod',
    },
    {
      id: 45,
      firstName: 'Paige',
      lastName: 'Hext',
      job: 'Occupational Therapist',
      company: 'Yodo',
      location: 'Obanazawa',
      lastLogin: '8/14/2024',
      favoriteColor: 'Purple',
    },
    {
      id: 46,
      firstName: 'Zea',
      lastName: 'Daviot',
      job: 'Research Assistant I',
      company: 'Yadel',
      location: 'Mont-Royal',
      lastLogin: '2/25/2025',
      favoriteColor: 'Purple',
    },
    {
      id: 47,
      firstName: 'Maddie',
      lastName: 'Petyakov',
      job: 'Senior Quality Engineer',
      company: 'Oyoloo',
      location: 'Veruela',
      lastLogin: '6/10/2025',
      favoriteColor: 'Teal',
    },
    {
      id: 48,
      firstName: 'Locke',
      lastName: 'Bonicelli',
      job: 'Senior Financial Analyst',
      company: 'Jatri',
      location: 'Wadung',
      lastLogin: '7/4/2025',
      favoriteColor: 'Pink',
    },
    {
      id: 49,
      firstName: 'Jack',
      lastName: 'Ducket',
      job: 'Software Consultant',
      company: 'Demizz',
      location: 'Liushan',
      lastLogin: '10/13/2024',
      favoriteColor: 'Teal',
    },
    {
      id: 50,
      firstName: 'Stefania',
      lastName: 'Pinnington',
      job: 'Director of Sales',
      company: 'Yoveo',
      location: 'Ngangguk',
      lastLogin: '2/28/2025',
      favoriteColor: 'Yellow',
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="flex flex-row w-1/2 items-end justify-between pr-2">
        <SearchInputField
          label="Период"
          placeholder="Выберите период..."
          className="mr-2"
          suggestions={suggestions}
        />
        <SearchInputField
          label="Оператор"
          placeholder="Выберите оператора..."
          className="mr-2"
          suggestions={suggestions}
        />
        <SearchInputField
          label="Смена"
          placeholder="Выберите смену..."
          className="mr-2"
          suggestions={suggestions}
        />
        <button className="btn btn-primary">
          <SearchIcon />
          Поиск
        </button>
      </div>
      <div className="flex flex-row mt-4">
        <Stats
          className={'mr-4 flex-1'}
          icon={<DollarIcon />}
          title="Баланс"
          value={10500}
          description="Ваш заработок за этот месяц"
        />
        <Stats
          className={'flex-1'}
          icon={<DollarIcon />}
          title="Прогноз"
          value={9304}
          descriptionIcon={<CurveArrowUp />}
          description="Прогноз заработка на следующий месяц"
        />
      </div>
      <div className="mt-4">
        <DataTable columns={tableColumns} data={tableRows} />
      </div>
    </div>
  );
};

export default Statistics;
