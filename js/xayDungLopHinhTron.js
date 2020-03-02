// Tạo lớp Circle với phương thức khởi tạo có 1 tham số truyền vào
let Circle = function (radius) {
    this.radius = radius;
};

// Xây dựng phương thức trả về bán kính của hình tròn
this.getRadius = function() {
    return radius;
}

//Xây dựng phương thức tính diện tích hình tròn
this.getArea = function() {
    return Math.PI * radius * radius;
}

// Sử dụng lớp vừa tạo. Tạo đối tượng hình tròn với bán kính là
let circle = new Circle(2);

//Truy cập phương thức của lớp hình tròn vừa tạo và gán cho các biến radius, area
let radius = circle.getRadius(); // 2
let area = circle.getArea(); // 12.566370614359172

alert("radius: " + radius + "; area: " + area);