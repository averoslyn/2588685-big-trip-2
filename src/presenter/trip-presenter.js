import { render, RenderPosition } from '../render.js';
import CreateFormPointView from '../view/form-point-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import TravelPointView from '../view/point-item-view.js';
import PointsListView from '../view/point-list-view.js';

export default class TripPresenter {
  constructor({ filterContainer, sortContainer, pointsModel, mockDestinations, mockOffers, defaultPoint }) {
    this.filterContainer = filterContainer;
    this.sortContainer = sortContainer;
    this.pointsModel = pointsModel;
    this.destinations = mockDestinations;
    this.offers = mockOffers;
    this.defaultPoint = defaultPoint;
    this.pointsList = new PointsListView();
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinations];
    this.offers = [...this.offers];
    this.emptyPoint = this.defaultPoint();


    render(new FilterView, this.filterContainer);
    render(new SortView, this.sortContainer);
    render(this.pointsList, this.sortContainer, RenderPosition.BEFOREEND);

    render(new CreateFormPointView({
      point: this.points[0],
      destinations: this.destinations,
      offers: this.offers }), this.pointsList.getElement());

    render(new CreateFormPointView({
      point: this.emptyPoint,
      destinations: this.destinations,
      offers: this.offers }), this.pointsList.getElement());

    for (let i = 1; i < this.points.length; i++) {
      render(new TravelPointView({
        point: this.points[i],
        destinations: this.destinations,
        offers: this.offers
      }), this.pointsList.getElement());
    }
  }
}
