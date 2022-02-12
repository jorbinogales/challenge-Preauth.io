import { Request, Response } from 'express';

export default function GetAllNumbers(request: Request, response: Response){
    const numbers = [2,3,4,5,6];
    const value = 6;

    const item = new Set();
    numbers.map((number: number) =>{
        let temporal = value - number;
        if(item.has(temporal))
            console.log(`Value: ${value} betwen 2 numbers is (${number}, ${temporal})`);
        item.add(number);
    });

    response.statusCode = 200;
    response.send({item})
}
