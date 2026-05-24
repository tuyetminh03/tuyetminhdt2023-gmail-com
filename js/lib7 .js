const productList = [
    {
        name: "Hoa Cẩm Tú Cầu",
        price: "300.000đ",
        image: "../assets/images/camtu.jpg"
    },

    {
        name: "Hoa Hồng",
        price: "230.000đ",
        image: "../assets/images/rose.jpg"
    },

    {
        name: "Hoa Hướng Dương",
        price: "210.000đ",
        image: "../assets/images/sunflower.jpg"
    },

    {
        name: "Hoa Tulip",
        price: "250.000đ",
        image: "../assets/images/tulip.jpg"
    }
];

const list = document.getElementById("product-list");

productList.forEach(function(item){

    list.innerHTML += `

        <div class="col-md-3">

            <div class="card">

                <img src="${item.image}" 
                     class="card-img-top"
                     style="height:250px; object-fit:cover;">

                <div class="card-body text-center">

                    <h4>${item.name}</h4>

                    <p class="text-danger fw-bold">
                        ${item.price}
                    </p>

                    <button class="btn btn-success">
                        Xem Chi Tiết
                    </button>

                </div>

            </div>

        </div>

    `;

});