export const SHOW_STUDENT_LIST = Symbol('SHOW_STUDENT_LIST');
export const showStudentList = (studentName) => {
    return { type: SHOW_STUDENT_LIST, studentName };
}
export const SUBMIT_BOOKS = Symbol('SUBMIT_BOOKS');
export const createBookSubmitAction = (tempBookSelect) => {
    return { type: SUBMIT_BOOKS, tempBookSelect };
}
export const RETURN_BOOKS = Symbol('RETURN_BOOKS');
export const createBookReturnAction = (bookName) => {
    return { type: RETURN_BOOKS, bookName };
}

export const FETCH_BOOKS = Symbol('FETCH_BOOKS');
export const fetchBooks = () => {
    return { type: FETCH_BOOKS };
}

export const FETCH_BOOKS_SUCCESS = Symbol('FETCH_BOOKS_SUCCESS');
export const fetchBooksSuccess = (books) => {
    return { type: FETCH_BOOKS_SUCCESS, books };
}

export const FETCH_BOOKS_FAILURE = Symbol('FETCH_BOOKS_FAILURE');
export const fetchBooksFailure = (e) => {
    return { type: FETCH_BOOKS_FAILURE, e };
}