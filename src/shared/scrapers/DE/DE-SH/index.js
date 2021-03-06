import * as parse from '../../../lib/parse.js';
import defaultScraperDEU, { sharedSchema } from '../_shared.js';

const scraper = {
  ...sharedSchema,
  country: 'iso1:DE',
  state: 'iso2:DE-SH', // ISO 3166 notation
  scraper: defaultScraperDEU,
  _rowToResult: row => {
    return {
      cases: parse.number(row[`${scraper.state.slice(5)}_cases`]),
      deaths: parse.number(row[`${scraper.state.slice(5)}_deaths`]),
      coordinates: [9.696, 54.219],
      population: 2.89 * 10 ** 6
    };
  }
};

export default scraper;
