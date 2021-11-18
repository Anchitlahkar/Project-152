AFRAME.registerComponent("base", {
  schema: {},

  init: function () {
    // Do something when component first attached.
    var posX = 1.43844;
    var posY = -0.20614;
    var posZ = 0;

    var positon = { x: posX, y: posY, z: posZ };
    this.createBase(positon);
  },

  createBase: function (position) {
    var componentEl = document.querySelector("#components");

    var base = document.createElement("a-entity");

    base.setAttribute("id", "base");
    base.setAttribute("position", position);

    base.setAttribute("material", {
      color: "#ff9100",
    });

    base.setAttribute("scale", { x: 0.85, y: 3.04802, z: 0.85 });
    base.setAttribute("rotation", {
      x: 0,
      y: -90.00021045914971,
      z: 0,
    });
    base.setAttribute("geometry", { primitive: "cylinder", radius: 8 });

    componentEl.appendChild(base);
  },
});
