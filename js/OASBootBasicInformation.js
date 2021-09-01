var FakeData = {
    "features": [
        "HTTPS support",
        "User authentication"
    ],
    "endpoints": [
        {
            "endpoint": "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/machineGroups",
            "rank": [
                {
                    "repoName": "Repo Name 1",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["@Test public void testWarzoneServiceRecord(HttpClient client, HttpGet get) throws Exception { get.setURI(new URI(String.format(warzoneServiceRecordEndpoint, \"Schooly%20D\"))); HttpResponse response = client.execute(get); String responseString = EntityUtils.toString(response.getEntity()); WarzoneServiceRecordSearch search = objectMapper.readValue(responseString, WarzoneServiceRecordSearch.class); assertNotNull(search); assertEquals(1, search.getResults().size()); assertEquals(\"Schooly D\", search.getResults().get(0).getId()); }", "Eomplyee2(){}", "Eomplyee3(){}"],
                    "score": "5"
                }
            ],
            "operations": [
                {
                    "features": [
                        "REST-style URls",
                        "HTTP status code use",
                        "Explain Error messages",
                        "Input format JSON",
                        "Output format JSON"
                    ],
                    "description": "Returns a collection of machine groups this machine belongs to during the specified time interval.",
                    "operation": "get",
                    "inputParameters": [
                        {
                            "in": "query",
                            "parameter": "api-version",
                            "description": "API version.",
                            "id": "2331",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "machineName",
                            "description": "Machine resource name.",
                            "id": "2332",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "query",
                            "parameter": "startTime",
                            "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m",
                            "id": "2333",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "query",
                            "parameter": "endTime",
                            "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow",
                            "id": "2334",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "path",
                            "parameter": "subscriptionId",
                            "description": "Azure subscription identifier.",
                            "id": "2328",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "workspaceName",
                            "description": "OMS workspace containing the resources of interest.",
                            "id": "2330",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "resourceGroupName",
                            "description": "Resource group name within the specified subscriptionId.",
                            "id": "2329",
                            "type": "string",
                            "required": true
                        }
                    ],
                    "statusCode": [
                        {
                            "default": [
                                {
                                    "parameter": "error",
                                    "description": "Error information.",
                                    "id": 2339,
                                    "type": "ref",
                                    "required": true
                                }
                            ]
                        },
                        {
                            "200": [
                                {
                                    "parameter": "nextLink",
                                    "description": "The URL to the next set of resources.",
                                    "id": 2336,
                                    "type": "string",
                                    "required": false
                                },
                                {
                                    "parameter": "value",
                                    "description": "Collection of Machine Group resources.",
                                    "id": 2337,
                                    "type": "array",
                                    "required": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "endpoint": "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports",
            "rank": [
                {
                    "repoName": "Repo Name 1",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["Eomplyee1(){}", "Eomplyee2(){}", "Eomplyee3(){}"],
                    "score": "5"
                },
                {
                    "repoName": "Repo Name 2",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["Eomplyee1(){}", "Eomplyee2(){}"],
                    "score": "4"
                }
            ],
            "operations": [
                {
                    "features": [
                        "REST-style URls",
                        "HTTP status code use",
                        "Explain Error messages",
                        "Input format JSON",
                        "Output format JSON"
                    ],
                    "description": "Returns a collection of live ports on the specified machine during the specified time interval.",
                    "operation": "get",
                    "inputParameters": [
                        {
                            "in": "query",
                            "parameter": "endTime",
                            "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow",
                            "id": "2348",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "path",
                            "parameter": "workspaceName",
                            "description": "OMS workspace containing the resources of interest.",
                            "id": "2344",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "query",
                            "parameter": "api-version",
                            "description": "API version.",
                            "id": "2345",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "machineName",
                            "description": "Machine resource name.",
                            "id": "2346",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "query",
                            "parameter": "startTime",
                            "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m",
                            "id": "2347",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "path",
                            "parameter": "subscriptionId",
                            "description": "Azure subscription identifier.",
                            "id": "2342",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "resourceGroupName",
                            "description": "Resource group name within the specified subscriptionId.",
                            "id": "2343",
                            "type": "string",
                            "required": true
                        }
                    ],
                    "statusCode": [
                        {
                            "default": [
                                {
                                    "parameter": "error",
                                    "description": "Error information.",
                                    "id": 2353,
                                    "type": "ref",
                                    "required": true
                                }
                            ]
                        },
                        {
                            "200": [
                                {
                                    "parameter": "value",
                                    "description": "Collection of Port resources.",
                                    "id": 2351,
                                    "type": "array",
                                    "required": false
                                },
                                {
                                    "parameter": "nextLink",
                                    "description": "The URL to the next set of resources.",
                                    "id": 2350,
                                    "type": "string",
                                    "required": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "endpoint": "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}",
            "rank": [
                {
                    "repoName": "Repo Name 1",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["Eomplyee1(){}", "Eomplyee2(){}", "Eomplyee3(){}"],
                    "score": "5"
                },
                {
                    "repoName": "Repo Name 2",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["Eomplyee1(){}", "Eomplyee2(){}", "Eomplyee3(){}"],
                    "score": "4"
                },
                {
                    "repoName": "Repo Name 3",
                    "repoUrl": "Repo Url",
                    "javaDoc": "Main.java",
                    "methodName": ["Eomplyee1(){}", "Eomplyee2(){}", "Eomplyee3(){}"],
                    "score": "3"
                }
            ],
            "operations": [
                {
                    "features": [
                        "REST-style URls",
                        "HTTP status code use",
                        "Explain Error messages",
                        "Input format JSON",
                        "Output format JSON"
                    ],
                    "description": "Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.",
                    "operation": "get",
                    "inputParameters": [
                        {
                            "in": "query",
                            "parameter": "endTime",
                            "description": "UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow",
                            "id": "2363",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "query",
                            "parameter": "startTime",
                            "description": "UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m",
                            "id": "2362",
                            "type": "string",
                            "required": false
                        },
                        {
                            "in": "path",
                            "parameter": "portName",
                            "description": "Port resource name.",
                            "id": "2361",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "machineName",
                            "description": "Machine resource name.",
                            "id": "2360",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "query",
                            "parameter": "api-version",
                            "description": "API version.",
                            "id": "2359",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "workspaceName",
                            "description": "OMS workspace containing the resources of interest.",
                            "id": "2358",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "resourceGroupName",
                            "description": "Resource group name within the specified subscriptionId.",
                            "id": "2357",
                            "type": "string",
                            "required": true
                        },
                        {
                            "in": "path",
                            "parameter": "subscriptionId",
                            "description": "Azure subscription identifier.",
                            "id": "2356",
                            "type": "string",
                            "required": true
                        }
                    ],
                    "statusCode": [
                        {
                            "default": [
                                {
                                    "parameter": "error",
                                    "description": "Error information.",
                                    "id": 2369,
                                    "type": "ref",
                                    "required": true
                                }
                            ]
                        },
                        {
                            "200": [
                                {
                                    "parameter": "name",
                                    "description": "Resource name.",
                                    "id": 2366,
                                    "type": "string",
                                    "required": false
                                },
                                {
                                    "parameter": "type",
                                    "description": "Resource type.",
                                    "id": 2367,
                                    "type": "string",
                                    "required": false
                                },
                                {
                                    "parameter": "id",
                                    "description": "Resource identifier.",
                                    "id": 2365,
                                    "type": "string",
                                    "required": false
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "provider": "azure.com",
    "contact": "this service provider by yahoo company",
    "host": "management.azure.com",
    "description": "Service Map API Reference",
    "title": "Service Map"
};

var FakejavaParserData = {
    "rank": [
        {
            "repoName": "Repo Name 1",
            "repoUrl": "Repo Url",
            "javaDoc": "Main.java",
            "methodName": "Eomplyee(){}",
            "score": "5"
        },
        {
            "repoName": "Repo Name 2",
            "repoUrl": "Repo Url",
            "javaDoc": "Main.java",
            "methodName": "Eomplyee(){}",
            "score": "4"
        },
        {
            "repoName": "Repo Name 3",
            "repoUrl": "Repo Url",
            "javaDoc": "Main.java",
            "methodName": "Eomplyee(){}",
            "score": "3"
        }
    ]
};

let temporaryData;


// parseOASBasicData(data2, javaParserData);
let OASPageLoadingIcon = document.getElementById("OASPageLoading");
let OASPage = document.getElementById("OASPage");
var resourceId = document.getElementById("OASId").textContent;
var resourceName = document.getElementById("OASName");
/*var inputData= [{}];
inputData.resourceId = resourceId;*/
var parameterIn = [];
let data;
const ipUrl = "http://140.121.197.130:55213";
const ipFront = "http://140.121.197.130:55212";
$.ajax({
    url: ipUrl+"/getOASInformation/" + resourceId,
    type: "GET",
    crossDomain: true,
    async: false,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    // jsonpCallback: "myJsonMethod",
    beforeSend: function () {
        // OASPageLoadingIcon.setAttribute("style", "");
        // OASPage.setAttribute("style", "display:none");
    },
    success: function (json) {
        parseOASBasicData(json);
        data = json;
        temporaryData = json;
    },
    error: function (e) {
        console.log(e);
    },
    complete: function () {
        OASPageLoadingIcon.setAttribute("style", "display:none");
        OASPage.setAttribute("style", "");
    }
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function bookmarkOAS(){
	
	//改存id 和 name
	var list = [];
	var data;
	if(localStorage.getItem("bookmark")==null){
		//data = resourceId+'-'+resourceName
		list.push(resourceId);
		localStorage.setItem("bookmark", JSON.stringify(list));
		//$("#dropdown-menu").load(location.href +"#dropdown-menu");
	}
		
	else{
		
		list = (JSON.parse(localStorage.getItem("bookmark")));
		if(list.indexOf(resourceId)==-1){ 			
			list.push(resourceId);
			localStorage.setItem("bookmark", JSON.stringify(list));
			//$("#dropdown-menu").load(location.href +"#dropdown-menu");
		}
			
	}

}

function refreshOASBasicDataWithUserFilter() {
    var tag = document.getElementById("OASTag");
    tag.innerHTML = "";
    var endpointsHtmlPosition = document.getElementById("EndpointCard");
    endpointsHtmlPosition.innerHTML = "";
    parseOASBasicData(temporaryData);
    //drawTestingResult(temporaryData);
}


function parseOASBasicData(data) {
    console.log("------ALL DATA-----"+ data);
    // 獲取使用者所選之標籤
    let userFilter = getEndpointLevelFilter();

    // 設定 Title
    console.log(data.title);
    var title = document.getElementById("OASName");
    title.innerHTML = data.title;
    
    //ADMIN
    var admin = document.getElementById("admin");
    admin.setAttribute("onclick",'window.open("http:\/\/140.121.197.131:7333/editTestCase.html#'+parseInt(resourceId)+'")');


    let proberOAS = document.getElementById("ProberOAS");
    proberOAS.setAttribute("onclick",'window.open("'+ipUrl+'/getOASDoc/'+parseInt(resourceId)+'")')
    

    
    //signup/login
    //http://140.121.197.131:8000/user
    //document.getElementById("loginbtn").setAttribute("href","http://140.121.197.131:8000/user#"+parseInt(resourceId))
    document.getElementById("signUp").setAttribute("onclick","signup()");
    document.getElementById("login").setAttribute("onclick","login()");
    // 設定 Testing
    var testing = document.getElementById("OASTest");
    let testingResultProbNum = 0;
    let testingResultProb = 0;
    for (x in data.endpoints) {
        let Operations = data.endpoints[x].operations;
        for(y in Operations){
            if("testingResult" in (Operations[y])){
                let operation = Operations[y];
                testingResultProbNum ++;
                let testingResult = operation.testingResult[operation.testingResult.length-1];
                let pass = testingResult.split("-")[2].split("/")[0];
                let all = testingResult.split("-")[2].split("/")[1];
                testingResultProb += pass/all;
                console.log(testingResultProb)
            }
            
        }
    }
    var tag = document.getElementById("OASTestTag"); 
    var spanItem = document.createElement("span");
   // console.log(parseInt(testingResultProb/testingResultProbNum));
    testingResultProbNum;
    if(testingResultProb/testingResultProbNum >= 1){
        
        spanItem.setAttribute("class", "badge badge-success mx-1");
        spanItem.textContent = "100% Test Pass"
        tag.appendChild(spanItem);
    }
    else if(testingResultProb/testingResultProbNum < 1 && testingResultProb/testingResultProbNum > 0.6){
        
        spanItem.setAttribute("class", "badge badge-waring mx-1");
        spanItem.textContent = "60% Test Pass"
        tag.appendChild(spanItem);
    }
    else if(testingResultProb/testingResultProbNum < 0.6 && testingResultProb/testingResultProbNum > 0.0 ){
        
        spanItem.setAttribute("class", "badge badge-danger mx-1");
        spanItem.textContent = "Test Fail"
        tag.appendChild(spanItem);
    }
    
    testing.innerHTML = (testingResultProb/testingResultProbNum)?"<a href='" + ipFront  + "/testcases#"+parseInt(resourceId)+"' target='_blank'>Service Testing Result: "+(testingResultProb/testingResultProbNum)*100+"%</a>":"No Test";

    // 設定 Features
    for (x in data.features) {
        console.log(data.features[x]);
        var tag = document.getElementById("OASTag");
        var spanItem = document.createElement("span");
        spanItem.setAttribute("class", "badge badge-success mx-1");
        spanItem.textContent = data.features[x];
        tag.appendChild(spanItem);
    }

    // 設定 Description
    console.log(data.description);
    var description = document.getElementById("Description");
    if (description == null) {
        description.innerHTML = "No description";
    } else {
        description.innerHTML = data.description;
    }

    // 設定 Provider
    console.log(data.provider);
    var provider = document.getElementById("Provider");
    provider.innerHTML = data.provider?data.provider:"Provider";

    /*// 設定 Host
    console.log(data.host);
    var host = document.getElementById("Host");
    host.innerHTML = data.host;*/

    // 設定 BaseUrl
    console.log(data.baseUrl);
    var baseUrl = document.getElementById("BaseUrl");
    baseUrl.innerHTML = data.baseUrl;

    // 設定 Swagger url
    console.log(data.swaggerUrl);
    var swagger = document.getElementById("swaggerUrl");
    swagger.innerHTML = data.swaggerUrl?"<a href='"+data.swaggerUrl+"' target='_blank'>"+data.swaggerUrl+"</a>":"No URL";

    // Endpoints 插入點
    console.log(data.endpoints);
    var endpointsHtmlPosition = document.getElementById("EndpointCard");

    // 用來控制每個 status code 獨立展開
    var StatusCodeID = 0;

    // 迴圈加入 path 
    for (x in data.endpoints) {
        // 避免被 operation 動到 x 值，導致 java example 顯示錯誤
        let fixed_X = x;
        
        let OASPathsRowContainer = document.createElement("div");
        OASPathsRowContainer.setAttribute("class", "row py-3");

        // 設定 path Card 容器
        console.log(data.endpoints[x].endpoint);
        let pathColContainer = document.createElement("div");
        pathColContainer.setAttribute("class", "col-md-9");

        // path Card 
        let pathCard = document.createElement("div");
        pathCard.setAttribute("class", "card");

        // path Card Header
        let pathCardHeader = document.createElement("div");
        pathCardHeader.setAttribute("class", "card-header");
        //新增錨點，提供相似服務及mashup快速尋找
        pathCardHeader.setAttribute("id", data.endpoints[x].endpoint);


        // 設定 path Card Header 內容 及將 Header 加入 path Card 
        let pathCardHeaderH4 = document.createElement("h4");
        pathCardHeaderH4.setAttribute("class", "card-title");
        let pathCardHeaderH4Text = document.createTextNode(data.endpoints[x].endpoint);
        pathCardHeaderH4.appendChild(pathCardHeaderH4Text);
        pathCardHeader.appendChild(pathCardHeaderH4);
        pathCard.appendChild(pathCardHeader);

        let Operations = data.endpoints[x].operations;
        let Endpoints = data.endpoints[x].endpoint;

        // 迴圈加入 operation 操作
        for (y in Operations) {

            let flag = true;

            //testing 
            let testingPass = 0;
            if(("testingResult" in Operations[y])){
                var len = Operations[y].testingResult.length-1;                    
                var item = Operations[y].testingResult[len];                    
                var result = item.split("-")[2];
                testingPass = result.split("/")[0]/result.split("/")[1];
                console.log("----TT"+testingPass);
            }

            // 過濾未包含使用者所選之標籤者 進行淘汰
            for (filter in userFilter) {
                // console.log("userFilter[filter]: "+userFilter[filter]);
                
                if((userFilter[filter]=='TestPass' && testingPass < 0.6)){
                    flag = false;
                }
                if ( !("features" in Operations[y]) || !Operations[y].features.includes(userFilter[filter]) || (userFilter[filter]=='TestPass' && testingPass < 0.6)) {
                    
                    console.log(testingPass)
                    flag = false;
                    console.log("Not Match in" + Operations[y].features + " and " +userFilter[filter]);
                }  
                /*if(("features" in Operations[y])){
                    if((userFilter[filter]=='TestPass' && testingPass < 0.6)){
                        flag = false;
                        alert(1)
                    }
                    if(!Operations[y].features.includes(userFilter[filter])){
                         flag = false;
                         alert(2)
                    }
                       
                }
                else{
                    if((userFilter[filter]=='TestPass' && testingPass < 0.6)){
                        flag = false; 
                        alert(3)
                    }
                        
                    
                }*/
                      
                
            }
            

            if (flag) {
                //console.log("------endpoint"+data.endpoints[x].endpoint);
                // path Card Body
                let pathCardBody = document.createElement("div");
                pathCardBody.setAttribute("class", "card-body");

                // operaiotn Card
                let operationCard = document.createElement("div");
                operationCard.setAttribute("class", "card");

                // operation Card Header
                let operationCardHeader = document.createElement("div");
                operationCardHeader.setAttribute("class", "card-header");

                // operation Card Header - testing
                let operationCardHeaderTesting = document.createElement("div");
                operationCardHeaderTesting.setAttribute("class", "card-header");

                // opration Card Foot
                let operationCardFooter = document.createElement("div");
                operationCardFooter.setAttribute("class", "card-footer");
                operationCardFooter.setAttribute("id", "operationCardFooter"+Operations[y].id);

                

                // 設定 operation Card Header 內容 及將 Header 加入 operation Card 
                let operationCardHeaderH4 = document.createElement("h4");
                let operationCardHeaderP = document.createElement("p");
                operationCardHeaderH4.setAttribute("class", "card-title");
                let operationCardHeaderH4Text = document.createTextNode(Operations[y].operation);
                let operationCardHeaderPText;
                if (Operations[y].description == null) {
                    operationCardHeaderPText = document.createTextNode("No description");
                } else {
                    operationCardHeaderPText = document.createTextNode(Operations[y].description);
                }
                
                operationCardHeaderH4.appendChild(operationCardHeaderH4Text);
                operationCardHeaderP.appendChild(operationCardHeaderPText);
                operationCardHeader.appendChild(operationCardHeaderH4);
                operationCardHeader.appendChild(operationCardHeaderP);
                
                // 設定 operation Features
                for (f in Operations[y].features) {
                    console.log(Operations[y].features[f]);
                    var spanItem = document.createElement("span");
                    spanItem.setAttribute("class", "badge badge-info mx-1");
                    console.log(f)
                    if(Operations[y].features[f] == "Authentication"){
                            spanItem.textContent = "Authentication and Authorization";
                            
                            console.log("-------Authentication------")
                            //operationCard.appendChild(operationCardHeader);
                    }
                    else {
                        spanItem.textContent = Operations[y].features[f];
                        //operationCardHeader.appendChild(spanItem);
                       
                    }
                    operationCardHeader.appendChild(spanItem);

                    operationCard.appendChild(operationCardHeader);
                    
                }
                
                // Set testing tag
                if(("testingResult" in Operations[y])){
                    var spanTestingItem = document.createElement("span");
                    var len = Operations[y].testingResult.length-1;                    
                    var item = Operations[y].testingResult[len];                    
                    var result = item.split("-")[2];
                    console.log("-----"+result.split("/")[0]/result.split("/")[1])
                    if(result.split("/")[0]/result.split("/")[1] >= 1){
                        spanTestingItem.textContent = "100% Test Pass";
                        spanTestingItem.setAttribute("class", "badge badge-success mx-1");
                        operationCardHeaderTesting.appendChild(spanTestingItem);
                    } else if(result.split("/")[0]/result.split("/")[1] >= 0.6 && result.split("/")[0]/result.split("/")[1] < 1){
                        spanTestingItem.textContent = "60% Test Pass";
                        spanTestingItem.setAttribute("class", "badge badge-warning mx-1");
                        operationCardHeaderTesting.appendChild(spanTestingItem);
                    } else{
                        spanTestingItem.textContent = "Test Fail";
                        spanTestingItem.setAttribute("class", "badge badge-danger mx-1");
                        operationCardHeaderTesting.appendChild(spanTestingItem);
                    }
                    
                    operationCard.appendChild(operationCardHeaderTesting);
                }
                
                operationCard.appendChild(operationCardHeader);
               
                
                // operation Card Body
                let operationCardBody = document.createElement("div");
                operationCardBody.setAttribute("class", "card-body");

                // operation Card body Row
                let operationCardBodyRow = document.createElement("div");
                operationCardBodyRow.setAttribute("class", "row");

                // operation Card body Input Col
                let operationCardBodyInputCol = document.createElement("div");
                operationCardBodyInputCol.setAttribute("class", "col-md-6");

                // Input Card
                let inputCard = document.createElement("div");
                inputCard.setAttribute("class", "card");

                // Input Card Header
                let inputCardHeader = document.createElement("div");
                inputCardHeader.setAttribute("class", "card-header");   
        



                // 設定 input Card Header 內容 及將 Header 加入 input Card 
                let inputCardHeaderH4 = document.createElement("h4");
                inputCardHeaderH4.setAttribute("class", "card-title");
                let inputCardHeaderH4Text = document.createTextNode("Input-Parameter");
                inputCardHeaderH4.appendChild(inputCardHeaderH4Text);
                inputCardHeader.appendChild(inputCardHeaderH4);
                inputCard.appendChild(inputCardHeader);
		
                // Input Card Body
                let inputCardBody = document.createElement("div");
                inputCardBody.setAttribute("class", "card-body");

                
                
               
                // 迴圈 創建 Input 內容
                for (z in Operations[y].inputParameters) {

                    // Input Button Row
                    let inputCardBodyButtonRow = document.createElement("div");
                    inputCardBodyButtonRow.setAttribute("class", "row");

                    // Input Button Col
                    let inputCardBodyButtonCol = document.createElement("div");
                    inputCardBodyButtonCol.setAttribute("class", "col");

		    


                    // Input Button 內容設定 以及加入 Input Row
                    
                    let inputCardBodyButton = document.createElement("button");
                    if (Operations[y].inputParameters[z].required == false) {
                        inputCardBodyButton.setAttribute("class", "btn btn-primary collapsible");
                    } else if (Operations[y].inputParameters[z].required == true) {
                        inputCardBodyButton.setAttribute("class", "btn btn-warning collapsible");
                    }
                    // inputCardBodyButton.setAttribute("class", "btn btn-primary collapsible");
                    inputCardBodyButton.setAttribute("type", "button");
                    inputCardBodyButton.setAttribute("data-toggle", "collapse");
                    inputCardBodyButton.setAttribute("data-target", "#btn" + Operations[y].inputParameters[z].id);
                    inputCardBodyButton.setAttribute("aria-expanded", "false");
                    inputCardBodyButton.setAttribute("aria-controls", "btn" + Operations[y].inputParameters[z].id);
                    let inputCardBodyButtonText = document.createTextNode(Operations[y].inputParameters[z].parameter);
                    inputCardBodyButton.appendChild(inputCardBodyButtonText);
                    inputCardBodyButtonCol.appendChild(inputCardBodyButton);
                    inputCardBodyButtonRow.appendChild(inputCardBodyButtonCol);


                    
		    
		    // Input Test
		    /*let inputCardBodyInput = document.createElement("input");
		    inputCardBodyInput.setAttribute("style", "float:left; border:solid 1px #ccc; border-radius: 5px;");
		    inputCardBodyInput.setAttribute("size", "10");
		    inputCardBodyButtonRow.appendChild(inputCardBodyInput);*/

                    // Input Table Row
                    let inputCardBodyTableRow = document.createElement("div");
                    inputCardBodyTableRow.setAttribute("class", "row");

                    // Input Table Col
                    let inputCardBodyTableCol = document.createElement("div");
                    inputCardBodyTableCol.setAttribute("class", "col");

                    // Input Table Collapse
                    let inputCardBodyTableCollapse = document.createElement("div");
                    inputCardBodyTableCollapse.setAttribute("class", "collapse well");
                    inputCardBodyTableCollapse.setAttribute("id", "btn" + Operations[y].inputParameters[z].id);

                    // Input Table
                    let inputCardBodyTable = document.createElement("table");
                    inputCardBodyTable.setAttribute("class", "table");

                    // Input Table Body
                    let inputCardBodyTableBody = document.createElement("tbody");

                    var arrayTitle = ["in", "type", "description", "required"]
                    var arrayContent = [Operations[y].inputParameters[z].in, Operations[y].inputParameters[z].type, Operations[y].inputParameters[z].description, Operations[y].inputParameters[z].required];

                    for (var i = 0; i < 4; i++) {
                        var tr = document.createElement('tr');
                        var td1 = document.createElement('td');
                        var td2 = document.createElement('td');

                        td1.appendChild(document.createTextNode(arrayTitle[i]));
                        if (arrayTitle[i] == "description" && arrayContent[i] == null) {
                            td2.appendChild(document.createTextNode("No description"));
                        } else {
                            td2.appendChild(document.createTextNode(arrayContent[i]));
                        }

                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        inputCardBodyTableBody.appendChild(tr);
                    }

                    inputCardBodyTable.appendChild(inputCardBodyTableBody);
                    inputCardBodyTableCollapse.appendChild(inputCardBodyTable);
                    inputCardBodyTableCol.appendChild(inputCardBodyTableCollapse);
                    inputCardBodyTableRow.appendChild(inputCardBodyTableCol);
		    
                    inputCardBody.appendChild(inputCardBodyButtonRow);
                    inputCardBody.appendChild(inputCardBodyTableRow);
                   
                }
                

                inputCard.appendChild(inputCardBody);
                operationCardBodyInputCol.appendChild(inputCard);
                operationCardBodyRow.appendChild(operationCardBodyInputCol);


                // operation Card body Status Code Col
                let operationCardBodyStatusCodeCol = document.createElement("div");
                operationCardBodyStatusCodeCol.setAttribute("class", "col-md-6");

                // Status Code Card
                let statusCodeCard = document.createElement("div");
                statusCodeCard.setAttribute("class", "card");

                // Status Code Card Header
                let statusCodeCardHeader = document.createElement("div");
                statusCodeCardHeader.setAttribute("class", "card-header");

                // 設定 Status Card Header 內容 及將 Header 加入 Status Card 
                let statusCodeCardHeaderH4 = document.createElement("h4");
                statusCodeCardHeaderH4.setAttribute("class", "card-title");
                let statusCodeCardHeaderH4Text = document.createTextNode("Status Code");
                statusCodeCardHeaderH4.appendChild(statusCodeCardHeaderH4Text);
                statusCodeCardHeader.appendChild(statusCodeCardHeaderH4);
                statusCodeCard.appendChild(statusCodeCardHeader);

                // Status Code Card Body
                let statusCodeCardBody = document.createElement("div");
                statusCodeCardBody.setAttribute("class", "card-body");

                // 迴圈 創建 Status Code 內容
                for (z in Operations[y].statusCode) {

                    // 設定 Group
                    let statusCodeGroup = document.createElement("div");
                    statusCodeGroup.setAttribute("class", "panel-group");

                    // 設定 Panel
                    let statusCodePanel = document.createElement("div");
                    statusCodePanel.setAttribute("class", "panel panel-default");

                    // 設定 Panel Header
                    let statusCodePanelHeader = document.createElement("div");
                    statusCodePanelHeader.setAttribute("class", "panel-heading");

                    // 設定 Panel Header 內容 並加入 Panel
                    let statusCodePanelHeaderText = document.createElement("h4");
                    let statusCodePanelHeaderTextA = document.createElement("a");
                    let statusCodePanelHeaderTextAText = document.createTextNode(Object.keys(Operations[y].statusCode[z])[0]);
                    statusCodePanelHeaderText.setAttribute("class", "panel-title");
                    statusCodePanelHeaderTextA.setAttribute("data-toggle", "collapse");
                    statusCodePanelHeaderTextA.setAttribute("href", "#StatusCode" + StatusCodeID);
                    statusCodePanelHeaderTextA.appendChild(statusCodePanelHeaderTextAText);
                    statusCodePanelHeaderText.appendChild(statusCodePanelHeaderTextA);
                    statusCodePanelHeader.appendChild(statusCodePanelHeaderText);
                    statusCodePanel.appendChild(statusCodePanelHeader);

                    // 設定 Panel Content
                    let statusCodePanelContent = document.createElement("div");
                    statusCodePanelContent.setAttribute("class", "panel-collapse collapse");
                    statusCodePanelContent.setAttribute("id", "StatusCode" + StatusCodeID);

                    // 設定 Panel Body 
                    let statusCodePanelBody = document.createElement("div");
                    statusCodePanelBody.setAttribute("class", "panel-body");

                    //假資料
                    // let fakerdata = document.createTextNode("Hello");
                    // statusCodePanelBody.appendChild(fakerdata);

                    // 針對 values 去抓取特定 jsonArray
                    var statusCodeName = Object.values(Operations[y].statusCode[z])[0];
                    for (w in statusCodeName) {

                        //console.log(statusCodeName[w].parameter);

                        // Output Button Row
                        let outputCardBodyButtonRow = document.createElement("div");
                        outputCardBodyButtonRow.setAttribute("class", "row");

                        // Output Button Col
                        let outputCardBodyButtonCol = document.createElement("div");
                        outputCardBodyButtonCol.setAttribute("class", "col");

                        // Output Button 內容設定 以及加入 Output Row
                        let outputCardBodyButton = document.createElement("button");
                        outputCardBodyButton.setAttribute("class", "btn btn-primary collapsible");
                        outputCardBodyButton.setAttribute("type", "button");
                        outputCardBodyButton.setAttribute("data-toggle", "collapse");
                        outputCardBodyButton.setAttribute("data-target", "#btn" + statusCodeName[w].id);
                        outputCardBodyButton.setAttribute("aria-expanded", "false");
                        outputCardBodyButton.setAttribute("aria-controls", "btn" + statusCodeName[w].id);
                        let outputCardBodyButtonText = document.createTextNode(statusCodeName[w].parameter);
                        outputCardBodyButton.appendChild(outputCardBodyButtonText);
                        outputCardBodyButtonCol.appendChild(outputCardBodyButton);
                        outputCardBodyButtonRow.appendChild(outputCardBodyButtonCol);

                        // Output Table Row
                        let outputCardBodyTableRow = document.createElement("div");
                        outputCardBodyTableRow.setAttribute("class", "row");

                        // Output Table Col
                        let outputCardBodyTableCol = document.createElement("div");
                        outputCardBodyTableCol.setAttribute("class", "col");

                        // Output Table Collapse
                        let outputCardBodyTableCollapse = document.createElement("div");
                        outputCardBodyTableCollapse.setAttribute("class", "collapse well");
                        outputCardBodyTableCollapse.setAttribute("id", "btn" + statusCodeName[w].id);

                        // Output Table
                        let outputCardBodyTable = document.createElement("table");
                        outputCardBodyTable.setAttribute("class", "table");

                        // Output Table Body
                        let outputCardBodyTableBody = document.createElement("tbody");

                        var arrayTitle = ["type", "description", "required"]
                        var arrayContent = [statusCodeName[w].type, statusCodeName[w].description, statusCodeName[w].required];

                        for (var i = 0; i < 3; i++) {
                            var tr = document.createElement('tr');
                            var td1 = document.createElement('td');
                            var td2 = document.createElement('td');

                            td1.appendChild(document.createTextNode(arrayTitle[i]));
                            if (arrayTitle[i] == "description" && arrayContent[i] == null) {
                                td2.appendChild(document.createTextNode("No description"));
                            } else {
                                td2.appendChild(document.createTextNode(arrayContent[i]));
                            }

                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            outputCardBodyTableBody.appendChild(tr);
                        }

                        outputCardBodyTable.appendChild(outputCardBodyTableBody);
                        outputCardBodyTableCollapse.appendChild(outputCardBodyTable);
                        outputCardBodyTableCol.appendChild(outputCardBodyTableCollapse);
                        outputCardBodyTableRow.appendChild(outputCardBodyTableCol);

                        statusCodePanelBody.appendChild(outputCardBodyButtonRow);
                        statusCodePanelBody.appendChild(outputCardBodyTableRow);

                    }
                    statusCodePanelContent.appendChild(statusCodePanelBody);
                    statusCodePanel.appendChild(statusCodePanelContent);
                    statusCodeGroup.appendChild(statusCodePanel);
                    statusCodeCardBody.appendChild(statusCodeGroup);
                    StatusCodeID++;
                    
                }

                statusCodeCard.appendChild(statusCodeCardBody);
                operationCardBodyStatusCodeCol.appendChild(statusCodeCard);
                operationCardBodyRow.appendChild(operationCardBodyStatusCodeCol);

                operationCardBody.appendChild(operationCardBodyRow);
                operationCard.appendChild(operationCardBody);
                
                
                //  start accordion - annotation/try/test case
                let accordion = document.createElement("div");
                accordion.setAttribute("class","accordion");
                accordion.setAttribute("id","accordionId"+Operations[y].id);

                
                // ----- accordion security annotate card
                let accordionAnnotateCard = document.createElement("div");
                accordionAnnotateCard.setAttribute("class","card");

                let accordionAnnotateHeader = document.createElement("div");
                accordionAnnotateHeader.setAttribute("class","card-header");
                accordionAnnotateHeader.setAttribute("id", "headingOne"+Operations[y].id);

                let AnnotateButton = document.createElement("button");
                AnnotateButton.setAttribute("class", "btn btn-link");
                AnnotateButton.setAttribute("data-toggle", "collapse");
                AnnotateButton.setAttribute("data-target","#AnnotateAccordion"+Operations[y].id);
                AnnotateButton.setAttribute("aria-expanded", "true");
                AnnotateButton.setAttribute("aria-controls", "AnnotateAccordion"+Operations[y].id);
                AnnotateButton.innerHTML = 'Security Annotation';
               
        
                let AnnotateArea = document.createElement("div");
                AnnotateArea.setAttribute("id", "AnnotateAccordion"+Operations[y].id);
                AnnotateArea.setAttribute("class", "collapse hide");
                AnnotateArea.setAttribute("aria-labelledby", "headingOne"+Operations[y].id);
                AnnotateArea.setAttribute("data-parent","#accordionId"+Operations[y].id);
        
                //var securityHtml = document.getElementById("securityAnnotationContent").innerHTML;
                let AnnotateBody = document.createElement("div");
                AnnotateBody.setAttribute("class","card-body");

                let annotateForm = document.createElement("div");
                annotateForm.setAttribute("id","annotateForm"+Operations[y].id);
                

                let schemeLabel = document.createElement("label");
                schemeLabel.setAttribute("for", "schemeControlSelect"+Operations[y].id);
                schemeLabel.innerHTML = "Select security scheme ";
                annotateForm.appendChild(schemeLabel);

                // scheme selector
                let schemeSelect = document.createElement("select");
                schemeSelect.setAttribute("id", "schemeControlSelect"+Operations[y].id);
                schemeSelect.setAttribute("class", "form-control");
                schemeSelect.setAttribute("onchange"," schemeSelect("+Operations[y].id+")");
                
                const schemes = ["HTTP","API keys","OAuth 2"];
                const schemesValue = ["http","apiKey","oauth2"];
                for(var optionIndex = 0; optionIndex < 3; optionIndex++){
                    var option = document.createElement("option");
                    option.setAttribute("value", schemesValue[optionIndex]);
                    option.innerHTML = schemes[optionIndex];
                    schemeSelect.appendChild(option);
                }
                annotateForm.appendChild(schemeSelect);

                // API keys
                let apiKeyArea = document.createElement("div");
                apiKeyArea.setAttribute("id","apiKey");
                apiKeyArea.setAttribute("class","form-group schemes"+Operations[y].id);
                apiKeyArea.setAttribute("style","display:none");

                let apiKeyInLable = document.createElement("label");
                apiKeyInLable.setAttribute("for","apiKeyIn"+Operations[y].id);
                apiKeyInLable.innerText = "in";
                let apiKeyInInput = document.createElement("input");
                apiKeyInInput.setAttribute("type","text");
                apiKeyInInput.setAttribute("id","apiKeyIn"+Operations[y].id);
                apiKeyInInput.setAttribute("class","form-control");
                apiKeyInInput.required = true;

                let apiKeyNameLable = document.createElement("label");
                apiKeyNameLable.setAttribute("for","apiKeyName"+Operations[y].id);
                apiKeyNameLable.innerText = "name"
                let apiKeyNameInput = document.createElement("input");
                apiKeyNameInput.setAttribute("type","text");
                apiKeyNameInput.setAttribute("id","apiKeyName"+Operations[y].id);
                apiKeyNameInput.setAttribute("class","form-control");
                apiKeyNameInput.required = true;

                
                apiKeyArea.appendChild(apiKeyInLable);
                apiKeyArea.appendChild(apiKeyInInput);
                apiKeyArea.appendChild(apiKeyNameLable);
                apiKeyArea.appendChild(apiKeyNameInput); 
                annotateForm.appendChild(apiKeyArea);

                // HTTP
                let httpArea = document.createElement("div");
                httpArea.setAttribute("id","http");
                httpArea.setAttribute("class","form-group schemes"+Operations[y].id);
                //httpArea.setAttribute("style","display:none");

                let httpSchemeLable = document.createElement("label");
                httpSchemeLable.setAttribute("for","httpScheme"+Operations[y].id);
                httpSchemeLable.innerText = "scheme";
                let httpSchemeInput = document.createElement("input");
                httpSchemeInput.setAttribute("type","text");
                httpSchemeInput.setAttribute("id","httpScheme"+Operations[y].id);
                httpSchemeInput.setAttribute("class","form-control");
                httpSchemeInput.required = true;

                let httpBearerLable = document.createElement("label");
                httpBearerLable.setAttribute("for","httpBearer"+Operations[y].id);
                httpBearerLable.innerText = "bearer format (JWT)";
                let httpBearerInput = document.createElement("input");
                httpBearerInput.setAttribute("type","text");
                httpBearerInput.setAttribute("id","httpBearer"+Operations[y].id);
                httpBearerInput.setAttribute("class","form-control");
                httpBearerInput.required = true;

                httpArea.appendChild(httpSchemeLable);
                httpArea.appendChild(httpSchemeInput);
                httpArea.appendChild(httpBearerLable);
                httpArea.appendChild(httpBearerInput); 
                annotateForm.appendChild(httpArea);
                
                // OAuth 2
                let oauth2Area = document.createElement("div");
                oauth2Area.setAttribute("id","oauth2");
                oauth2Area.setAttribute("class","form-group schemes"+Operations[y].id);
                oauth2Area.setAttribute("style","display:none");
                let oauth2Label = document.createElement("label");
                oauth2Label.setAttribute("for", "oauth2LabelSelect");
                oauth2Label.innerHTML = "Select OAuth2 type";
                oauth2Area.appendChild(oauth2Label);

                // OAuth 2 selector
                let oauth2Select = document.createElement("select");
                oauth2Select.setAttribute("id", "oauth2Select"+Operations[y].id);
                oauth2Select.setAttribute("class", "form-control");
                oauth2Select.setAttribute("onchange","oauth2Select("+Operations[y].id+")");
                
                const oauth2s = ["Implict Flow","Authorization Code Flow","Resource Owner Password Flow","Client Credentials Flow"];
                const oauth2sValue = ["implicit","authorizationCode","resourceOwnerPassword","clientCredentials"];
                for(var optionIndex = 0; optionIndex < 4; optionIndex++){
                    var option = document.createElement("option");
                    option.setAttribute("value", oauth2sValue[optionIndex]);
                    option.innerHTML = oauth2s[optionIndex];
                    oauth2Select.appendChild(option);
                }
                oauth2Area.appendChild(oauth2Select);
                
                // Implicit
                let implicitArea = document.createElement("div");
                implicitArea.setAttribute("class", "flow"+Operations[y].id);
                implicitArea.setAttribute("id","implicit");
                //implicitArea.setAttribute("style","display: none;");
                let implicitLable1 = document.createElement("label");
                implicitLable1.setAttribute("for","authorizationUrl"+Operations[y].id);
                implicitLable1.innerText = "authorization url";
                let implicitInput1 = document.createElement("input");
                implicitInput1.setAttribute("type","text");
                implicitInput1.setAttribute("id","authorizationUrl"+Operations[y].id);
                implicitInput1.setAttribute("class","implict form-control");
                implicitInput1.required = true;

                let implicitLable2 = document.createElement("label");
                implicitLable2.setAttribute("for","scopes"+Operations[y].id);
                implicitLable2.innerText = "scopes"
                var scopesHref = document.createElement("a");
                scopesHref.setAttribute("href","https://swagger.io/docs/specification/authentication/oauth2/")
                scopesHref.setAttribute("target","_blank");
                scopesHref.innerText = "  <About scopes>";
                implicitLable2.appendChild(scopesHref);
                let implicitInput2 = document.createElement("input");
                implicitInput2.setAttribute("type","text");
                implicitInput2.setAttribute("id","scopes"+Operations[y].id);
                implicitInput2.setAttribute("class","form-control");
                implicitInput2.setAttribute("placeholder","scope: description, read:pets: read pets");
                
                

                
                

                implicitArea.appendChild(implicitLable1);
                implicitArea.appendChild(implicitInput1);   
                implicitArea.appendChild(implicitLable2);
                implicitArea.appendChild(implicitInput2);              
                oauth2Area.appendChild(implicitArea);
                
                

                // Authorization Code
                let authorizationCodeArea = document.createElement("div");
                authorizationCodeArea.setAttribute("class", "flow"+Operations[y].id);
                authorizationCodeArea.setAttribute("style","display: none;");
                authorizationCodeArea.setAttribute("id","authorizationCode");
                let authorizationCodeLable1 = document.createElement("label");
                authorizationCodeLable1.setAttribute("for","authorizationUrl"+Operations[y].id);
                authorizationCodeLable1.innerText = "authorization url";
                let authorizationCodeInput1 = document.createElement("input");
                authorizationCodeInput1.setAttribute("type","text");
                authorizationCodeInput1.setAttribute("id","authorizationUrl"+Operations[y].id);
                authorizationCodeInput1.setAttribute("class","authorizationCode form-control");
                authorizationCodeInput1.required = true;

                let authorizationCodeLable2 = document.createElement("label");
                authorizationCodeLable2.setAttribute("for","tokenUrl"+Operations[y].id);
                authorizationCodeLable2.innerText = "token url";
                let authorizationCodeInput2 = document.createElement("input");
                authorizationCodeInput2.setAttribute("type","text");
                authorizationCodeInput2.setAttribute("id","tokenUrl"+Operations[y].id);
                authorizationCodeInput2.setAttribute("class","authorizationCode form-control");
                authorizationCodeInput2.required = true;
                
                let authorizationCodeLable3 = document.createElement("label");
                authorizationCodeLable3.setAttribute("for","scopes"+Operations[y].id);
                authorizationCodeLable3.innerText = "scopes"
                var scopesHref = document.createElement("a");
                scopesHref.setAttribute("href","https://swagger.io/docs/specification/authentication/oauth2/")
                scopesHref.setAttribute("target","_blank");
                scopesHref.innerText = "  <About scopes>";
                authorizationCodeLable3.appendChild(scopesHref);
                let authorizationCodeInput3 = document.createElement("input");
                authorizationCodeInput3.setAttribute("type","text");
                authorizationCodeInput3.setAttribute("id","scopes"+Operations[y].id);
                authorizationCodeInput3.setAttribute("class","form-control");
                authorizationCodeInput3.setAttribute("placeholder","scope: description, read:pets: read pets");

                authorizationCodeArea.appendChild(authorizationCodeLable1);
                authorizationCodeArea.appendChild(authorizationCodeInput1);
                authorizationCodeArea.appendChild(authorizationCodeLable2);
                authorizationCodeArea.appendChild(authorizationCodeInput2);  
                authorizationCodeArea.appendChild(authorizationCodeLable3);
                authorizationCodeArea.appendChild(authorizationCodeInput3);              
                oauth2Area.appendChild(authorizationCodeArea);
                
                // Resource Owner Password
                let resourceOwnerPasswordArea = document.createElement("div");
                resourceOwnerPasswordArea.setAttribute("class", "flow"+Operations[y].id);
                resourceOwnerPasswordArea.setAttribute("style","display: none;");
                resourceOwnerPasswordArea.setAttribute("id","resourceOwnerPassword");
                let resourceOwnerPasswordLable1 = document.createElement("label");
                resourceOwnerPasswordLable1.setAttribute("for","tokenUrl"+Operations[y].id);
                resourceOwnerPasswordLable1.innerText = "token url";
                let resourceOwnerPasswordInput1 = document.createElement("input");
                resourceOwnerPasswordInput1.setAttribute("type","text");
                resourceOwnerPasswordInput1.setAttribute("id","tokenUrl"+Operations[y].id);
                resourceOwnerPasswordInput1.setAttribute("class","resourceOwnerPassword form-control");
                resourceOwnerPasswordInput1.required = true;

                let resourceOwnerPasswordLable2 = document.createElement("label");
                resourceOwnerPasswordLable2.setAttribute("for","scopes"+Operations[y].id);
                resourceOwnerPasswordLable2.innerText = "scopes"
                var scopesHref = document.createElement("a");
                scopesHref.setAttribute("href","https://swagger.io/docs/specification/authentication/oauth2/")
                scopesHref.setAttribute("target","_blank");
                scopesHref.innerText = "  <About scopes>";
                resourceOwnerPasswordLable2.appendChild(scopesHref);
                let resourceOwnerPasswordInput2 = document.createElement("input");
                resourceOwnerPasswordInput2.setAttribute("type","text");
                resourceOwnerPasswordInput2.setAttribute("id","scopes"+Operations[y].id);
                resourceOwnerPasswordInput2.setAttribute("class","resourceOwnerPassword form-control");
                resourceOwnerPasswordInput2.setAttribute("placeholder","scope: description, read:pets: read pets");
                

                resourceOwnerPasswordArea.appendChild(resourceOwnerPasswordLable1);
                resourceOwnerPasswordArea.appendChild(resourceOwnerPasswordInput1);
                resourceOwnerPasswordArea.appendChild(resourceOwnerPasswordLable2);
                resourceOwnerPasswordArea.appendChild(resourceOwnerPasswordInput2);
                oauth2Area.appendChild(resourceOwnerPasswordArea);
                
                // Client Credentials
                let  clientCredentialsArea = document.createElement("div");
                clientCredentialsArea.setAttribute("class", "flow"+Operations[y].id);
                clientCredentialsArea.setAttribute("style","display: none;");
                clientCredentialsArea.setAttribute("id","clientCredentials");
                let clientCredentialsLable1 = document.createElement("label");
                clientCredentialsLable1.setAttribute("for","tokenUrl"+Operations[y].id);
                clientCredentialsLable1.innerText = "token url";
                let clientCredentialsInput1 = document.createElement("input");
                clientCredentialsInput1.setAttribute("type","text");
                clientCredentialsInput1.setAttribute("id","tokenUrl"+Operations[y].id);
                clientCredentialsInput1.setAttribute("class","clientCredentials form-control");
                clientCredentialsInput1.required = true;

                let clientCredentialsLable2 = document.createElement("label");
                clientCredentialsLable2.setAttribute("for","scopes"+Operations[y].id);
                clientCredentialsLable2.innerText = "scopes"
                var scopesHref = document.createElement("a");
                scopesHref.setAttribute("href","https://swagger.io/docs/specification/authentication/oauth2/")
                scopesHref.setAttribute("target","_blank");
                scopesHref.innerText = "  <About scopes>";
                clientCredentialsLable2.appendChild(scopesHref);
                let clientCredentialsInput2 = document.createElement("input");
                clientCredentialsInput2.setAttribute("type","text");
                clientCredentialsInput2.setAttribute("id","scopes"+Operations[y].id);
                clientCredentialsInput2.setAttribute("class","clientCredentials form-control");
                clientCredentialsInput2.setAttribute("placeholder","scope: description, read:pets: read pets");
                

                clientCredentialsArea.appendChild(clientCredentialsLable1);
                clientCredentialsArea.appendChild(clientCredentialsInput1);
                clientCredentialsArea.appendChild(clientCredentialsLable2);
                clientCredentialsArea.appendChild(clientCredentialsInput2);
                oauth2Area.appendChild(clientCredentialsArea);

                let paramToken = document.createElement("p");
                paramToken.innerText = "Parameter - Token";
                paramToken.setAttribute("style", "margin-top: 30px; border-left: 5px solid #97CBFF; padding: 10px; background-color: #ECF5FF; font-weight: bold;");
                annotateForm.appendChild(paramToken);

                let implicitLableParamIn = document.createElement("label");
                implicitLableParamIn.setAttribute("for","paramIn"+Operations[y].id);
                implicitLableParamIn.innerText = "in";    
                let implicitInputParamIn = document.createElement("input");
                implicitInputParamIn.setAttribute("type","text");
                implicitInputParamIn.setAttribute("id","paramIn"+Operations[y].id);
                implicitInputParamIn.setAttribute("class","form-control");   
                let implicitLableParamName = document.createElement("label");
                implicitLableParamName.setAttribute("for","paramIn"+Operations[y].id);
                implicitLableParamName.innerText = "name";    
                let implicitInputParamName = document.createElement("input");
                implicitInputParamName.setAttribute("type","text");
                implicitInputParamName.setAttribute("id","paramName"+Operations[y].id);
                implicitInputParamName.setAttribute("class","form-control");
                
                annotateForm.appendChild(oauth2Area);
                annotateForm.appendChild(implicitLableParamName);
                annotateForm.appendChild(implicitInputParamName);
                annotateForm.appendChild(implicitLableParamIn);
                annotateForm.appendChild(implicitInputParamIn);

                let editOASButton = document.createElement("button");
                editOASButton.setAttribute("class","btn");
                editOASButton.setAttribute("id", "editOAS"+Operations[y].id);
                editOASButton.setAttribute("style", "margin-right:10px; margin-top:10px;")
                editOASButton.innerHTML = "OAS Document";
                editOASButton.setAttribute("onclick", "showOAS("+resourceId+","+Operations[y].id+")");
                let editOAS = document.createElement("div");
                editOAS.setAttribute("id","oasjsoneditor"+Operations[y].id);
                editOAS.setAttribute("class", "card-body");
                editOAS.setAttribute("style","display:none");
                annotateForm.appendChild(editOASButton);
                annotateForm.appendChild(editOAS);

                let saveSchemeButton = document.createElement("button");
                saveSchemeButton.setAttribute("class","btn");
                saveSchemeButton.setAttribute("id","saveSchemeButton"+Operations[y].id);
                saveSchemeButton.setAttribute("style", "margin-right:10px; margin-top:10px;")
                saveSchemeButton.innerHTML = "Save Security Scheme";
                saveSchemeButton.setAttribute("onclick","saveScheme("+Operations[y].id+")");
                annotateForm.appendChild(saveSchemeButton)

                let OASInfo = document.createElement("p");
                OASInfo.setAttribute("style","font-weight:bold; margin-top: 10px;");
                OASInfo.setAttribute("id","OASInfo"+Operations[y].id);
                annotateForm.appendChild(OASInfo);

                

                AnnotateBody.appendChild(annotateForm);
                AnnotateArea.appendChild(AnnotateBody);
                


                
                accordionAnnotateHeader.appendChild(AnnotateButton);    
                accordionAnnotateCard.appendChild(accordionAnnotateHeader);                
                
                accordionAnnotateCard.appendChild(AnnotateArea);            
                accordion.appendChild(accordionAnnotateCard);
                
                // ----- accordion try card
                let accordionTryCard = document.createElement("div");
                accordionTryCard.setAttribute("class","card");
                
                
                let accordionTryHeader = document.createElement("div");
                accordionTryHeader.setAttribute("class","card-header");
                accordionTryHeader.setAttribute("id", "headingTwo"+Operations[y].id);
        
                let TryAccordion = document.createElement("button");
                TryAccordion.setAttribute("class", "btn btn-link");
                TryAccordion.setAttribute("data-toggle", "collapse");
                TryAccordion.setAttribute("data-target","#TryAccordion"+Operations[y].id);
                TryAccordion.setAttribute("aria-expanded", "true");
                TryAccordion.setAttribute("aria-controls", "TryAccordion");
                TryAccordion.innerHTML = 'Try';
                accordionTryHeader.appendChild(TryAccordion);
        
                let TryArea = document.createElement("div");
                TryArea.setAttribute("id", "TryAccordion"+Operations[y].id);
                TryArea.setAttribute("class", "collapse hide");
                TryArea.setAttribute("aria-labelledby", "headingTwo"+Operations[y].id);
                TryArea.setAttribute("data-parent","#accordionId"+Operations[y].id);
        
                let TryBody = document.createElement("div");
                TryBody.setAttribute("class","card-body");
                
                let TryForm = document.createElement("div");
                TryForm.setAttribute("id","tryForm"+Operations[y].id);
                //parameterIn = [];
                parameterIn = "[";
                for (z in Operations[y].inputParameters){
                   let TryBodyLabel = document.createElement("label");
                   TryBodyLabel.setAttribute("for","label"+Operations[y].inputParameters[z].id);
                   TryBodyLabel.innerHTML = Operations[y].inputParameters[z].parameter+":";
                   let TryBodyInput = document.createElement("input");
                   TryBodyInput.setAttribute("id","label"+Operations[y].inputParameters[z].id);
                   TryBodyInput.setAttribute("name",Operations[y].inputParameters[z].parameter);
                   TryBodyInput.setAttribute("class","form-control formElemants"+Operations[y].id);
                   //parameterIn.push(Operations[y].inputParameters[z].in);
                   z == Operations[y].inputParameters.length-1?parameterIn += '"'+ Operations[y].inputParameters[z].in + '"]':parameterIn += '"'+ Operations[y].inputParameters[z].in + '",';
                   // if parameter related security 

                   /*if(Operations[y].inputParameters[z].parameter.includes("token") || Operations[y].inputParameters[z].parameter.includes("password")){
                    TryBodyInput.setAttribute("type","password");
                   }*/
                   
                   Operations[y].inputParameters[z].required?TryBodyInput.required=true:TryBodyInput.required=false;
                   if(Operations[y].inputParameters[z].required) TryBodyInput.style.borderColor='#ced4da';
                   /*inputData.endpoint = data.endpoints[x].endpoint;
                   inputData.operation = Operations[y].operation;*/
                   TryForm.appendChild(TryBodyLabel);
                   TryForm.appendChild(TryBodyInput);
                   
                }
                

                let TryFooter = document.createElement("div");
                TryFooter.setAttribute("class","card-body");

                
                let AddSecurityValueBtn = document.createElement("button");
                AddSecurityValueBtn.innerHTML = "Obtain Access Token";
                AddSecurityValueBtn.setAttribute("class","btn");
                AddSecurityValueBtn.setAttribute("id","securityValueBtn"+Operations[y].id)
                AddSecurityValueBtn.setAttribute("style"," margin: 5px; margin-bottom:15px; width: 220px;float:right;");
                AddSecurityValueBtn.setAttribute("onclick", "window.open(\"" + ipFront +"/obtainToken#"+parseInt(resourceId)+"\");")

                let ImportTestCaseBtnInTry = document.createElement("button");
                ImportTestCaseBtnInTry.innerHTML = "Import Test Case";
                ImportTestCaseBtnInTry.setAttribute("class","btn");
                ImportTestCaseBtnInTry.setAttribute("id","importBtn"+Operations[y].id)
                ImportTestCaseBtnInTry.setAttribute("style","; margin: 5px; margin-bottom:15px; width: 220px; float:right;");
                ImportTestCaseBtnInTry.setAttribute("data-toggle","modal");
                ImportTestCaseBtnInTry.setAttribute("data-target","#importAtTry");
                
                var modalAtTest = document.createElement("div");
                modalAtTest.setAttribute("class", "modal fade");
                modalAtTest.setAttribute("id","importAtTry");
                modalAtTest.setAttribute("tabindex", "-1");
                modalAtTest.setAttribute("aria-hidden","false");
                modalAtTest.setAttribute("role", "dialog");
                
                var modalDocAtTest = document.createElement("div");
                modalDocAtTest.setAttribute("class", "modal-dialog");
                modalDocAtTest.setAttribute("role", "document");
                var modalContentAtTest = document.createElement("div");
                modalContentAtTest.setAttribute("class","modal-content");
                var modalHeaderAtTest = document.createElement("div");
                modalHeaderAtTest.setAttribute("class","modal-header");
                modalHeaderAtTest.innerHTML = '<h4>Test Case List</h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="false">&times;</span></button>';
                var modalBodyAtTest = document.createElement("div");
                modalBodyAtTest.setAttribute("class", "modal-body");
                var modalfluid =  document.createElement("div");
                modalfluid.setAttribute("class", "container-fluid fluid-try");
                modalfluid.setAttribute("id","modalfluid-try");
               
                modalBodyAtTest.appendChild(modalfluid);
                modalContentAtTest.appendChild(modalHeaderAtTest);
                modalContentAtTest.appendChild(modalBodyAtTest);
                modalDocAtTest.appendChild(modalContentAtTest);
                modalAtTest.appendChild(modalDocAtTest);
                document.body.appendChild(modalAtTest);
                
                let TryBtn = document.createElement("button");
                TryBtn.innerHTML = "Try";
                TryBtn.setAttribute("class","btn");
                TryBtn.setAttribute("style"," margin: 5px; margin-bottom:15px; width: 220px; float:right;");
                TryBtn.setAttribute("id","tryBtn"+Operations[y].id);
                
                let TryResponse = document.createElement("div");
                TryResponse.setAttribute("id","jsoneditorIntry"+Operations[y].id);
                TryResponse.setAttribute("class", "card-body");
                

                            
                
                            
                TryFooter.appendChild(AddSecurityValueBtn);
                TryForm.appendChild(TryFooter);  
                TryBody.appendChild(TryForm);
                    
                
                

                accordionTryCard.appendChild(accordionTryHeader);                
                TryFooter.appendChild(TryBtn); 
                TryFooter.appendChild(ImportTestCaseBtnInTry);                 
                //TryFooter.appendChild(AddSecurityValueBtn);               
                TryArea.appendChild(TryBody);
                TryArea.appendChild(TryResponse);
                //TryArea.appendChild(TryFooter);
                accordionTryCard.appendChild(TryArea);                        
                accordion.appendChild(accordionTryCard); 
                
                // Button Event Handle
                var formId = Operations[y].id;
                //console.log(parameterIn);
                //TryBtn.setAttribute("onclick", "myFunc("+formId+",["+parameterIn+"])");
                TryBtn.setAttribute("onclick", 'tryEndpoint('+formId+','+parameterIn+')');
                ImportTestCaseBtnInTry.setAttribute("onclick",  'importTestCase('+formId+',\"form\")');


                // ----- accordion test case card
                let accordionTestCaseCard = document.createElement("div");
                accordionTestCaseCard.setAttribute("class","card");
                
                
                let accordionTestCaseHeader = document.createElement("div");
                accordionTestCaseHeader.setAttribute("class","card-header");
                accordionTestCaseHeader.setAttribute("id", "headingThree"+Operations[y].id);
        
                let TestCaseAccordion = document.createElement("button");
                TestCaseAccordion.setAttribute("class", "btn btn-link");
                TestCaseAccordion.setAttribute("data-toggle", "collapse");
                TestCaseAccordion.setAttribute("data-target","#TestCaseAccordion"+Operations[y].id);
                TestCaseAccordion.setAttribute("aria-expanded", "true");
                TestCaseAccordion.setAttribute("aria-controls", "TestCaseAccordion");
                TestCaseAccordion.innerHTML = 'Test Case';
                accordionTestCaseHeader.appendChild(TestCaseAccordion);
        
                let TestCaseArea = document.createElement("div");
                TestCaseArea.setAttribute("id", "TestCaseAccordion"+Operations[y].id);
                TestCaseArea.setAttribute("class", "collapse hide");
                TestCaseArea.setAttribute("aria-labelledby", "headingThree"+Operations[y].id);
                TestCaseArea.setAttribute("data-parent","#accordionId"+Operations[y].id);
        
                let TestCaseBody = document.createElement("div");
                TestCaseBody.setAttribute("class","card-body");
                
        
                let TestCaseForm = document.createElement("div");
                TestCaseForm.setAttribute("id","testForm"+Operations[y].id);

                let inputValue = document.createElement("p");
                inputValue.innerText = "Input Value";
                inputValue.setAttribute("style", "margin-bottom: 10px; border-left: 5px solid #97CBFF; padding: 10px; background-color: #ECF5FF; font-weight: bold;");
                TestCaseForm.appendChild(inputValue);

                parameterInTestCase = "[";
                for (z in Operations[y].inputParameters){
                   let TestCaseBodyLabel = document.createElement("label");
                   TestCaseBodyLabel.setAttribute("for","testCaseLabel"+Operations[y].inputParameters[z].id);
                   TestCaseBodyLabel.innerHTML = Operations[y].inputParameters[z].parameter+":";
                   let TestCaseBodyInput = document.createElement("input");
                   TestCaseBodyInput.setAttribute("id","testCaseLabel"+Operations[y].inputParameters[z].id);
                   TestCaseBodyInput.setAttribute("name",Operations[y].inputParameters[z].parameter);
                   TestCaseBodyInput.setAttribute("class","form-control testCaseFormElements"+Operations[y].id);
                   //parameterIn.push(Operations[y].inputParameters[z].in);
                   z == Operations[y].inputParameters.length-1?parameterInTestCase += '"'+ Operations[y].inputParameters[z].in + '"]':parameterInTestCase += '"'+ Operations[y].inputParameters[z].in + '",';
                   // if parameter related security 

                   /*if(Operations[y].inputParameters[z].parameter.includes("token") || Operations[y].inputParameters[z].parameter.includes("password")){
                    TryBodyInput.setAttribute("type","password");
                   }*/
                   
                   Operations[y].inputParameters[z].required?TestCaseBodyInput.required=true:TestCaseBodyInput.required=false;
                   if(Operations[y].inputParameters[z].required) TestCaseBodyInput.style.borderColor='#ced4da';
                   /*inputData.endpoint = data.endpoints[x].endpoint;
                   inputData.operation = Operations[y].operation;*/
                   TestCaseForm.appendChild(TestCaseBodyLabel);
                   TestCaseForm.appendChild(TestCaseBodyInput);
                
                }

                let expectedValue = document.createElement("p");
                expectedValue.innerText = "Expected Value";
                expectedValue.setAttribute("style", "margin-top: 30px; border-left: 5px solid #97CBFF; padding: 10px; background-color: #ECF5FF; font-weight: bold;");
                TestCaseForm.appendChild(expectedValue);

                // json path label/input
                let jsonPathLabel = document.createElement("label");
                jsonPathLabel.setAttribute("for","jsonPath"+Operations[y].id);
                jsonPathLabel.innerHTML = "JSONPath";
                let jsonPathInput = document.createElement("input");
                jsonPathInput.setAttribute("id","jsonPath"+Operations[y].id);
                jsonPathInput.setAttribute("class","form-control");
                jsonPathInput.setAttribute("name", "jsonPath");
                jsonPathInput.required = "true";

                TestCaseForm.appendChild(jsonPathLabel);
                TestCaseForm.appendChild(jsonPathInput);

                // expected partial result label/input
                let expectedPartialResultLabel = document.createElement("label");
                expectedPartialResultLabel.setAttribute("for","expectedPartialResult"+Operations[y].id);
                expectedPartialResultLabel.innerHTML = "Expected partial results";
                let expectedPartialResultInput = document.createElement("input");
                expectedPartialResultInput.setAttribute("id","expectedPartialResult"+Operations[y].id);
                expectedPartialResultInput.setAttribute("class","form-control");
                expectedPartialResultInput.setAttribute("name", "expectedPartialResult");
                TestCaseForm.appendChild(expectedPartialResultLabel);
                TestCaseForm.appendChild(expectedPartialResultInput);
                /*
                <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                */ 
                let  expectedCheckBody =  document.createElement("div");
                expectedCheckBody.setAttribute("class", "form-check");
                let  expectedCheck = document.createElement("input");
                expectedCheck.setAttribute("type", "checkbox");
                expectedCheck.setAttribute("class", "form-check-input");
                expectedCheck.setAttribute("id", "expectedCheck"+Operations[y].id);
                let expectedCheckLabel = document.createElement("label");
                expectedCheckLabel.setAttribute("class", "form-check-label");
                expectedCheckLabel.setAttribute("for", "expectedCheck"+Operations[y].id);
                expectedCheckLabel.innerText = "AND";

                expectedCheckBody.appendChild(expectedCheck)
                expectedCheckBody.appendChild(expectedCheckLabel)
               


                let privateCheckBody =  document.createElement("div");
                privateCheckBody.setAttribute("class", "form-check");
                let privateCheck = document.createElement("input");
                privateCheck.setAttribute("type", "checkbox");
                privateCheck.setAttribute("class", "form-check-input");
                privateCheck.setAttribute("id", "privateCheck"+Operations[y].id);
                let privateCheckLabel = document.createElement("label");
                privateCheckLabel.setAttribute("class", "form-check-label");
                privateCheckLabel.setAttribute("for", "privateCheck"+Operations[y].id);
                privateCheckLabel.innerText = "private";

                privateCheckBody.appendChild(privateCheck)
                privateCheckBody.appendChild(privateCheckLabel)
               
                TestCaseForm.appendChild(expectedCheckBody);
                        
                TestCaseForm.appendChild(privateCheckBody);
                
                

                // Test Case Footer
                let TestCaseFooter = document.createElement("div");
                TestCaseFooter.setAttribute("class","card-body");

                let ImportTestCaseBtnInTest = document.createElement("button");
                ImportTestCaseBtnInTest.innerHTML = "Import Test Case";
                ImportTestCaseBtnInTest.setAttribute("class","btn");
                ImportTestCaseBtnInTest.setAttribute("id","importBtnInTest"+Operations[y].id)
                ImportTestCaseBtnInTest.setAttribute("style","; margin: 5px; margin-bottom:15px; width: 200px; float:right;");
                ImportTestCaseBtnInTest.setAttribute("data-toggle","modal");
                ImportTestCaseBtnInTest.setAttribute("data-target","#importAtTest");
                
                var modalAtTest = document.createElement("div");
                modalAtTest.setAttribute("class", "modal fade bd-example-modal-lg");
                modalAtTest.setAttribute("id","importAtTest");
                modalAtTest.setAttribute("tabindex", "-1");
                modalAtTest.setAttribute("aria-hidden","false");
                modalAtTest.setAttribute("role", "dialog");
                
                var modalDocAtTest = document.createElement("div");
                modalDocAtTest.setAttribute("class", "modal-dialog modal-lg");
                modalDocAtTest.setAttribute("role", "document");
                var modalContentAtTest = document.createElement("div");
                modalContentAtTest.setAttribute("class","modal-content");
                var modalHeaderAtTest = document.createElement("div");
                modalHeaderAtTest.setAttribute("class","modal-header");
                modalHeaderAtTest.innerHTML = '<h4>Test Case List</h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="false">&times;</span></button>';
                var modalBodyAtTest = document.createElement("div");
                modalBodyAtTest.setAttribute("class", "modal-body");
                var modalfluid =  document.createElement("div");
                modalfluid.setAttribute("class", "container-fluid fluid-test");
                modalfluid.setAttribute("id","modalfluid-test");
               
                modalBodyAtTest.appendChild(modalfluid);
                modalContentAtTest.appendChild(modalHeaderAtTest);
                modalContentAtTest.appendChild(modalBodyAtTest);
                modalDocAtTest.appendChild(modalContentAtTest);
                modalAtTest.appendChild(modalDocAtTest);
                document.body.appendChild(modalAtTest);
                

                let TestCaseBtn = document.createElement("button");
                TestCaseBtn.innerHTML = "Run Test Case";
                TestCaseBtn.setAttribute("class","btn");
                TestCaseBtn.setAttribute("style"," margin: 5px; margin-bottom:15px; width: 200px; float:right;");
                TestCaseBtn.setAttribute("id","runTestCaseBtn"+Operations[y].id);

                let SaveTestCaseBtn = document.createElement("button");
                SaveTestCaseBtn.innerHTML = "Save Test Case";
                SaveTestCaseBtn.setAttribute("class","btn");
                SaveTestCaseBtn.setAttribute("style"," margin: 20px; margin-bottom:15px; width: 200px; float:right;");
                SaveTestCaseBtn.setAttribute("id","saveTestCaseBtn"+Operations[y].id);

                let TestCaseResult = document.createElement("div");
                TestCaseResult.setAttribute("id", "jsoneditorIntest"+Operations[y].id);
                TestCaseResult.setAttribute("class","card-body");

                let TestCaseTag = document.createElement("span");
                TestCaseTag.setAttribute("id", "testCaseTag"+Operations[y].id);
                          
                //TryFooter.appendChild(AddSecurityValueBtn);
                TestCaseForm.appendChild(TestCaseFooter);  
                TestCaseBody.appendChild(TestCaseForm);

                accordionTestCaseCard.appendChild(accordionTestCaseHeader);  
                TestCaseFooter.appendChild(TestCaseBtn); 
                TestCaseFooter.appendChild(ImportTestCaseBtnInTest);  
                TestCaseFooter.appendChild(TestCaseTag);
                
                TestCaseArea.appendChild(TestCaseBody); 
                TestCaseArea.appendChild(TestCaseResult);
                TestCaseArea.appendChild(SaveTestCaseBtn);
                                    

                                  
                accordionTestCaseCard.appendChild(TestCaseArea);            
                accordion.appendChild(accordionTestCaseCard); 
                
                TestCaseBtn.setAttribute("onclick", 'runTestCase('+formId+','+parameterIn+')');
                SaveTestCaseBtn.setAttribute("onclick", 'saveTestCase('+formId+','+parameterIn+')');
                ImportTestCaseBtnInTest.setAttribute("onclick", 'importTestCase('+formId+',\"test\")');
                ImportTestCaseBtnInTry.setAttribute("onclick", 'importTestCase('+formId+',\"try\")');

                
                //  end accordion - annotation/try/test case
                //document.body.innerHTML += '<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header text-center"> <h4 class="modal-title w-100 font-weight-bold">Sign up</h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body mx-3"> <div class="md-form mb-5"> <i class="fas fa-user prefix grey-text"></i> <input type="text" id="orangeForm-name" class="form-control validate"> <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label> </div> <div class="md-form mb-5"> <i class="fas fa-envelope prefix grey-text"></i> <input type="email" id="orangeForm-email" class="form-control validate"> <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label> </div> <div class="md-form mb-4"> <i class="fas fa-lock prefix grey-text"></i> <input type="password" id="orangeForm-pass" class="form-control validate"> <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label> </div> </div> <div class="modal-footer d-flex justify-content-center"> <button class="btn btn-deep-orange">Sign up</button> </div> </div> </div> </div>';
                


                operationCardFooter.appendChild(accordion);

               
                
                operationCard.appendChild(operationCardFooter);              


                pathCardBody.appendChild(operationCard);
		
		/*pathCardBody.appendChild(SecurityButton);
		pathCardBody.appendChild(TryAccordion);
		pathCardBody.appendChild(TestCaseAccordion);*/
		//pathCardBody.appendChild(testEndpointButton);
		
                pathCard.appendChild(pathCardBody);
                if(!readCookie("username")) {
                    //saveSchemeButton.disabled = true;
                    //SaveTestCaseBtn.disabled = true;
                }
                else{
                    // document.getElementById("logInbtn").innerText = document.cookie.split(";")[0].split("=")[1];
                    let logInbtn = document.getElementById("logInbtn")
                    logInbtn.innerText = readCookie("username");
                    logInbtn.setAttribute("data-target","");
                    document.getElementById("signUpbtn").innerText = "";

                    //saveSchemeButton.disabled = false;
                    //SaveTestCaseBtn.disabled = false;
                }

            }
        }
        pathColContainer.appendChild(pathCard);
        OASPathsRowContainer.appendChild(pathColContainer);
        OASPathsRowContainer.appendChild(parseJavaParser(data.endpoints[fixed_X]));
        endpointsHtmlPosition.appendChild(OASPathsRowContainer);

    }
    
    drawTestingResult(data);
    
}

function parseJavaParser(javaParserData) {
    // Java Code Container
    let javaCodeContainer = document.createElement("div");
    javaCodeContainer.setAttribute("class", "col-md-3");

    // Java Code Card
    let javaCodeCard = document.createElement("div");
    javaCodeCard.setAttribute("class", "card");

    // Java Code Card Header
    let javaCodeCardHeader = document.createElement("div");
    javaCodeCardHeader.setAttribute("class", "card-header");

    // 設定 Java Code Card Header 內容並加入 java Code Container
    let javaCodeCardHeaderH4 = document.createElement("h4");
    let javaCodeCardHeaderH4Text = document.createTextNode("Java Example");
    javaCodeCardHeaderH4.setAttribute("class", "card-title");
    javaCodeCardHeaderH4.appendChild(javaCodeCardHeaderH4Text);
    javaCodeCardHeader.appendChild(javaCodeCardHeaderH4);
    javaCodeCard.appendChild(javaCodeCardHeader);

    // Java Code Card Body 
    let javaCodeCardBody = document.createElement("div");
    javaCodeCardBody.setAttribute("class", "card-body");

    console.log(javaParserData.javaRepos.length);
    if (javaParserData.javaRepos.length == 0) {
        javaCodeCardBody.appendChild(document.createTextNode("Not Found"));
    } else {
        console.log(javaParserData.javaRepos);
        // 排序 由高到低
        let javaNotSortData = javaParserData.javaRepos;
        let javaSortData = javaNotSortData.sort(function (a, b) {
            return a.score < b.score ? 1 : -1;
        });

        for (x in javaSortData) {

            // Card row
            let cardRow = document.createElement("div");
            cardRow.setAttribute("class", "row");

            // Card col
            let cardCol = document.createElement("div");
            cardCol.setAttribute("class", "col align-self-center");
            cardCol.setAttribute("style", "overflow: auto");

            // Card Table
            let cardTable = document.createElement("table");
            cardTable.setAttribute("class", "table table-striped custab");

            // Card Thead
            let cardThead = document.createElement("thead");

            // Card Tr
            let cardTr = document.createElement("tr");

            // Card Th1
            let cardTh1 = document.createElement("th");

            // Card Th2
            let cardTh2 = document.createElement("th");

            // 設定 table 分類
            cardTh1.appendChild(document.createTextNode("Category"));
            cardTh2.appendChild(document.createTextNode("Name"));
            cardTr.appendChild(cardTh1);
            cardTr.appendChild(cardTh2);
            cardThead.appendChild(cardTr);
            cardTable.appendChild(cardThead);

            var arrayTitle = ["repoUrl", "javaDocHtml", "method", "score"]
            var arrayContent = [javaSortData[x].repoUrl, javaSortData[x].javaDocHtml, javaSortData[x].method, javaSortData[x].score];

            for (var i = 0; i < 4; i++) {
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');

                if (arrayTitle[i] == "method") {
                    td1.appendChild(document.createTextNode(arrayTitle[i]));
                    let button = document.createElement("button");
                    button.setAttribute("class", "btn btn-info");
                    button.setAttribute("data-toggle", "modal");
                    button.setAttribute("data-target", "#exampleModalLong");
                    // 暫存資料 避免 讀錯 java detail 資料
                    let local = arrayContent[i];
                    button.appendChild(document.createTextNode("See More Detail"));
                    button.onclick = function () { methodDetail(local) };
                    // 每次顯示詳細資料必須重新繪畫一次程式碼
                    button.addEventListener('click', PR.prettyPrint);
                    // console.log("different data"+button.textContent);
                    td2.appendChild(button);
                } else if (arrayTitle[i] == "repoUrl") {
                    td1.appendChild(document.createTextNode(arrayTitle[i]));

                    let link = document.createElement("a");
                    link.setAttribute("class", "btn btn-info");
                    link.setAttribute("href", arrayContent[i]);
                    link.setAttribute("role", "button");
                    link.appendChild(document.createTextNode("GitHub Repository"));
                    td2.appendChild(link);
                } else if (arrayTitle[i] == "javaDocHtml") {
                    td1.appendChild(document.createTextNode(arrayTitle[i]));

                    let link = document.createElement("a");
                    link.setAttribute("class", "btn btn-info");
                    link.setAttribute("href", arrayContent[i]);
                    link.setAttribute("role", "button");
                    link.appendChild(document.createTextNode("GitHub Source Code"));
                    td2.appendChild(link);
                } else {
                    td1.appendChild(document.createTextNode(arrayTitle[i]));
                    td2.appendChild(document.createTextNode(arrayContent[i]));
                }

                tr.appendChild(td1);
                tr.appendChild(td2);
                cardTable.appendChild(tr);
            }

            cardCol.appendChild(cardTable);
            cardRow.appendChild(cardCol);
            javaCodeCardBody.appendChild(cardRow);
        }
    }

    javaCodeCard.appendChild(javaCodeCardBody);
    javaCodeContainer.appendChild(javaCodeCard);

    return javaCodeContainer;
}

function methodDetail(method) {
    console.log(method);
    let modalBody = document.getElementById("modalbody");
    modalBody.innerHTML = "";
    for (x in method) {
        console.log(method[x]);
        let row = document.createElement("div");
        row.setAttribute("class", "row py-3");

        let col = document.createElement("div");
        col.setAttribute("class", "col");

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let pre = document.createElement("pre");
        pre.setAttribute("class", "prettyprint");

        let code = document.createElement("code");
        code.setAttribute("class", "language-java");
        code.appendChild(document.createTextNode(method[x]));

        pre.appendChild(code);
        cardBody.appendChild(pre);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
        modalBody.appendChild(row);
    }
}

function getEndpointLevelFilter() {
    var checkedValue = [];
    var inputElements = document.forms[0];
    for (i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            // console.log("inputElements: "+inputElements[i].value);
            checkedValue.push(inputElements[i].value);
        }
    }
    console.log("User Endpoint Filter: " + checkedValue);
    return checkedValue;
}


function tryEndpoint(operationId,parameterIn){
    var form = document.getElementsByClassName("formElemants"+operationId);
    var data = "";
    var parameter = "";
    var status = 0;
    for(var i = 0; i < form.length; i++)
    {
        if(form[i].required && form[i].value=='') {
           
            form[i].style.borderColor='red';            
            alert("Parameter  { "+form[i].name + " }  is required !");
            break;            
        } else {
            form[i].style.borderColor='#ced4da';
            parameter += 
                '{"in":"'+parameterIn[i]+
                '","name":"'+form[i].name+
               '","value":"'+form[i].value+'"},';
            
            
            status = 1;
        }
    }
    parameter = '"parameters":['+parameter.substring(0, parameter.length - 1)+']';
    data = '{"operationId":"' + operationId + '",'+parameter+'}' 
    
    if(status){
        $.ajax({

            url: ipUrl+"/tryEndpoint",
            type: "POST",                    
            data: data,
            contentType: "application/json",
            dataType: "text",
            
            success: function(responseData){
                if(document.getElementById("jsoneditorIntry"+operationId)) document.getElementById("jsoneditorIntry"+operationId).innerHTML="";
               console.log(responseData)
                if(responseData.includes("Error")){
                    document.getElementById("jsoneditorIntry"+operationId).innerHTML = responseData ;

                }
               else{
                const container = document.getElementById("jsoneditorIntry"+operationId);
                const options = {};
                const editor = new JSONEditor(container, options);
                
                    const initialJson = JSON.parse(responseData); 
                    editor.set(initialJson);
                    editor.setMode("view");
                }
                
                
            },
            fail:function(responseData){
                console.log("error");
            }
            
    
        })
    }

}

let testCaseStatus = 0;
function runTestCase(operationId, parameterIn){
    let form = document.getElementsByClassName("testCaseFormElements"+operationId);
    let data = "";
    let parameter = "";
    let jsonPath = document.getElementById("jsonPath"+operationId).value;
    let expectedPartialResult = document.getElementById("expectedPartialResult"+operationId).value;
    let expectedCheck  = document.getElementById("expectedCheck"+operationId).checked;
    let status = 0;
    document.getElementById("jsoneditorIntest"+operationId).innerHTML="";
    for(var i = 0; i < form.length; i++)
    {
        if(form[i].required && form[i].value=='') {
           
            form[i].style.borderColor='red';            
            alert("Parameter  { "+form[i].name + " }  is required !");
            status = 0;
            
            break;            
        } else {
            form[i].style.borderColor='#ced4da';
            parameter += 
                '{"in":"'+parameterIn[i]+
                '","name":"'+form[i].name+
               '","value":"'+form[i].value+'"},';
            
            /*console.log("in: "+parameterIn[i]);
            console.log("name: "+form[i].name);
            console.log("value: "+form[i].value);*/
            status = 1;
        }
    }
    parameter = '"parameters":['+parameter.substring(0, parameter.length - 1)+']';
    data = '{"operationId":"' + operationId + '",'+parameter+',"jsonPath":"'+ jsonPath+'","expectedPartialResult":"'+expectedPartialResult+'","expectedCheck":"'+expectedCheck+'"}'; 

    
    if(status){
        $.ajax({

            url: ipUrl+"/runTestCase",
            type: "POST",                    
            data: data,
            contentType: "application/json",
            dataType: "text",
            
            success: function(responseData){
                
                if(responseData.includes("Error:")){
                    testCaseStatus = 0;
                    let tag = document.getElementById("testCaseTag"+operationId);
                    tag.innerText = "FAIL";
                    tag.setAttribute("class","badge badge-danger mx-1");
                    document.getElementById("jsoneditorIntest"+operationId).innerHTML = responseData;
                }
                else{
                    console.log(responseData);
                    const container = document.getElementById("jsoneditorIntest"+operationId);
                    const options = {};
                    const editor = new JSONEditor(container, options);
                    console.log(responseData);
                    if(JSON.parse(responseData)){
                        const initialJson = JSON.parse(responseData); 
                        editor.set(initialJson);
                        editor.setMode("view");
                    } else{
                        document.getElementById("jsoneditorIntest"+operationId).innerHTML = responseData;
                    }
                    
                    let tag = document.getElementById("testCaseTag"+operationId);
                    tag.setAttribute("class", "badge badge-success mx-1");
                    tag.innerText = "PASS";
                    
                    testCaseStatus = 1;
                }
                
                
            },
            fail:function(responseData){
                console.log("error");
            }
            
    
        })
    }
}  

function saveTestCase(operationId, parameterIn){
    var form = document.getElementsByClassName("testCaseFormElements"+operationId);
    var data = "";
    var parameter = "";
    var jsonPath = document.getElementById("jsonPath"+operationId).value;
    var expectedPartialResult = document.getElementById("expectedPartialResult"+operationId).value;
    var status = 0;
    let user = "";
    let token = "";
    if(document.cookie !=  ""){
        user = readCookie("username")
        token= readCookie("token")
    }
    for(var i = 0; i < form.length; i++)
    {
        if(form[i].required && form[i].value=='') {
           
            form[i].style.borderColor='red';            
            alert("Parameter  { "+form[i].name + " }  is required !");
            break;            
        } else {
            form[i].style.borderColor='#ced4da';
            parameter += 
                '{"in":"'+parameterIn[i]+
                '","name":"'+form[i].name+
               '","value":"'+form[i].value+'"},';
            
            
            status = 1;
        }
    }
    parameter = '"parameters":['+parameter.substring(0, parameter.length - 1)+']';
    data = '{"operationId":"' + operationId + '",'+parameter+',"jsonPath":"'+ jsonPath+'","expectedPartialResult":"'+expectedPartialResult+'","provider":"'+user+'","private":'+document.getElementById("privateCheck"+operationId).checked+'","expectedCheck":"'+document.getElementById("expectedCheck"+operationId).checked+'"}'; 
    // headers: {"Authorization": localStorage.getItem('token')}
    if(status && testCaseStatus){
        $.ajax({

            url: ipUrl+"/saveTestCase",
            type: "POST",                    
            data: data,
            headers: {
                'Authorization': 'Bearer '+token
             },
            contentType: "application/json",
            dataType: "text",
            
            success: function(data){
               
                alert("Saved successfully.");              
                
            },
            complete: function(request){
                console.log(request.status)
                if(request.status == 403 || request.status == 401){
                    //alert("Please login or register");
                    
                    document.getElementById("signUpbtn").click();
                }
            }
            
    
        })
    }
    else{
        alert("Test Case is invalid.");  
    }
    
}
function importTestCase(operationId, testCaseAt){
    //console.log(testCaseAt+operationId);
    let user = "";
    let token = "";
    if(document.cookie !=  ""){
        user = readCookie("username")
        token= readCookie("token")
    }
    $.ajax({

        url: ipUrl+"/testCaseList/"+operationId,
        type: "GET",
        headers: {
            'Authorization': 'Bearer '+token
         },                 
        dataType: "text",
        
        success: function(responseData){
           
            var modalfluid = document.getElementById("modalfluid"+"-"+testCaseAt);
            
            var responseJson = JSON.parse(responseData);
            console.log(responseJson);
            if(!responseJson.length){
                modalfluid.innerHTML = "There is no test case.";
            }else{

                
                modalfluid.innerHTML = "";
                // json parse response data
                for(var i = 0; i < responseJson.length; i++){
                    var parameterTable = '<table class="table table-sm" style=" width: 100%; word-wrap:break-word;table-layout: fixed; background-color: transparent"  ><tbody>'
                    for(var j = 0; j < responseJson[i].parameters.length; j++){
                        parameterTable += '<tr> <th scope="row">name</th><td>'
                                        + responseJson[i].parameters[j].name + '</td></tr> <tr><th scope="row">value</th><td>'
                                        + responseJson[i].parameters[j].value + '</td></tr>'
                    }
                    parameterTable += '</tbody></table>';

                    modalfluid.innerHTML += '<div class="row" data-dismiss="modal" style=" margin: 10px; border-bottom: 3px solid 	#CECEFF; border-left: 3px solid 	#CECEFF;border-radius: 5px;background-color: #f1f1ff;  height: auto; text-align: center; "><div class="col-md-12 ml-auto" style=" margin: auto;  width: 100%;" onclick=\'fillInTestCase('+ JSON.stringify(responseJson[i]) +","+operationId +",\""+testCaseAt+"\","+parseInt(responseJson[i].nodeId)+')\'    >'
                    +'Test Case ' + (i+1) +'<div class="table-responsive-sm"><table class="table"><tbody><tr> <th scope="row">Expected partial results</th><td>'
                    + responseJson[i].expectedPartialResult+'</td></tr> <tr><th scope="row">Json path</th><td>'
                    + responseJson[i].jsonPath+'</td></tr> <tr><th scope="row">Parameters</th><td>'

                    + parameterTable+'</td></tr> <tr><th scope="row">Provider</th><td>'
                    + responseJson[i].provider+'</td></tr></tbody></table>'
                    +'</div></div></div>'
                }
             }
        },
        fail:function(responseData){
            console.log("error");
        }
        

    });
}
function fillInTestCase(data,operationId,testCaseAt,testCaseId){
    console.log(testCaseId);
    var j = 0;
    var form = document.getElementById(testCaseAt+"Form"+operationId);
    if(testCaseAt == "test"){
       
        formInputs = form.querySelectorAll('input');
        for(var i = 0; i < formInputs.length-2; i++){
            console.log(formInputs[i])
            if(formInputs[i].attributes.name.value == "jsonPath")
                 formInputs[i].value = data.jsonPath;  
            if(formInputs[i].attributes.name.value == "expectedPartialResult")
                formInputs[i].value = data.expectedPartialResult;
            if(j < data.parameters.length && formInputs[i].attributes.name.value == data.parameters[j].name){
                formInputs[i].value = data.parameters[j].value;
                j++;

            }
        } 
    }
    else if(testCaseAt == "try"){
        formInputs = form.querySelectorAll('input');
        for(var i = 0; i < formInputs.length; i++){
            if(j < data.parameters.length && formInputs[i].attributes.name.value == data.parameters[j].name){
                formInputs[i].value = data.parameters[j].value;
                j++;
            }
        } 
    }
    $('#importAtTest').on('hidden.bs.modal', function (e) {
        $(".fluid-test").html("");
      })
    $('#importAtTry').on('hidden.bs.modal', function (e) {
        $(".fluid-try").html("");
    })
    runTestCaseByProvider(operationId, testCaseAt, testCaseId);

}
function runTestCaseByProvider(operationId, testCaseAt, testCaseId){
console.log(testCaseAt)
    
    $.ajax({

        url: ipUrl+"/runTestCase/",
        type: "POST",   
        data: '{"nodeId":"'+testCaseId+'"}',
        contentType: "application/json",                 
        dataType: "text",
        
        success: function(responseData){
            
           if(testCaseAt == "test"){
            if(responseData.includes("Error:")){
                testCaseStatus = 0;
                let tag = document.getElementById("testCaseTag"+operationId);
                tag.innerText = "FAIL";
                tag.setAttribute("class","badge badge-danger mx-1");
                document.getElementById("jsoneditorIntest"+operationId).innerHTML = responseData;
            }
            else{
                let tag = document.getElementById("testCaseTag"+operationId);
                tag.setAttribute("class", "badge badge-success mx-1");
                tag.innerText = "PASS";
                
                testCaseStatus = 1;
            }
           }
            if(document.getElementById("jsoneditorIn"+testCaseAt+operationId)) document.getElementById("jsoneditorIn"+testCaseAt+operationId).innerHTML="";
                const container = document.getElementById("jsoneditorIn"+testCaseAt+operationId);
                const options = {};
                const editor = new JSONEditor(container, options);
                
                const initialJson = JSON.parse(responseData); 
                editor.set(initialJson);
                editor.setMode("view");

            

        },
        fail: function(){

        }

    });
}            




function schemeSelect(id) {
          
    var schemeElements = document.getElementsByClassName("schemes" + id);
    for(var j = 0; j < schemeElements.length; j++){
        schemeElements[j].style.display = (schemeElements[j].id == event.target.value)?'block':'none';
    }    
}
function oauth2Select(id){
    var flowElements = document.getElementsByClassName("flow" + id);
    console.log(flowElements);
    for(var j = 0; j < flowElements.length; j++){
        flowElements[j].style.display = (flowElements[j].id == event.target.value)?'block':'none';
    }
}
let oascontainer;
const options = {};
let oaseditor;
function showOAS(resourceId,operationId){

    
    let oasArea = document.getElementById("oasjsoneditor"+operationId);
    oasArea.innerHTML = "";
    oasArea.style.display = 'block';
    $.ajax({
        url: ipUrl+"/getOASDoc/"+resourceId,
        type: "GET", 
        dataType: "text",
        
        
        complete: function(responseData){
            oascontainer = document.getElementById("oasjsoneditor"+operationId);
            const initialJson = JSON.parse(responseData.responseText); 
            
            oaseditor = new JSONEditor(oascontainer, options);
            oaseditor.set(initialJson);  
            oaseditor.setMode("view");          
        }
    });
}
var validateStatus = 1;
function validateOAS(operationId){
    var oas;
    if(oaseditor) oas = oaseditor.get();
    var OASInfo = document.getElementById("OASInfo"+operationId);
    OASInfo.innerHTML = "";
    if(!oas)     
       validateStatus = 1;
    else{
        
        $.ajax({
            
            url: "https://validator.swagger.io/validator/debug",
            type: "POST",
            crossDomain: true,                        
            data: JSON.stringify(oas),
            contentType: "application/json;",
            dataType: "text",
            
            success: function(data){             
                if(Object.entries(data).length == 2) {
                    
                    validateStatus = 1;						
                }
                else if(data){                    
                    var err = JSON.parse(data);
                    OASInfo.innerHTML = "ERROR : "+err.messages;                    
                    validateStatus = 0;
                }                                                
            },							
            error:function(xhr, textStatus){								
                OASInfo.innerHTML = "ERROR : Check your JSON Schema.";	
                validateStatus = 0;				
            }
        })
    }
}
function saveScheme(operationId){
    //validateOAS(operationId);
    var annotateForm = document.getElementById("annotateForm"+operationId);
    var scheme = document.getElementById("schemeControlSelect"+operationId).value;
    var flow = document.getElementById("oauth2Select"+operationId).value;
    var scopes = document.getElementById("scopes"+operationId).value;
    var schemeFormData = "";
    var oas = "";
    let user = "";
    let token = "";
    if(document.cookie !=  ""){
        user = readCookie("username")
        token= readCookie("token")
    }
    
    var paramIn = document.getElementById("paramIn"+operationId).value;
    var paramName = document.getElementById("paramName"+operationId).value;
    
    if(validateStatus){
        if(oaseditor) oas = JSON.stringify(oaseditor.get());       
        if(scheme == "apiKey"){
            schemeFormData = {
                "oasId": parseInt(resourceId),
                "operationId": parseInt(operationId),
                "type": scheme,
                "in": document.getElementById("apiKeyIn"+operationId).value,
                "name": document.getElementById("apiKeyName"+operationId).value,
                "oas": oas,
                "paramIn":paramIn,
                "paramName": paramName,
                "provider": user
            }  
        }
        if(scheme == "http"){
            schemeFormData = {
                "oasId": parseInt(resourceId),
                "operationId": parseInt(operationId),
                "type": scheme,
                "scheme": document.getElementById("httpScheme"+operationId).value,
                "bearerFormat": document.getElementById("httpBearer"+operationId).value,
                "oas": oas,
                "paramIn":paramIn,
                "paramName": paramName,
                "provider": user
            }  
        }
        if(scheme == "oauth2"){
            var authorizationUrl = "";
            var tokenUrl = "";
            if(flow == "implicit")  authorizationUrl = annotateForm.getElementsByClassName("implict")[0].value;
            if(flow == "authorizationCode") {
                console.log(annotateForm.getElementsByClassName("authorizationCode"));
                authorizationUrl = annotateForm.getElementsByClassName("authorizationCode")[0].value;
                tokenUrl = annotateForm.getElementsByClassName("authorizationCode")[1].value;
            }
            if(flow == "resourceOwnerPassword") tokenUrl = annotateForm.getElementsByClassName("resourceOwnerPassword")[0].value;
            if(flow == "clientCredentials") tokenUrl = annotateForm.getElementsByClassName("clientCredentials")[0].value;
            
            schemeFormData = {
                "oasId": parseInt(resourceId),
                "operationId": parseInt(operationId),
                "type": scheme,
                "flow": flow,
                "authorizationUrl": authorizationUrl,
                "tokenUrl": tokenUrl,
                "oas": oas,
                "scopes": scopes,
                "paramIn":paramIn,
                "paramName": paramName,
                "provider": user
            }
        }
        schemeFormData = JSON.stringify(schemeFormData);
        console.log(schemeFormData);
        
        // send data
        $.ajax({

            url: ipUrl+"/addSecurityScheme",
            type: "POST",
            crossDomain: true,                        
            data: schemeFormData,
            headers:{
                'Authorization':'Bearer '+token
            },
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            
            success: function(responseData){
                console.log("success");
                showOAS(parseInt(resourceId),operationId);
                //alert(responseData);
            },
            complete:function(request){
                
                if(request.status == 403 || request.status == 401){
                    document.getElementById("signUpbtn").click();
                }
            }
            

        })

    }
 
    
}
function signup(){

    let password = document.getElementById("orangeForm-pass").value;
    
    let email = document.getElementById("orangeForm-email").value;
    let username = document.getElementById("orangeForm-name").value;
    data = {
        "username":username,
        "email":email,
        "password":password
    }
     $.ajax({
        url: ipUrl+"/api/auth/signup",
            type: "POST",                        
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            
            
            success: function(responseData){
                $("#modalRegisterForm").modal("hide");
               document.getElementById("logInbtn").click();
               
                
            },
            fail:function(responseData){
                
            }
    });
}
function login(){
    let password = document.getElementById("defaultForm-pass").value;    
    let username = document.getElementById("defaultForm-name").value;
   
    data = {
        "username":username,
        "password":password
    }
     $.ajax({
        url: ipUrl+"/api/auth/signin",
            type: "POST",                        
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            
            success: function(responseData){
              //console.log(responseData) 
              var d = new Date();
              d.setTime(d.getTime()+24*60*60*1000);
              var expires = "expires="+ d.toUTCString();
              $("#modalLoginForm").modal("hide");
              document.cookie="username="+responseData.username+";expires="+expires;
              document.cookie="token="+responseData.accessToken+";expires="+expires;
                          
            
            },
            fail:function(responseData){
                
            }
    });
}
function drawTestingResult(information){
    
    
    for (x in information.endpoints) {
       
        let Operations = information.endpoints[x].operations;
        
        for (y in Operations) {
            let operationCardFooter = document.getElementById("operationCardFooter"+Operations[0].id);
            let testingResult = document.createElement("div");
            testingResult.setAttribute("id","testingResult"+Operations[y].id);
            
            //drawTestingResult(Operations[y].id,Operations[y].testingResult?Operations[y].testingResult:"no test case")
            //testingResult.innerHTML = "1";
            if(operationCardFooter){
                let button = document.createElement("button");
                button.setAttribute("id",Operations[y].id);
                button.setAttribute("class","btn")
                button.setAttribute("onclick","window.open(\"" + ipFront +"/testing#"+parseInt(Operations[y].id)+"\");");
                button.innerText = "Detail Testing Result"
                operationCardFooter.appendChild(testingResult);
                operationCardFooter.appendChild(button);
                //console.log(document.getElementById("testingResult"+Operations[y].id));

                var margin = {top: 10, right: 30, bottom: 20, left: 50},
                width = 600 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

                let data = [];
                if("testingResult" in Operations[y]){

                for(z in Operations[y].testingResult){
                    //console.log(Operations[y].testingResult[z].split(" ")[3].split("]")[0]);
                    //console.log(Operations[y].testingResult[z])
                    console.log(Operations[y].testingResult[z])
                    var item = Operations[y].testingResult[z].split("-");
                    
                    data.push({
                        year:item[0]+" "+item[1],
                        fail:item[2].split("/")[1]-item[2].split("/")[0],
                        pass:item[2].split("/")[0]
                    })
                    
                }
                while(data.length > 5){
                    data.shift();
                }
                
                //for(z in Operations[y].testingResult)
                //let tetingResult = 
                /*let data = [
                        { year: "04/10/2021 17:45:07", fail: "10", pass: "15"},
                        { year: "04/11/2021 17:45:08", fail: "12", pass: "18"},
                        { year: "04/12/2021", fail: "05", pass: "20"},
                        { year: "04/13/2021", fail: "01", pass: "15"},
                        { year: "04/14/2021", fail: "02", pass: "10"}
                    
                    ];*/
            // append the svg object to the body of the page
            var svg = d3.select("#testingResult"+Operations[y].id)
            

            .append("svg")
            .attr("overflow","auto")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            // Parse the Data


            // List of subgroups = header of the csv files = soil condition here
            var subgroups = ["fail","pass"]
            //stack the data? --> stack per subgroup
            var stackedData = d3.stack()
            .keys(subgroups)
            (data)
            // List of groups = species here = value of the first column called group -> I show them on the X axis
            var groups = d3.map(data, function(d){return(d.year)}).keys()
        
            // Add X axis
            var x = d3.scaleBand()
                .domain(groups)
                .range([0, width])
                .padding([0.2])
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).tickSizeOuter(0));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) {return d.fail+parseInt(d.pass)})])
                .range([ height,100])
                 
                
            svg.append("g")
                
                .call(d3.axisLeft(y).ticks(2).tickFormat(function(d){
                    console.log(d)
                    //if(d<1) break;
                    return d;
                }
                //d3.format("d")
                ));

            // color palette = one color per subgroup
            var color = d3.scaleOrdinal()
                .domain(subgroups)
                //.range(['#DC3545','#28A745'])
                .range(["#FF6E6E", "#99CC99"])
                
                //.range(["#DC3545","#6BC37E"])
            

            // Show the bars
            svg.append("g")
                .selectAll("g")
                // Enter in the stack data = loop key per key = group per group
                .data(stackedData)
                .enter().append("g")
                //.style("opacity", 0.5)
                .attr("fill", function(d) { return color(d.key); })
                .selectAll("rect")
                
                // enter a second time = loop subgroup per subgroup to add all rectangles
                .data(function(d) { return d; })
                .enter().append("rect")
                .attr("x", function(d) { return x(d.data.year); })
                .attr("y", function(d) { console.log(d);return y(d[1]); })
                .attr("height", function(d) { return y(d[0]) - y(d[1]); })
                .attr("width",x.bandwidth())
                
                //.attr('style','word-wrap: break-word; text-align:center;')
                
                var colors = ["#FF6E6E", "#99CC99"];
                // Draw legend
                var legend = svg.selectAll(".legend")
                    .data(colors)
                    .enter().append("g")
                    
                    .attr("class", "legend")
                    .attr("transform", function(d, i) { return "translate(-20," + i * 20 + ")"; });
                

                legend.append("rect")
                    .attr("x", -10)
                    .attr("y", 0)
                    .attr("width", 10)
                    .attr("height", 10)
                    
                    //.style("opacity", 0.5)
                    .style("fill", function(d, i) { return colors.slice().reverse()[i];});
                    
                legend.append("text")
                    .attr("x", 5)
                    .attr("y", 10)
                    .attr("dy", ".12em")
                    .style("opacity", 1.0)
                    .style("text-anchor", "start")
                    .style("font-size", "12px")
                    
                    .text(function(d, i) { 
                        switch (i) {
                            case 0: return "Pass";
                            case 1: return "Fail";                        
                        }
                    });
                
                
                // Prep the tooltip bits, initial display is hidden
                var tooltip = svg.append("g")
                    .attr("class", "tooltip")
                    .style("display", "none");
                    
                tooltip.append("rect")
                    .attr("width", 15)
                    .attr("height", 10)
                    .attr("fill", "white")
                    .style("opacity", 1);
                
                tooltip.append("text")
                    .attr("x", 7)
                    .attr("dy", "1.2em")
                    .style("text-anchor", "middle")
                    .attr("font-size", "12px")
                    .attr("font-weight", "bold");
                }
                else{
                    break;
                }
            
            }
            
        }   
            
    }  
}

/*var schemeControls = [];
var schemeElements = [];
for(var i = 0; i < data.endpoints.length; i++){
    for(var j = 0; j < data.endpoints[i].operations.length; j++){
        schemeControls.push("schemeControlSelect"+data.endpoints[i].operations[j].id);
        schemeElements.push("schemes"+data.endpoints[i].operations[j].id);
    }
}
for(var i = 0; i < data.endpoints.length; i++){
    schemeControls[i].addEventListener('change', (event) => {
        for(var j = 0; j < schemeElements.length; j++){
            schemeElements[i].style.display = (schemeElements[i].id == (event.target.value))?'block':'none';
        }
    });

}*/


/*
formControlSelect1.addEventListener('change', (event) => {
    for(var i = 0; i < schemeElements.length; i++){
        schemeElements[i].style.display = (schemeElements[i].id == (event.target.value))?'block':'none';
    }
});
formControlSelect2.addEventListener('change', (event) => {
    for(var i = 0; i < flowElements.length; i++){
        flowElements[i].style.display = (flowElements[i].id == (event.target.value))?'block':'none';
    }
});



function getFormData(){            
    //console.log(formControlSelect1);
    var oasId = 6081;
    var schemeType = formControlSelect1.value;
    var formData = "";
    var description = "";
    if(schemeType == "apikey"){
        //console.log(document.getElementById("apikeyIn").value);
                          
            formData = {
                "oasId": oasId,
                "type": formControlSelect1.value,
                "in": document.getElementById("apikeyIn").value,
                "name": document.getElementById("apikeyName").value
                
            }                        
        

        
        formData = JSON.stringify(formData);
        //console.log(formData);
    }
    if(schemeType == "http"){
        
        
        
        var scheme = document.getElementById("httpAuth").checked?'basic':'bearer';
        //if(document.getElementById("httpScheme").value) scheme = document.getElementById("httpScheme").value;
        //if(document.getElementById("httpBearer").value) bearer = document.getElementById("httpBearer").value;
        //console.log(scheme);
        formData = {
            "oasId": oasId,
            "type": formControlSelect1.value,
            "scheme": scheme
            
        }
        formData = JSON.stringify(formData);
    }
    if(schemeType == "oauth2"){
        var flow = document.getElementById("formControlSelect2").value;
        var authorizationUrl = document.getElementById("InputAuthorizationUrl").value;
        var tokenUrl = document.getElementById("InputTokenUrl").value;
        
        formData = {
            "oasId": oasId,
            "type": formControlSelect1.value,
            "flow": flow,
            "authorizationUrl": authorizationUrl,
            "tokenUrl": tokenUrl
        }
        formData = JSON.stringify(formData);
    }
    
    postSecurityScheme(formData);
}

function postSecurityScheme(data){
    //console.log(data);

    
    $.ajax({

        url: ipUrl+"/addSecurityScheme",
        type: "POST",
        crossDomain: true,                        
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
        success: function(responseData){
            console.log("success");
            //console.log(responseData);
            alert(responseData);
        },
        fail:function(responseData){
            console.log("responseData")
        }
        

    })
}*/
