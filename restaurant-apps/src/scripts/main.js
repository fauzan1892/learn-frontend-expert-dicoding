import data from '../DATA.json';
function main() {

    const getData = async () => {
        // console.log(data);     
        let dataRestaurant = '';
        dataRestaurant += '<div class="row">';
        data.restaurants.forEach((restaurants) => {
            dataRestaurant += `<div class="col-4">
                <div class="card">
                    <img src="${restaurants.pictureId}" class="img-rounded" alt="Foto Blog 1">
                    <div class="card-body">
                        <p class="text-success"><b>City : ${restaurants.city}</b></p>
                        <br>
                        <h2 class="card-title">${restaurants.name}</h2>
                        <br>
                        <p><small>${restaurants.description}</small></p>
                    </div>
                    <div class="card-footer text-success">
                        <b>Ratings : ${restaurants.rating}</b>
                    </div>
                </div>
            </div>`;
        });
        dataRestaurant += '</div>';
        
        document.getElementById('explore-restaurants').innerHTML += dataRestaurant;
    };

    document.addEventListener("DOMContentLoaded", () => {
        getData();
    });
};

export default main;