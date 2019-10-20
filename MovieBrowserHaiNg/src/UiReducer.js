import _ from 'lodash';

const initialState = {
  movieList: [],
  searchMovieList: [],
  movieByPerson: [],
  personInfo: {},
  searchName: '',
  isLoading: true,
  searchTotalPages: 0,
  searchPage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS': {
      const movieDetail = _.get(action, 'payload.movieDetail', {});
      return {
        ...state,
        movieDetail: {
          backdropPath: movieDetail.backdrop_path,
          voteAverage: movieDetail.vote_average,
          title: movieDetail.title,
          id: movieDetail.id,
          overview: movieDetail.overview,
          cast: _.get(movieDetail, 'credits.cast', []),
          runtime: movieDetail.runtime,
        },
        isLoading: false,
      };
    }
    case 'GET_PERSON_SUCCESS': {
      const personInfo = _.get(action, 'payload.personInfo', {});
      return {
        ...state,
        personInfo,
        isLoading: false,
      };
    }

    case 'GET_PERSON':
    case 'GET_MOVIE':
    case 'GET_MOVIE_LIST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MOVIE_BY_PERSON_SUCCESS': {
      return {
        ...state,
        movieByPerson: action.payload.movieByPerson.results,
        isLoading: false,
      };
    }
    case 'GET_MOVIE_LIST_SUCCESS': {
      return {
        ...state,
        movieList: [...state.movieList, ...action.payload.movieList],
        totalPages: action.payload.total_pages,
        page: action.payload.page,
        isLoading: false,
      };
    }
    case 'SEARCH_MOVIE_LIST': {
      return {
        ...state,
        isLoading: true,
        searchName: action.payload.searchName,
        searchMovieList:
          state.searchName !== action.payload.searchName
            ? []
            : state.searchMovieList,
      };
    }
    case 'SEARCH_MOVIE_LIST_SUCCESS': {
      return {
        ...state,
        searchMovieList: [
          ...state.searchMovieList,
          ...action.payload.searchMovieList,
        ],
        searchTotalPages: action.payload.total_pages,
        searchPage: action.payload.page,
        isLoading: false,
      };
    }

    default: {
      return {...state};
    }
  }
};
