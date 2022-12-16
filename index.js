const city = ['Ha Noi', 'Hai Phong', 'Hai Duong', 'Vinh Phuc', 'Vinh', 'Binh Duong', 'Ca Mau'];
const age = [18, 19, 20, 21, 22, 23];
const gender = ['male', 'female'];
const sport = ['football', 'badminton', 'volleyball', 'marathon']; 
const result = ['yes', 'no'];
const Results = [];

const getRandom = (length) => {
  return Math.floor(Math.random() * length);
}

for(let i = 1; i <= 15000; i++) {
  Results.push(
    [
      i,
      city[getRandom(city.length)], 
      sport[getRandom(sport.length)],
      age[getRandom(age.length)], 
      gender[getRandom(gender.length)], 
      result[getRandom(result.length)],
    ]
  )
}

var exportToCsv = function() {
  var CsvString = "id,hometown,habit,age,gender,result\r\n";
  Results.forEach(function(RowItem, RowIndex) {
    // console.log(RowIndex);
    RowItem.forEach(function(ColItem, ColIndex) {
      if(ColIndex === RowItem.length - 1) {
        CsvString += ColItem ;
      }
      else {
        CsvString += ColItem + ",";
      }
    });
    CsvString += "\r\n";
  });
  CsvString = "data:application/csv," + encodeURIComponent(CsvString);
  var x = document.createElement("A");
  x.setAttribute("href", CsvString);
  x.setAttribute("download", "dataset.csv");
  document.body.appendChild(x);
  x.click();
};