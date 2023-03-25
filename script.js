


//fresh start 

async function getData() {
    fetch('https://api.covid19api.com/summary').then((data) => {

        return data.json();
    }).then((actualData) => {
        console.log(actualData);
        let tableData = "";
        if(actualData.Countries!==null){
       actualData.Countries.map((values) => {
            tableData += ` <tr id="table_body">
             <td>${values.Country}</td>
             <td>${values.TotalDeaths}</td>
             <td>${values.TotalConfirmed}</td>
             <td>${values.Date}</td>
             <td>${values.CountryCode}
         </tr>`
        })}
        document.getElementById('table_body').innerHTML = tableData;
        document.getElementById('table_body').style.color="white";
    })




}
getData();
