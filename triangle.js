
function area() {


    var base = document.getElementById("t1").value;
    var height = document.getElementById("t2").value;
    var area = 1/2 * parseInt(base) * parseInt(height);

    
    document.getElementById('p1').innerHTML = "Area of triangle  =" + area;
}