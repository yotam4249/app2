const request = require('supertest')
const initApp = require("../server")
const mongoose = require('mongoose')
const postModel = require("../models/posts_model")
var app


beforeAll(async ()=>{
    app = await initApp()
    await postModel.deleteMany()
})

afterAll(async ()=>{
    await mongoose.connection.close()
})

describe("GET / ",()=>{
    test("Test 1", async ()=>{
        const response = await request(app).get("/posts")
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(0)
    })

    test("Test 2", async()=>{
        const response = await request(app).post("/posts").send({
            title:"Test yotam",
            content:"Hello world",
            owner:"Yotam"
        })
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe("Test yotam")
        expect(response.body.owner).toBe("Yotam")
    })
})