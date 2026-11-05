// imports supertest module, index.js app
const supertest = require('supertest');
const app = require('../src/index');

describe('GET /', ()=>{ //sending GET request to '/' route
    test('should respond with status code 200 and render an html file `main.html`',async ()=> {

            const response = await supertest(app).get('/');
            console.log(`status code is ${response.statusCode}`);
            expect(response.statusCode).toBe(200); //Basically assert status code is 200

                expect(response.headers['content-type']).toMatch("html"); //expects html as a type of a file sent in a header of the packet

        }
    )
})

