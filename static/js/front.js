$(document).ready(function () {
	//On loading of DOM call our poll_function
	poll_function();
});

//converts input data in array form to CSV
function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
          str += line + '\r\n';
    }
    return str;
}

var cpu_usage, mem_usage;
//Define the url to poll
var poll_url = 'http://127.0.0.1:8000/myapp';

function poll_function() {
	var stop;
	var xhr = new XMLHttpRequest();
	xhr.open("GET",poll_url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();
	xhr.onload = function () {
		if (xhr.status == 200) {
			var json = JSON.parse(this.response);
			var temp=[]
			// var t2={}
			// t2.xvalue = 12
			// temp.push(t2)
			// t2.xvalue= 25
			// temp.push(t2)
			temp=[]
			tempObj={}
			tempObj['xyz'] = 'cpu_usage'
			tempObj['value']=json.cur_cpu
			temp.push(tempObj)
			tempObj2={}
			tempObj2['xyz'] = 'mem_usage'
			tempObj2['value']=json.cur_mem
			console.log("temp",temp)
			temp.push(tempObj2)

			draw_graph(temp);

			// Call the function to draw graph here and pass cpu_usage and mem_usage
			//console.log(json);
			// console.log(cpu_usage);
			// console.log(mem_usage);
			stop = setInterval(window.setTimeout(function () {
			poll_function();
			}, 3000), 6000);
		}
	}
}
