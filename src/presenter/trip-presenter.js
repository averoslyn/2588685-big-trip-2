import { render, RenderPosition } from '../render.js';
import AddNewPointView from '../view/add-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import TravelPointView from '../view/point-item-view.js';
import PointsListView from '../view/point-list-view.js';

export default class TripPresenter {
  constructor({ filterContainer, sortContainer }) {
    this.filterContainer = filterContainer;
    this.sortContainer = sortContainer;
    this.pointsList = new PointsListView();
  }

  init() {
    render(new FilterView, this.filterContainer);
    render(new SortView, this.sortContainer);
    render(this.pointsList, this.sortContainer, RenderPosition.BEFOREEND);
    render(new EditPointView, this.pointsList.getElement());
    render(new AddNewPointView, this.pointsList.getElement());
    for (let i = 0; i < 3; i++) {
      render(new TravelPointView(), this.pointsList.getElement());
    }
  }
}
