function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (i = 0; i < result.length - 1; i++) {
    for (j = 0; j < result.length - 1; j++) {
      carsNow = result[j].year;
      carsDesc = result[j+1].year;
      if(carsNow < carsDesc) {
        resultDesc = result[j];
        result[j] = result[j + 1];
        result[j + 1]= resultDesc;                    
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
