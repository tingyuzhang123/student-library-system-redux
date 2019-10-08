export const SHOW_STUDENT_LIST=Symbol('SHOW_STUDENT_LIST');
export const showStudentList = (studentName) => {
    return {type:SHOW_STUDENT_LIST, studentName};
}
export const SUBMIT_BOOKS = Symbol('SUBMIT_BOOKS');
export const createBookSubmitAction = (tempBookSelect) => {
    return { type: SUBMIT_BOOKS, tempBookSelect };
}    
export const RETURN_BOOKS = Symbol('RETURN_BOOKS');
export const createBookReturnAction = (bookName)=>{
    return {type: RETURN_BOOKS, bookName};
}