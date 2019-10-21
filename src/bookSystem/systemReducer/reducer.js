import { SHOW_STUDENT_LIST, RETURN_BOOKS, SUBMIT_BOOKS } from './actionsCreator';
const initState = {
  student: {
    'Fiona': {},
    'Frank': {},
    'Eric': {},
    'Jane': {}
  },
  selectedStudent: null,
  bookNumbers: {
    'book1': 5,
    'book2': 7,
    'book3': 9,
    'book4': 3,
    'book5': 1
  },
  isSelected: false,
  isShowedBookList: false
};

export const reducer = (state = initState, action) => {
  const { student, selectedStudent, bookNumbers } = state;
  switch (action.type) {
    case SHOW_STUDENT_LIST:
      const studentName = action.studentName
      return { ...state, selectedStudent: studentName, isSelected: true };
    case SUBMIT_BOOKS:
      const tempBookSelect = action.tempBookSelect;
      Object.keys(tempBookSelect).map((bookName) => {
        const bookSelected = tempBookSelect[bookName];
        if (bookSelected) {
          student[selectedStudent] = { ...student[selectedStudent] };
          if (student[selectedStudent][bookName] === undefined) {
            student[selectedStudent][bookName] = false;
          }
          student[selectedStudent][bookName] = true;
          bookNumbers[bookName]--;
        }
      });
      return { ...state, student: { ...student, updated: true }, bookNumbers };
    case RETURN_BOOKS:
      const bookName = action.bookName;
      student[selectedStudent][bookName] = false;
      bookNumbers[bookName]++;
      return {
        ...state, student: { ...student, updated: true }, bookNumbers
      };
    default:
      return state;
  }
}