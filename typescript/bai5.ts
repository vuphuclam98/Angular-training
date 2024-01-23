class Rectangle {
  width: number
  height: number

  constructor(width: number, height:number) {
    this.width = width
    this.height = height
  }

  caculatorArea = () => {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(3,2)
console.log('Area: ' + rectangle.caculatorArea())
