// async function getdata() {
//    await fetch('https://api.covid19api.com/summary').then((data) => {
//         // console.log(data);
//         return data.json();
//     }).then((objectData) => {
//         // console.log(objectData[0].title);
//         let tableData = "";
//         objectData.map((values) => {
//             // 
//             console.log(values);
//         })
//         // document.getElementById('table_body').innerHTML = tableData;
//     })
// }

// getdata();


// fetch('https://api.covid19api.com/summary').then((response) => {
//     console.log(response);
//     return response.json();
// }).then((objectData) => {

//     objectData.map((values) => {
//         //TotalDeaths

//     })
//     document.getElementById('table_body').innerHTML = displayData;
// }).catch((err) => {
//     console.log(err);
// })



//fresh start 

async function getData() {
    fetch('https://api.covid19api.com/summary').then((data) => {

        return data.json();
    }).then((actualData) => {
        console.log(actualData);
        let tableData = "";
        actualData.Countries.map((values) => {
            tableData += ` <tr id="table_body">
             <td>${values.Country}</td>
             <td>${values.TotalDeaths}</td>
             <td>${values.TotalConfirmed}</td>
             <td>${values.Date}</td>
             <td>${values.CountryCode}
         </tr>`
        })
        document.getElementById('table_body').innerHTML = tableData;
        document.getElementById('table_body').style.color="white";
    })




}
getData();

