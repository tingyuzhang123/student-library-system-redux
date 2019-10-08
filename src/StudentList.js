import React from "react";
import BL from "./bookList";
import { connect } from 'react-redux';
import {showStudentList} from './bookSystem/systemReducer/actionsCreator';
import {createBookReturnAction} from './bookSystem/systemReducer/actionsCreator';


class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowedBookList: false
    };
  }
  createStudentOptions = (studentName)=> { 
      return <option key={studentName} value={studentName}>{studentName}</option>;
    };
 


  render() {
    let { isShowedBookList} = this.state;
    const {selectedStudent,student,isSelected,onBookReturnedRedux}=this.props;

    return (
      <div>
        <h2> Library </h2>
        <label> Choose Student </label>
        <br />
        <select onChange={this.props.showStudentListRedux}>
          {!isSelected&&<option>Please select:</option>}
          { Object.keys(student).map(this.createStudentOptions)}
        </select>
        {isSelected && (
          <React.Fragment>
            <button
              onClick={() => {
                this.setState({
                  isShowedBookList: true
                });
              }}
            >
              Borrow Book
            </button>
            {isShowedBookList && (
              <React.Fragment>
               <BL></BL>
              </React.Fragment>
            )}
            <p> Borrowed Book: </p>
            {/* {Object.keys(student).map(studentName => { */}
              {/* const books = student[selectedStudent]; */}
                {/* return ( */}
                  <React.Fragment>
                    <span>
                      {Object.keys(student[selectedStudent]).map((bookName) => {
                      return <React.Fragment>
                        {(student[selectedStudent][bookName])&& <p>{selectedStudent + ' borrowed: ' + bookName}
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
    )}
            }
const mapStateToProps=(state)=>{
return{
  selectedStudent:state.selectedStudent,
  student: state.student,
  bookNumbers:state.bookNumbers,
  isSelected:state.isSelected
              }
          }
const mapDispatchToProps = (dispatch) => {
  return {
    showStudentListRedux: (event) => { dispatch(showStudentList(event.target.value)) },
    onBookReturnedRedux: (bookName)=>{dispatch(createBookReturnAction(bookName))}
              };
          };
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
              
