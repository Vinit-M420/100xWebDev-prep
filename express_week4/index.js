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

function checkUnhealthyKidneys(){
    let isUnhealthyKidney = false;
    for (let i=0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy) {
            isUnhealthyKidney = true;
        }
    }
    return isUnhealthyKidney;
}

app.delete('/', function(req,res) {
    if (checkUnhealthyKidneys()){
        const allHealthy = users[0].kidneys.filter(kidney => kidney.healthy);
        users[0].kidneys = allHealthy;
        res.json({ 
            msg:'Done' 
        });
    }
    else{
        res.sendStatus(411).json({
            msg:'You have no unhealthy kidney/s'
        });
    }

});


app.put('/', function(req, res) {
    for (let i=0;i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
        }
    
    res.json({});
});

app.listen(3000);