import React from "react";
import BL from "./BookLists";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  showStudentList = event => {
    this.setState({ selectedStudent: event.target.value,isSelected:true });}
    
 
  createStudentOptions = (studentName)=> {
      
      return <option key={studentName} value={studentName}>{studentName}</option>;
    };
 


  render() {
    let { isSelected, isShowedBookList} = this.state;
    const {selectedStudent,student,bookNumbers}=this.props;

    return (
      <div>
        <h2> Library </h2>
        <label> Choose Student </label>
        <br />
        <select onChange={this.showStudentList}>
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
                <BL
                  bookNumbers={bookNumbers}
                  selectedStudent={selectedStudent}
                  studentBorrowedBooks={student[selectedStudent]}
                  onBookChanged={tempBookSelect => {
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
                  this.setState({
                      student, bookNumbers
                  });
                  return null;
              }}></BL>
              
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
                        student[selectedStudent][bookName]=false;
                        bookNumbers[bookName]++;
                        this.setState({
                          student, bookNumbers
                        });
                      
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
export default connect((state) => ({
                ...state//此时的state就是todos:[...]数据
              }))(StudentList);
              
