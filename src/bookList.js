import React from "react";
import { connect } from "react-redux";
import {createBookSubmitAction} from './bookSystem/systemReducer/actionsCreator';

export class BookLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temBookNumbers: {}
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   if (props.selectedStudent !== state.selectedStudent) {
  //     return {
  //       selectedStudent: props.selectedStudent,
  //       temBookNumbers: {}
  //     };
  //   }

  //   return null;
  //}
  /*selectedBookList = event => {
    let { studentBookList, bookNumbers } = this.state;
    Object.keys(bookNumbers).map(key => {
      if (event.target.value === key && event.target.checked === true) {
        studentBookList.tempBooks[key] = true;
      } else if (event.target.value === key && event.target.checked === false) {
        studentBookList.tempBooks["book5"] = false;
      }
      this.setState({ studentBookList });
      this.props.onBookChanged(studentBookList);
    });
  };
*/
  render() {
    let { temBookNumbers } = this.state;
    const { selectedStudent, onBookChangedRedux, bookNumbers,student } = this.props;
   /*const calculateBookNumbersFromSelectedStu = (
      bookStatus,
      temBookNumbers,
      bookNumbers
    ) => {
      let x = bookNumbers;
      if (bookStatus.rentBooks !== undefined) {
        return Object.keys(bookStatus.rentBooks).map(key => {
          if (bookStatus.rentBooks[key] === true) {
            return x[key]--, (temBookNumbers[key] = x[key]);
          }
        });
      } else {
        temBookNumbers = bookNumbers;
      }
    };

    temBookNumbers = calculateBookNumbersFromSelectedStu(
      bookStatus,
      temBookNumbers,
      bookNumbers
    );
*/
    return (
      <div>
        <h3> Book List</h3>
        
          {Object.keys(bookNumbers).map(bookName => {
            if (
              !selectedStudent[bookName]
            ) {
              return (
                  <div key={bookName}>
                  <label htmlFor={bookName}>
                    {bookName} : {bookNumbers[bookName]}
                  </label>
                  <input
                    type="checkbox"
                    value={bookName}
                    id={bookName}
                    checked={temBookNumbers[bookName]}
                    disabled={bookNumbers[bookName] <= 0 || student[selectedStudent][bookName]}
                    onChange={() => {
                      temBookNumbers[bookName] = !temBookNumbers[bookName];
                      this.setState({ temBookNumbers });
                  }}
                  />
                 </div>

              );
            }
          })}

        <button
          onClick={() => {
             onBookChangedRedux(temBookNumbers);
             this.setState({ temBookNumbers: {} });
              }}>
          Submit
        </button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return{
        selectedStudent: state.selectedStudent,
        bookNumbers: state.bookNumbers,
        student: state.student
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onBookChangedRedux: (tempBookNumbers) => { dispatch(createBookSubmitAction(tempBookNumbers)) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookLists);