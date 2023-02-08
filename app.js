const {app} = require('./config/server')
const {databaseConnection} = require('./config/databaseConnection')
const menuRoutes = require('./routes/menuRoutes')
const {webTokenRoute} = require('./routes/webTokenRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')

async function serverUp(){
    const state = await databaseConnection()
    console.log("DB Connection State : " + state)
    if(state==0){
       process.exit(0)
    }
    app.use('/menu',menuRoutes)
    app.use('/web',webTokenRoute)
    app.use('/user',userRoutes)
    app.use('/order',orderRoutes)
    app.use('/reviews',reviewsRoutes)
    app.listen(8080,()=>{
    console.log("Server up and listening at 8080.")
    })
}


serverUp()

