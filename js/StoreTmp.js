async function updateData() {
    await updateServiceCount();
    await updateEndpointCount();
    drawServiceGraph(store.get("service"))
    drawEndpointGraph(store.get("endpoint"))
}
var ipUrl = "http://140.121.197.130:55213";
function updateServiceCount() {
    $.ajax({
        url: ipUrl+"/getServiceLevel",
        type: "GET",
        crossDomain: true,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(store.getAll());
            store.remove("service");
            store.set("service", data);
            console.log("update the service count : " + store.get("service").totalService);
            console.log(store.getAll());
        },
        error: function (e) {
            console.log(e);
        }
    });
}

function updateEndpointCount() {
    $.ajax({
        url: ipUrl+"/getEndpointLevel",
        type: "GET",
        crossDomain: true,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            store.remove("endpoint");
            store.set("endpoint", data);
            console.log("update the endpoint count : " + store.get("endpoint").totalOperation);
            console.log(store.getAll());
        },
        error: function (e) {
            console.log(e);
        }
    });
}