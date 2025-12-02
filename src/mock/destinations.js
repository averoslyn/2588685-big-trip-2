import { POINT_DESCRIPTIONS } from '../const';
import { getRandomArrayElement } from '../utils';

export const mockDestinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcaa',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=894304905',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=239050409',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Amsterdam',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=09349342',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=04938202',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=892982309',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcac',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Geneva',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=1923043',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcad',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Paris',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=625168816',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=654646231',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=985412365',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcae',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Nice',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=256300516',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
      {
        src: 'http://picsum.photos/300/200?r=300516731',
        description: getRandomArrayElement(POINT_DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcaf',
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Lisboa',
    pictures: [],
  },
];
