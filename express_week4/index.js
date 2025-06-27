const express = require('express');
const app = new express();

const users = [{
    name: 'Elige',
    kidneys: [{
        healthy:false
    },{
        healthy: true
    }]
}]

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
        EliKidneys,
        NoOfHealthyKidney,
        NoOfUnhealthyKidney });
});

app.post('/',  function(req, res) {

    }
);

app.listen(3000);