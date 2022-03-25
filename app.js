const dataArea = document.querySelector('.data');
const button = document.querySelector('.button');
const alertArea = document.querySelector('.message-area');



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

function thousand_separator(num) { 

        const figure = new Intl.NumberFormat();
        const figureValue = figure.format(num);
        return figureValue;

}

function data() {

        const key = '19953ecf9cfc6399251cc09c';

        let from = document.querySelector('.from').value.toUpperCase();
        let to = document.querySelector('.to').value.toUpperCase();
        let amount = (document.querySelector('.amount').value);

        const xhr = new XMLHttpRequest();

        let url = `https://v6.exchangerate-api.com/v6/${key}/pair/${from}/${to}/${amount}`
        xhr.open('GET', url, false);

        xhr.onload = function() {
                if(xhr.status === 200) {

                        
                        let result = JSON.parse(xhr.responseText);
                        let money_value = Math.floor(result.conversion_result)
                        dataArea.innerHTML = 'Currency Converted to : ' + to.toUpperCase() + ' ' + thousand_separator(money_value);
                        
                        setTimeout(() => {
                                alertArea.style.display = 'block';
                                alertArea.style.backgroundColor = 'green'
                                alertArea.innerHTML = 'Data Successfully Fetched ...';
                        }, 10);

                        setTimeout(() => {
                                alertArea.style.display = 'none';
                        }, 2000)

                } else {

                        setTimeout(() => {
                                alertArea.style.display = 'block';
                                alertArea.style.backgroundColor = 'red'
                                alertArea.innerHTML = 'Data Fecthing failed. Check your Currency Codes...';
                        }, 10);

                        setTimeout(() => {
                                alertArea.style.display = 'none';
                        }, 3000)

                }
        }


        xhr.send()

}

button.addEventListener('click', data);

