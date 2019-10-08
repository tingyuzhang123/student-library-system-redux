import {SHOW_STUDENT_LIST, RETURN_BOOKS,SUBMIT_BOOKS} from './actionsCreator';
const initState = {
    student: {
        'Fiona':{},
        'Frank':{},
        'Eric':{},
        'Jane':{}
      },
      selectedStudent:null,
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

    export const reducer=(state=initState,action)=>{
      switch (action.type) {
        case SHOW_STUDENT_LIST:
            return { ...state, selectedStudent: action.studentName,isSelected:true};
        case SUBMIT_BOOKS:
            const tempBookSelect = action.tempBookSelect;
            const { student, selectedStudent, bookNumbers } = state;
            Object.keys(tempBookSelect).map((bookName) => {
              const bookSelected = tempBookSelect[bookName];
              if (bookSelected) {
                  if (student[selectedStudent][bookName] === undefined) {
                      student[selectedStudent][bookName] = false;
                  }
                  student[selectedStudent][bookName]=true;
                  bookNumbers[bookName]--;
              }
          });
            return { student, bookNumbers};
        case RETURN_BOOKS:
            const bookName = action.bookName;
            student[selectedStudent][bookName]=false;
            bookNumbers[bookName]++;
            return{
              student, bookNumbers
            };
        default:
            return state;
          }
        }