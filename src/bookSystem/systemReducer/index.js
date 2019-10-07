let initState = {
    student: {
        'Fiona':{},
        'Frank':{},
        'Eric':{},
        'Jane':{}
      },
      selectedStudent:{},
      bookNumbers: {
        'book1': 5,
        'book2': 7,
        'book3': 9,
        'book4': 3,
        'book5': 1
      },
      temBookNumbers: {},
      isSelected: false,
      isShowedBookList: false
    };

    function reducer(state=initState,action){
        return state;
      }
      export default reducer;