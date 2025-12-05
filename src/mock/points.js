import { getRandomInteger, getRandomArrayElement } from '../utils.js';

export const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808a',
    basePrice: getRandomInteger(300, 500),
    dateFrom: '2019-07-10T22:55:56.845Z',
    date: '2019-08-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcae',
    favorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
    ],
    type: 'taxi',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808b',
    basePrice: getRandomInteger(500, 1500),
    dateFrom: '2019-08-10T22:55:56.845Z',
    date: '2019-09-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcae',
    favorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa50',
      'b4c3e4e6-9053-42ce-b747-e281314baa51',
      'b4c3e4e6-9053-42ce-b747-e281314baa52',
    ],
    type: 'check-in',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomInteger(1500, 2500),
    dateFrom: '2019-09-10T22:55:56.845Z',
    date: '2019-09-11T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcad',
    favorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa47',
      'b4c3e4e6-9053-42ce-b747-e281314baa46',
      'b4c3e4e6-9053-42ce-b747-e281314baa48',
    ],
    type: 'flight',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: getRandomInteger(100, 150),
    dateFrom: '2019-09-11T22:55:56.845Z',
    date: '2019-09-12T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcad',
    favorite: true,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa33'],
    type: 'bus',
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808e',
    basePrice: getRandomInteger(500, 1500),
    dateFrom: '2019-09-12T22:55:56.845Z',
    date: '2019-09-13T11:22:13.375Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcac',
    favorite: false,
    offers: [],
    type: 'restaurant',
  },
];

function getRandomPoints() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoints };
