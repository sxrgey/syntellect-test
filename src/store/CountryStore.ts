import { makeAutoObservable, runInAction } from 'mobx';
import { getCountryByName, CountryInfo } from '../api/apiService';

export class CountryStore {
  search = '';
  results: CountryInfo[] = [];
  isLoading = false;
  maxResults = 5;

  constructor(maxSuggestions = 5) {
    makeAutoObservable(this);
    this.maxResults = maxSuggestions;
  }

  setSearch(query: string) {
    this.search = query;
    this.fetchResults();
  }

  async fetchResults() {
    this.isLoading = true;
    const response = await getCountryByName(this.search);
    runInAction(() => {
      this.results = response;
      this.isLoading = false;
    });
  }

  selectCountry(country: CountryInfo) {
    this.search = country.name;
    this.results = [];
  }
}
