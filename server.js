const express = require('express')
const app = express()
const port = process.env.PORT || 5555

app.get('', (req, res) => {

    res.json({
        message: 'Agora vai renderizar no browser'
    })
})

app.listen(port , (err)=>{
    if(err){
        console.log('Deu ruim', err)
    }else{
        console.log('Servidor rodando, porta: ', port)
    }
    }
    
        )