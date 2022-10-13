function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (i = 0; i < result.length - 1; i++) {
    for (j = 0; j < result.length - 1; j++) {
      carsNow = result[j].year;
      carsAsc = result[j + 1].year;
      if(carsNow > carsAsc){
        resultAsc = result[j];
        result[j] = result[j + 1];
        result[j + 1] = resultAsc;                    
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
