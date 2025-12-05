import { POINTS_COUNT } from '../const.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';
import { getRandomPoints } from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoints);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }
}
