import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const sortContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const presenter = new TripPresenter({
  filterContainer,
  sortContainer,
  pointsModel,
});

presenter.init();
