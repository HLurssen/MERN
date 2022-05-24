const NinjaController = require ("../controllers/ninja.controller");

module.exports = (app)=>{
    app.get("/api/ninja", NinjaController.sayHello);
    app.get("/api/ninjas", NinjaController.findAllNinja);
    app.post("/api/ninja", NinjaController.createNinja);
    app.get("/api/ninja/:id", NinjaController.findOneNinja);
    app.put("/api/ninja/:id", NinjaController.updateNinja);
    app.delete("/api/ninja/:id", NinjaController.deleteNinja);

}