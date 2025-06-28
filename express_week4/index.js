const express = require('express');
const app = express();

const users = [{
    name: 'Elige',
    kidneys: [{
        healthy:false
    },{
        healthy: true
    }]
}]

app.use(express.json());

app.get('/', function(req, res) {
    const EliKidneys = users[0].kidneys;
    const EliKidneyNo = EliKidneys.length;
    let NoOfHealthyKidney = 0;
    
    for (let i = 0; i < EliKidneys.length; i++) {
        if (EliKidneys[i].healthy) {
            NoOfHealthyKidney = NoOfHealthyKidney + 1;
        }
    }
    const NoOfUnhealthyKidney = EliKidneyNo - NoOfHealthyKidney;
    
    res.json({
        EliKidneyNo,
        NoOfHealthyKidney,
        NoOfUnhealthyKidney });
});

app.post('/',  function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({
        msg:'Added Kidneys Health'
    });
}
);

app.delete('/', function(req,res) {
    const allHealthy = users[0].kidneys.every(kidney => kidney.healthy);
    users[0].kidneys = allHealthy;

    res.json({});

})


app.put('/', function(req, res) {
    for (let i=0;i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
        }
    
    res.json({});
});

app.listen(3000);