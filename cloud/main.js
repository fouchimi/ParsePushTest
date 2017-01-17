
// Android push test
Parse.Cloud.define('pushChannelTest', function(request, response) {

  // request has 2 parameters: params passed by the client and the authorized user
  //var params = request.params;
  //var user = request.user;

  //var customData = params.customData;
  //var launch = params.launch;
  //var broadcast = params.broadcast;

  //console.log(customData);
  //console.log(launch);
  //console.log(broadcast);*/
  console.log("customData "+ request.params.customData + " " + "title " + request.params.title + " " + " alert "+ request.params.alert); 

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");

  var payload = {"customData" : request.params.customData, 
                 "title": request.params.title,
                 "alert": request.params.alert };

  // Note that useMasterKey is necessary for Push notifications to succeed.

  Parse.Push.send({
  where: pushQuery,      // for sending to a specific channel
  data: payload,
  }, { success: function() {
     console.log("#### PUSH OK");
  }, error: function(error) {
     console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});

