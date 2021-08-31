let popular_standardLoadingIcon = document.getElementById("popular_standard_LoadingId");
$.ajax({
    url: "http://140.121.197.131:8080/getPopularStandardOAS",
    type: "GET",
    crossDomain: true,
    async: true,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    // jsonpCallback: "myJsonMethod",
    beforeSend: function () {
        popular_standardLoadingIcon.setAttribute("style", "height:450px; position:relative; top:100px;");
    },
    success: function (data) {
        // let data = {
        //     "popular": [
        //         {
        //             "id": 1,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 2,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 3,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 4,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 5,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         }
        //     ],
        //     "standard": [
        //         {
        //             "id": 6,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 7,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 8,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 9,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         },
        //         {
        //             "id": 0,
        //             "title": "REST-style URls",
        //             "description": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //         }
        //     ]
        // };
        popularRecomment(data);
        standardRecomment(data);
        console.log(data);
    },
    error: function (e) {
        console.log(e);
    },
    complete: function () {
        popular_standardLoadingIcon.setAttribute("style", "display:none");
    }
});

function popularRecomment(data) {
    let popular_standard_row = document.getElementById("popular_standard_row");

    let col = document.createElement("div");
    col.setAttribute("class", "col-md-6 align-self-center");

    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped custab");
    table.setAttribute("style", "table-layout: fixed; width: 100%;");

    let thead = document.createElement("thead");
    let titleTr = document.createElement("tr");

    let titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Popular OAS ID"));
    titleTh.setAttribute("style", "width: 20%");
    titleTr.appendChild(titleTh);
    titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Title"));
    titleTh.setAttribute("style", "width: 20%");
    titleTr.appendChild(titleTh);
    titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Description"));
    titleTh.setAttribute("style", "width: 60%");
    titleTr.appendChild(titleTh);

    // 先設定好標題
    thead.appendChild(titleTr);
    table.appendChild(thead);

    let popularData = data.popular;
    for (x in popularData) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        let tdA = document.createElement("a");
        tdA.setAttribute("href", "/" + popularData[x].id + "/OAS");
        tdA.appendChild(document.createTextNode(popularData[x].id));

        td.appendChild(tdA);
        td.setAttribute("class", "text-truncate");
        tr.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(popularData[x].title));
        td.setAttribute("class", "text-truncate");
        tr.appendChild(td);
        if (popularData[x].description == null) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode("No description"));
            td.setAttribute("class", "text-truncate");
            tr.appendChild(td);
        } else {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(popularData[x].description));
            td.setAttribute("class", "text-truncate");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    col.appendChild(table);
    popular_standard_row.appendChild(col);
}

function standardRecomment(data) {
    let popular_standard_row = document.getElementById("popular_standard_row");

    let col = document.createElement("div");
    col.setAttribute("class", "col-md-6 align-self-center");

    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped custab");
    table.setAttribute("style", "table-layout: fixed; width: 100%;");

    let thead = document.createElement("thead");
    let titleTr = document.createElement("tr");

    let titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Standard OAS ID"));
    titleTh.setAttribute("style", "width: 20%");
    titleTr.appendChild(titleTh);
    titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Title"));
    titleTh.setAttribute("style", "width: 20%");
    titleTr.appendChild(titleTh);
    titleTh = document.createElement("th");
    titleTh.appendChild(document.createTextNode("Description"));
    titleTh.setAttribute("style", "width: 60%");
    titleTr.appendChild(titleTh);

    // 先設定好標題
    thead.appendChild(titleTr);
    table.appendChild(thead);

    let standardData = data.standard;
    for (x in standardData) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        let tdA = document.createElement("a");
        tdA.setAttribute("href", "/" + standardData[x].id + "/OAS");
        tdA.appendChild(document.createTextNode(standardData[x].id));

        td.appendChild(tdA);
        td.setAttribute("class", "text-truncate");
        tr.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(standardData[x].title));
        td.setAttribute("class", "text-truncate");
        tr.appendChild(td);
        if (standardData[x].description == null) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode("No description"));
            td.setAttribute("class", "text-truncate");
            tr.appendChild(td);
        } else {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(standardData[x].description));
            td.setAttribute("class", "text-truncate");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    col.appendChild(table);
    popular_standard_row.appendChild(col);
}