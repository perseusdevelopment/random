var request = require("request");
request("https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783", function(error, response, body){
    if(error){
        console.log("Error");
        console.log(error);
    } else {
        if(response.statusCode == 200){
            console.log(body);
        }
    }
});
