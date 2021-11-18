AFRAME.registerComponent("bugatti", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    var posX = -2;
    var posY = 1.27013;
    var posZ = -1.957;

    var position = { x: posX, y: posY, z: posZ };

    this.createCar(position);
  },

  createCar: function (position) {
    var componentEl = document.querySelector("#components");

    componentEl.setAttribute("rotation", { x: 0, y: 90, z: 0 });

    var car = document.createElement("a-entity");
    car.setAttribute("gltf-model", "./model/bugatti/scene.gltf");
    car.setAttribute("position", position);
    car.setAttribute("scale", { x: 0.005, y: 0.005, z: 0.005 });
    car.setAttribute("id", "car");
    car.setAttribute("rotation", { x: 0, y: -90, z: 0 });

    componentEl.appendChild(car);
  },
});