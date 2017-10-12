Page({
  data: {
    markers: [{
      iconPath: "../../images/map/b.png",
      id: 0,
      latitude: 22.5535685822,
      longitude: 113.9419502020,
      width: 25,
      height: 25
    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})