// old data       
// store.set("service", {"totalService":1253,"serviceLevel":[{"quantity":1195,"feature":"HTTPS support"},{"quantity":1007,"feature":"User authentication"},{"quantity":913,"feature":"At most 20 operations"},{"quantity":180,"feature":"Example API conversations"}]});
// store.set("endpoint", {"endpointLevel":[{"quantity":17067,"feature":"REST-style URls"},{"quantity":27391,"feature":"HTTP status code use"},{"quantity":16134,"feature":"Explain Error messages"},{"quantity":14612,"feature":"Input format JSON"},{"quantity":19626,"feature":"Output format JSON"}],"totalOperation":27391});
updateData();
setInterval(()=>updateData(), 1000*60*3);
// // setTimeout(drawServiceGraph, 1000*3, store.get("service"));
// // setTimeout(drawEndpointGraph, 1000*3, store.get("endpoint"));
// console.log(store.getAll());