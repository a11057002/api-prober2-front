function updateData() {
    updateServiceCount();
    updateEndpointCount();
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
            store.remove("service");
            store.set("service", data);
            console.log(store.get("service"));
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
            console.log(store.get("endpoint"));
        },
        error: function (e) {
            console.log(e);
        }
    });
}