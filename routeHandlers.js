
const subscriberController = require("./controllers/subscriberController.js")
module.exports = function(app)
{

app.post('/reviews', async function(request, response){
    console.log(request.body);
    let subscriber_controller_obj = new subscriberController();
    subscriber_controller_obj.handleReviewNotification(request, response);
});

app.get('/reviews', async function(request, response){
    let subscriber_controller_obj = new subscriberController();
    subscriber_controller_obj.getRequests(request, response);
    });

}
