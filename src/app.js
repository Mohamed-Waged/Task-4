    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000
    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

    app.set('view engine', 'hbs');
    const viewsDirectory = path.join (__dirname , "../Pages/views" )
    app.set( "views" , viewsDirectory)

    var hbs = require ('hbs')
    const partialsPath = path.join (__dirname , "../Pages/partials")
    hbs.registerPartials(partialsPath)

    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "Home",
            msg: "Welcome In Home Page"
        })
    })

    app.get('/weather' , (req , res) => {
        res.render('weather' , {
            title : "Weather",
            countryName : "egypt",
            latitude : "22.1991660760527",
            longitude : "78.47668102723",
            currentWeather : "Clear",
            temperature : "33.9"
        })
    })

    app.listen(port, () => {
    console.log(`App Run on port ${port}`)
    })