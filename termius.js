let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2069-09-06T06:09:00";
$done({body:JSON.stringify(obj)})
