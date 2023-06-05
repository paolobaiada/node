const figlet = require('figlet');
figlet.text(
    'Hello my name is Paolo',
    {
        width: 100,
        font: 'Crawford2',
    },
    function(err,data){
    if (err) {
        console.log(err)
    }
    else 
    console.log(data);
})

