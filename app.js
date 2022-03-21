const dataArea = document.querySelector('.data');
const button = document.querySelector('.button');



// function data() {

//         const key = '19953ecf9cfc6399251cc09c'
//         let from = document.querySelector('.from').value;
//         let to = document.querySelector('.to').value;
//         let result = document.querySelector('.amount').value;

//         let fetchedData = fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`);
        
//         fetchedData
//                 .then(response => {return response.json()})
//                 .then(data => {
//                         console.log(data);
//                 })
// }

function data1() {

        const key = '19953ecf9cfc6399251cc09c'
        let from = document.querySelector('.from').value;
        let to = document.querySelector('.to').value;
        let amount = document.querySelector('.amount').value;

        const xhr = new XMLHttpRequest();

        let url = `https://v6.exchangerate-api.com/v6/${key}/pair/${from}/${to}/${amount}`
        xhr.open('GET', url, false);

        xhr.onload = function() {
                if(xhr.status === 200) {
                        alert('Data successfully received')
                        let result = JSON.parse(xhr.responseText);
                        console.log(result);
                        dataArea.innerHTML = result.conversion_result
                } else {
                        alert('Data Failure')
                }
        }


        xhr.send()

}

button.addEventListener('click', data1);

