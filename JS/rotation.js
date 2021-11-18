AFRAME.registerComponent("move", {
  schema: {
    clickCounter: { type: "number", default: 0 },
  },

  update: function () {
    window.addEventListener("click", (e) => {
      this.data.clickCounter = this.data.clickCounter + 1;
      console.log(this.data.clickCounter);

      var rot = this.el.getAttribute("rotation");
      var nextPlace = rot.y + 90;

      console.log(nextPlace);
      this.el.setAttribute("rotation", { x: rot.x, y: nextPlace, z: rot.z });

    });
  },

  tick: function () {
    var rot = this.el.getAttribute("rotation");

    if(this.data.clickCounter === 4){
        this.data.clickCounter = 0
        this.el.setAttribute("rotation", { x: rot.x, y: 90, z: rot.z });
    }
  },
});
