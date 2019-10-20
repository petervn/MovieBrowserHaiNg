import axios from 'axios';
import CONSTANTS from './constants';

const params = 'credits,video';
export const fetchMovieList = (dispatch, page) => {
  dispatch({
    type: 'GET_MOVIE_LIST',
  });

  const url = `${CONSTANTS.URL.BASE_URL}/movie/popular?api_key=${CONSTANTS.API_KEY}&language=en-US&page=${page}&append_to_response=${params}`;
  axios
    .get(url)
    .then(response => {
      const movieList = response.data.results;
      const sortedPopularMovies = movieList.sort(
        (a, b) => a.popularity < b.popularity,
      );
      dispatch({
        type: 'GET_MOVIE_LIST_SUCCESS',
        payload: {
          movieList: sortedPopularMovies,
          totalPages: response.data.total_pages,
          page: response.data.page,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchPersonInfo = (dispatch, id) => {
  dispatch({
    type: 'GET_PERSON',
  });
  const url = `${CONSTANTS.URL.BASE_URL}/person/${id}?api_key=${CONSTANTS.API_KEY}&language=en-US&append_to_response=${params}`;
  axios
    .get(url)
    .then(response => {
      dispatch({
        type: 'GET_PERSON_SUCCESS',
        payload: {
          personInfo: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchMovieByPerson = (dispatch, id) => {
  dispatch({
    type: 'GET_MOVIE_BY_PERSON',
  });
  const url = `${CONSTANTS.URL.BASE_URL}/discover/movie/?api_key=${CONSTANTS.API_KEY}&language=en-US&with_cast=${id}`;
  axios
    .get(url)
    .then(response => {
      dispatch({
        type: 'GET_MOVIE_BY_PERSON_SUCCESS',
        payload: {
          movieByPerson: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchMovie = (dispatch, id) => {
  dispatch({
    type: 'GET_MOVIE',
  });
  const url = `${CONSTANTS.URL.BASE_URL}/movie/${id}?api_key=${CONSTANTS.API_KEY}&language=en-US&append_to_response=${params}`;
  axios
    .get(url)
    .then(response => {
      dispatch({
        type: 'GET_MOVIE_SUCCESS',
        payload: {
          movieDetail: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const searchMovieList = (dispatch, name, page = 1) => {
  dispatch({
    type: 'SEARCH_MOVIE_LIST',
    payload: {searchName: name},
  });
  const url = `${CONSTANTS.URL.BASE_URL}/search/movie?api_key=${
    CONSTANTS.API_KEY
  }&language=en-US&page=${page}&query=${name.trim()}&include_adult=false`;
  axios
    .get(url)
    .then(response => {
      const movieList = response.data.results;
      dispatch({
        type: 'SEARCH_MOVIE_LIST_SUCCESS',
        payload: {
          searchMovieList: movieList,
          totalPages: response.data.total_pages,
          page: response.data.page,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
