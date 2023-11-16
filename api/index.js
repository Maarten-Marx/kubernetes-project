const Koa = require("koa");
const Router = require("koa-router")
const cors = require('@koa/cors');
const mariadb = require("mariadb")
const os = require("os")

const app = new Koa()
const router = new Router()

app.use(cors())

mariadb
    .createPool({ host: "mariadb-service-mm", port: 3306, user: "user", password: "password", database: "linuxws" })
    .getConnection()
    .then(conn => {
        router.get("/user", async (ctx) => {
            const res = await conn.query("select name from names limit 1;")

            if (res) {
                const name = res[0]["name"]
                const hostname = os.hostname()

                ctx.body = { name, hostname }
            }
        })

        app.use(router.routes())
        app.listen(3000, () => {
            console.log("Listening to port 3000")
        })
    })
    .catch((e) => {
        console.log("Failed to connect to database")
        throw e
    })
