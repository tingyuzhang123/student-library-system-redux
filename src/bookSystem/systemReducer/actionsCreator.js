export const SHOW_STUDENT_LIST=Symbol('SHOW_STUDENT_LIST');
export const SHOW_STUDENT_LIST = (countryList) =>{
       return { type: TAX_COUNTRIES_LOADED,countryList};

}
export const showStudentList = (event) => {
    return {type:SHOW_STUDENT_LIST, selectedStudent: event.target.value,isSelected:true};
}
    