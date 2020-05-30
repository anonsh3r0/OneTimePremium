var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1)
{
obj.data.VIPExpire= "VIP by Gin";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
