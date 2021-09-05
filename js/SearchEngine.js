// var searchData = {
//     "search": [
//         {
//             "image": "https://img.gaadicdn.com/images/car-images/165x68/Renault/Renault-KWID/4318/047.jpg",
//             "resourceId": "1234",
//             "resourceName": "Hello Test",
//             "feature": [
//                 "feature 1",
//                 "feature 2",
//                 "feature 3",
//                 "feature 4"
//             ],
//             "description": "Just a test"
//         },
//         {
//             "image": "https://img.gaadicdn.com/images/car-images/165x68/Renault/Renault-KWID/4318/047.jpg",
//             "resourceId": "1234",
//             "resourceName": "Hello Test",
//             "feature": [
//                 "feature 1",
//                 "feature 2",
//                 "feature 3",
//                 "feature 4"
//             ],
//             "description": "Just a test"
//         },
//         {
//             "image": "https://api.apis.guru/v2/cache/logo/https_apitore.com_img_apis_14.jpg",
//             "resourceId": "2345",
//             "resourceName": "Hello Test",
//             "feature": [
//                 "feature 1",
//                 "feature 2",
//                 "feature 3",
//                 "feature 4"
//             ],
//             "description": "Just a test"
//         }
//     ]
// };
// var ipUrl = "http://140.121.197.130:55213";
var ipUrl = proberPath.proberBackEndPath;
function postUserQuery() {
    let loadingIcon = document.getElementById("searchBoxLoadingId");
    let searchBox = document.getElementById("searchBoxId");
    var userQuery = document.getElementById('userQuery').value;
    $.ajax({
        url: ipUrl+"/getSearchEngineResult?query=" + userQuery,
        type: "GET",
        crossDomain: true,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // jsonpCallback: "myJsonMethod",
        beforeSend: function () {
            loadingIcon.setAttribute("style", "");
            searchBox.setAttribute("style", "display:none");
        },
        success: function (json) {
            // 清空上一次搜尋結果
            let modalbody = document.getElementById("modalbody");
            modalbody.innerHTML = "";
            // 加入新搜尋之結果
            getSearchResult(json);
            $("#exampleModalLong").modal("toggle");
            console.log(json);
        },
        error: function (e) {
            console.log(e);
        },
        complete: function () {
            loadingIcon.setAttribute("style", "display:none");
            searchBox.setAttribute("style", "");
        }
    });
}

// getSearchResult(searchData);

function getSearchResult(searchResult) {

    let modalBody = document.getElementById("modalbody");

    let searchContent = searchResult.search;

    // 獲取使用者所選之標籤
    let userFilter = getServiceLevelFilter();

    for (x in searchContent) {
        let flag = true;

        console.log(searchContent)
        // 過濾未包含使用者所選之標籤者 進行淘汰
        for (filter in userFilter) {
            // console.log("userFilter[filter]: "+userFilter[filter]);
            if (!searchContent[x].feature.includes(userFilter[filter])) {
                flag = false;
            }
        }

        if (flag) {
            // 間格每個項目的間距
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            let col = document.createElement("div");
            col.setAttribute("class", "col py-2");

            let searchCard = document.createElement("div");
            searchCard.setAttribute("class", "card");

            let searchCardBody = document.createElement("div");
            searchCardBody.setAttribute("class", "card-body");

            let searchCardBodyRow = document.createElement("div");
            searchCardBodyRow.setAttribute("class", "row");

            // 圖片
            let bodyCol1 = document.createElement("div");
            bodyCol1.setAttribute("class", "col-md-3 text-center d-flex");

            let bodyCol1Img = document.createElement("img");
            bodyCol1Img.setAttribute("src", searchContent[x].image);
            bodyCol1Img.setAttribute("onerror", "this.src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'");
            bodyCol1Img.setAttribute("alt", "");
            bodyCol1Img.setAttribute("class", "mx-auto my-auto");
            bodyCol1Img.setAttribute("style", "max-width: 200px; max-height: 200px;");
            bodyCol1.appendChild(bodyCol1Img);
            searchCardBodyRow.appendChild(bodyCol1);

            // OAS 內容
            let bodyCol2 = document.createElement("div");
            bodyCol2.setAttribute("class", "col-md-9");

            let col2Row = document.createElement("div");
            col2Row.setAttribute("class", "row my-1");

            // 設定 OAS Name
            let nameCol = document.createElement("div");
            nameCol.setAttribute("class", "col text-left");
            let nameColH4 = document.createElement("h4");
            nameColH4.appendChild(document.createTextNode(" # " + searchContent[x].resourceId + " - " + searchContent[x].resourceName));
            nameCol.appendChild(nameColH4);
            col2Row.appendChild(nameCol);

            // 設定 跳轉至 該 OAS 頁面之按鈕
            let btnCol = document.createElement("div");
            btnCol.setAttribute("class", "col text-right");
            let btnColA = document.createElement("a");
            btnColA.setAttribute("class", "btn btn-info");
            btnColA.setAttribute("style", "background-color:#565656");
            btnColA.setAttribute("href","/" + searchContent[x].resourceId + "/OAS");
	    btnColA.setAttribute("target","_blank");
            btnColA.appendChild(document.createTextNode("See Service Detail"));
            btnCol.appendChild(btnColA);
            col2Row.appendChild(btnCol);

            bodyCol2.appendChild(col2Row);

            let col2Row2 = document.createElement("div");
            col2Row2.setAttribute("class", "row my-1");

            let col2Row2Col = document.createElement("div");
            col2Row2Col.setAttribute("class", "col");

            for (y in searchContent[x].feature) {
                let featureSpan = document.createElement("span");
                
                featureSpan.setAttribute("class", "badge badge-success mx-1");
                featureSpan.setAttribute("style", "background-color:#C09F80");
                
                if(searchContent[x].feature[y].includes("Test")){
                    let rate = searchContent[x].feature[y].split("%")[0];
                    console.log(rate)
                    if(rate >= 80){
                        featureSpan.setAttribute("class", "badge badge-success mx-1");
                        featureSpan.style.background='';
                    } else if(rate >= 60 && rate < 80){
                        featureSpan.setAttribute("class", "badge badge-waring mx-1");
                        featureSpan.style.background='';
                    } else if(rate > 0 && rate < 60){
                        featureSpan.setAttribute("class", "badge badge-danger mx-1");
                        featureSpan.style.background='';
                    } 
                }
                featureSpan.appendChild(document.createTextNode(searchContent[x].feature[y]));

                col2Row2Col.appendChild(featureSpan);
            }

            col2Row2.appendChild(col2Row2Col);
            bodyCol2.appendChild(col2Row2);

            let col2Row3 = document.createElement("div");
            col2Row3.setAttribute("class", "row my-1");

            let col2Row3Col = document.createElement("div");
            col2Row3Col.setAttribute("class", "col my-2");

            let col2Row3ColP = document.createElement("p");
            col2Row3ColP.setAttribute("class", "mx-auto my-auto text-truncate");
            if (searchContent[x].description == null) {
                col2Row3ColP.appendChild(document.createTextNode("No description"));
            } else {
                col2Row3ColP.appendChild(document.createTextNode(searchContent[x].description));
            }
            col2Row3Col.appendChild(col2Row3ColP);
            col2Row3.appendChild(col2Row3Col);
            bodyCol2.appendChild(col2Row3);

            searchCardBodyRow.appendChild(bodyCol2);
            searchCardBody.appendChild(searchCardBodyRow);
            searchCard.appendChild(searchCardBody);
            col.appendChild(searchCard);
            row.appendChild(col);
            modalBody.appendChild(row);
        }
    }

}

function getServiceLevelFilter() {
    var checkedValue = [];
    var inputElements = document.forms[0];
    for (i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            // console.log("inputElements: "+inputElements[i].value);
            checkedValue.push(inputElements[i].value);
        }
    }
    if(document.getElementById("customCheck7").value != "Testing")
        checkedValue.push(document.getElementById("customCheck7").value);
    console.log("User Filter: "+checkedValue);
    return checkedValue;
}
