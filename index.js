(function () {

    //Init app
    (function init() {
        const config = {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
        }

        fetchData('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', config);
    })();

    //Fetch data from url
    function fetchData(url, config) {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                app(res.data);
            })
            .catch(err => {
                return err;
            })
    }

    //Main app function
    function app(fetchedData) {

        const forElements = document.querySelector('.data-cont');

        const amountOfItems = fetchedData.length;
        const width = +(100 / amountOfItems).toFixed(2);

        fetchedData.map((item, index) => {
            let height = item[1] / 30;
            let uiElement = elementFromData(item[0], item[1], width, height);
            forElements.appendChild(uiElement)
        });


        forElements.addEventListener('mouseover', event => {
            

        });

    }

    //Help functions
    function elementFromData(date, price, width, height) {
        //Item root element
        const uiItem = document.createElement('div');
        uiItem.className = 'item';
        // uiItem.style.width = width + '%';
        uiItem.style.height = height + 'px';

        //Container for item information
        const uiItemCont = document.createElement('div');
        uiItemCont.className = 'item-cont';

        const uiPrice = document.createElement('span');
        uiPrice.classNAme = 'price';
        uiPrice.textContent = price;

        const uiDate = document.createElement('span');
        uiDate.textContent = date;
        uiDate.className = 'date';

        uiItemCont.appendChild(uiPrice);
        uiItemCont.appendChild(uiDate);
        uiItem.appendChild(uiItemCont);

        return uiItem;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

})();