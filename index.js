// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
   
  ];
  

function superbowlWin(tresults){
  
for (let win of tresults ){
    if(win.result === "W"){
        return win.year;
       
    //console.log(win.year) ;
    //console.log(win.result);
    
};
}
}
superbowlWin(record);
