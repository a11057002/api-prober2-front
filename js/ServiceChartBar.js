let serviceLevelLoadingIcon = document.getElementById("serviceLevelLoadingId");
let serviceDiv = document.getElementById("serviceDiv");
let serviceTotal = document.getElementById("serviceTotal");
// $.ajax({
//     url: "http://140.121.197.131:8080/getServiceLevel",
//     type: "GET",
//     crossDomain: true,
//     async: true,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     // jsonpCallback: "myJsonMethod",
//     beforeSend: function () {
//         serviceLevelLoadingIcon.setAttribute("style", "height:450px; position:relative; top:200px;");
//         serviceDiv.setAttribute("style", "display:none");
//     },
//     success: function (data) {
//         serviceTotal.appendChild(document.createTextNode("Total number of services : "+data.totalService.toLocaleString()));
//         parseServiceLevelData(data.serviceLevel);
//         console.log(data);
//     },
//     error: function (e) {
//         console.log(e);
//     },
//     complete: function () {
//         serviceLevelLoadingIcon.setAttribute("style", "display:none");
//         serviceDiv.setAttribute("style", "");
//     }
// });
serviceLevelLoadingIcon.setAttribute("style", "height:450px; position:relative; top:200px;");
serviceDiv.setAttribute("style", "display:none");

function drawServiceGraph(data) {

    // serviceTotal.appendChild(document.createTextNode("Total number of services : "+data.totalService.toLocaleString()));
    serviceTotal.innerText = "Total number of services : " + data.totalService.toLocaleString()
    parseServiceLevelData(data.serviceLevel);

    serviceLevelLoadingIcon.setAttribute("style", "display:none");
    serviceDiv.setAttribute("style", "");
}

// parseServiceLevelData(data.serviceLevel);
// var data = [{ quantity: 130, feature: "hello" },
// { quantity: 137, feature: "hello1" },
// { quantity: 166, feature: 97 },
// { quantity: 154, feature: 117 },
// { quantity: 179, feature: 98 },
// { quantity: 187, feature: 120 },
// { quantity: 189, feature: 84 }]

function parseServiceLevelData(data) {
    data.columns = ["quantity", "feature"]

    var canvas = document.getElementById("serviceLevel"),
        context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = canvas.width - margin.left - margin.right,
        height = canvas.height - margin.top - margin.bottom;

    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    context.translate(margin.left, margin.top);

    x.domain(data.map(function (d) { return d.feature; }));
    y.domain([0, d3.max(data, function (d) { return d.quantity; })]);

    var yTickCount = 10,
        yTicks = y.ticks(yTickCount);
    //   yTickFormat = y.tickFormat(yTickCount, "%");

    context.beginPath();
    x.domain().forEach(function (d) {
        context.moveTo(x(d) + x.bandwidth() / 2, height);
        context.lineTo(x(d) + x.bandwidth() / 2, height + 6);
    });
    context.strokeStyle = "black";
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "top";
    x.domain().forEach(function (d) {
        context.fillText(d, x(d) + x.bandwidth() / 2, height + 6);
    });

    context.beginPath();
    yTicks.forEach(function (d) {
        context.moveTo(0, y(d) + 0.5);
        context.lineTo(-6, y(d) + 0.5);
    });
    context.strokeStyle = "black";
    context.stroke();

    context.textAlign = "right";
    context.textBaseline = "middle";
    yTicks.forEach(function (d) {
        context.fillText(d, -9, y(d));
    });

    context.beginPath();
    context.moveTo(-6.5, 0 + 0.5);
    context.lineTo(0.5, 0 + 0.5);
    context.lineTo(0.5, height + 0.5);
    context.lineTo(-6.5, height + 0.5);
    context.strokeStyle = "black";
    context.stroke();

    context.save();
    context.rotate(-Math.PI / 2);
    context.textAlign = "right";
    context.textBaseline = "top";
    context.font = "bold 10px sans-serif";
    context.fontColor = "black"
    // context.fillText("Frequency", -10, 10);
    context.restore();

    context.fillStyle = "steelblue";
    data.forEach(function (d) {
        context.fillRect(x(d.feature), y(d.quantity), x.bandwidth(), height - y(d.quantity));
    });

    // set context back to original point
    context.translate(-margin.left, -margin.top);
}