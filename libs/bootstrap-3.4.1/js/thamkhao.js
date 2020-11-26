function abc(products){
    var x= "";
    for (var i = 0;i<6;i++) {
        x+=" <div class=\"col-md-4\">\n" +
            "                <div class=\"b_1\">\n" +
            "                    <h2 class=\"b_2\">"+products[i].name+"</h2>\n" +
            "                    <img class=\"b_3\" src=\" "+products[i].image+"\" height=\"564\" width=\"564\"/>\n" +
            "                    <a href=\"#\" class=\"b_5\">"+products[i].price+"</a>\n" +
            "                </div>\n" +
            "\n" +
            "            </div> "
    }
    return x;
    }
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var rs = this.responseText; // text lay duoc tu api
            rs = JSON.parse(rs);// bien rs thanh doi tuong js
            var products = rs.data.foods;
            var x = document.getElementById("products")
            x.innerHTML = abc(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();





