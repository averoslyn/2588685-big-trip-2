import {createElement} from '../render.js';
import { convertDate, getDuration } from '../utils.js';

function createTravelPointTemplate(point, destinations, offers) {

  const { dateFrom, date, type, basePrice, favorite, destinationId } = point;

  const destination = destinations.find((dest) => dest.id === destinationId);
  const destinationName = destination ? destination.name : '';

  const offerForType = offers.find((offer) => offer.type === type);
  const pointTypeOffers = offerForType ? offerForType.offers : [];
  const chosenOffers = pointTypeOffers.filter((offer) => point.offers.includes(offer.id));

  const favoriteClass = favorite ? 'event__favorite-btn--active' : '';

  return(
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${convertDate(dateFrom, 'FULL_DATE')}">
          ${convertDate(dateFrom, 'SHORT_DATE')}
        </time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destinationName}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${convertDate(dateFrom, 'FULL_DATE_AND_TIME')}">
              ${convertDate(dateFrom, 'ONLY_TIME')}
            </time>
            &mdash;
            <time class="event__start-time" datetime="${convertDate(date, 'FULL_DATE_AND_TIME')}">
              ${convertDate(date, 'ONLY_TIME')}
            </time>
          </p>
          <p class="event__duration">${getDuration(dateFrom, date)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${chosenOffers.map ((offer) =>
      `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
        </li>`)
      .join('')}
        </ul>
        <button class="event__favorite-btn ${favoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class TravelPointView {
  constructor({ point, destinations, offers }) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemlate() {
    return createTravelPointTemplate(this.point, this.destinations, this.offers);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemlate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

