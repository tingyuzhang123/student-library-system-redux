import React from "react";
import BL from "./bookList";
import axios from 'axios';
import { connect } from 'react-redux';
import { showStudentList, fetchBooksSuccess, createBookReturnAction } from './bookSystem/systemReducer/actionsCreator';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
    // axios.get('https://fakerestapi.azurewebsites.net/api/Books').then(
    //   (response) => {
    //     console.log(response);
    //     this.props.fetchBooksSuccess(response.data);
    //     // this.setState({ countries: response.data, selectedCountries: [{}] });
    //   }
    // ).catch(
    //   (e) => {
    //     console.error(e);
    //   }
    // );

  }

  createStudentOptions = (studentName) => {
    return <option key={studentName} value={studentName}>{studentName}</option>;
  };



  render() {
    const { selectedStudent, student, isSelected, onBookReturnedRedux, showStudentListRedux } = this.props;

    return (
      <div>
        <h2> Library </h2>
        <label> Choose Student </label>
        {this.props.error && <p>{this.props.error}</p>}
        <br />
        <select onChange={showStudentListRedux}>
          {!isSelected && <option>Please select:</option>}
          {Object.keys(student).map(this.createStudentOptions)}
        </select>
        {isSelected && (
          <React.Fragment>
            <React.Fragment>
              <BL></BL>
            </React.Fragment>
            <p> Borrowed Book: </p>
            {/* {Object.keys(student).map(studentName => { */}
            {/* const books = student[selectedStudent]; */}
            {/* return ( */}
            <React.Fragment>
              <span>
                {Object.keys(student[selectedStudent]).map((bookName) => {
                  return <React.Fragment>
                    {(student[selectedStudent][bookName]) && <p>{selectedStudent + ' borrowed: ' + bookName}
                      <button
                        onClick={() => {
                          onBookReturnedRedux(bookName);
                        }
                        }
                      >
                        return
                    </button>
                    </p>}
                  </React.Fragment>
                })}
              </span>
            </React.Fragment>
          </React.Fragment>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    selectedStudent: state.selectedStudent,
    student: state.student,
    bookNumbers: state.bookNumbers,
    isSelected: state.isSelected,
    error: state.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showStudentListRedux: (event) => { dispatch(showStudentList(event.target.value)) },
    onBookReturnedRedux: (bookName) => { dispatch(createBookReturnAction(bookName)) },
    fetchBooksSuccess: (books) => { dispatch(fetchBooksSuccess(books)) }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

