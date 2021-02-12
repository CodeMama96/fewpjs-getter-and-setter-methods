// Add your Circle class here

//circle = new Circle( 6 )




class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter){
        this.radius = diameter / 2
        //this._diameter = diameter
    }

    get circumference(){
        return 2 * Math.PI * this.radius;
    }

    set circumference(circumference){
        //this._circumference = circumference
        this.radius = circumference / ( Math.PI * 2 )
    }

    get area(){
        //return this.radius**2(Math.PI)
        return Math.PI * this.radius * this.radius;
    }
}