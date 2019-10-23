import { createStore, applyMiddleware } from 'redux';
import { reducer } from './systemReducer/reducer';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_BOOKS, fetchBooksSuccess, fetchBooksFailure } from './actionsCreator';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function* fetchBooks() {
    try {
        const response = yield call(fetch, 'https://fakerestapi.azurewebsites.net/api/Books');
        // response.headers;
        const books = yield response.json();
        yield put(fetchBooksSuccess(books));
    }
    catch (e) {
        yield put(fetchBooksFailure(e));
    }
}

function* rootSaga() {
    // const response = yield axios.get('https://fakerestapi.azurewebsites.net/api/Books');
    // console.log(response);
    // return response;
    // promise.then((response)=>{});
    yield takeEvery(FETCH_BOOKS, fetchBooks);
}

sagaMiddleware.run(rootSaga);