var CronJob = require('cron').CronJob;
exports.startTimer = (data) =>{
    var job = new CronJob('*/10 * * * * *', function() {
        console.log(data);
      }, null, true, 'America/Los_Angeles');
      job.start();
}
