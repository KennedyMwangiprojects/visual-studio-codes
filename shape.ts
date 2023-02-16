export class Shape{
    static circle(radius:number):{area:number,perimeter:number}{
        const area=Math.PI*radius*radius;
        const perimeter=2*Math.PI*radius;
        return{area,perimeter};

    }
    static rectangle(length:number,width:number):{area:number,perimeter:number}{
        const area=length*width;
        const perimeter=(length + width)*2;
        return{area,perimeter};
    }
    static square(side:number):{area:number,perimeter:number}{
    const area=side*side
    const perimeter=4*side
    return{area,perimeter}
    }
}