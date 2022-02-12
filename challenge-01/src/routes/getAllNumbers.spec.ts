import { Request, Response } from 'express';
import GetAllNumbers from './getAllNumbers';

describe('Get All Numbers Request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject:any;

    beforeEach(() =>{
        mockRequest = {};
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation(result => {
                responseObject = result;
            })
        }
    });

    test('200 - numbers', () =>{
        const expectedStatusCode = 200;
        GetAllNumbers(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.statusCode).toBe(expectedStatusCode);
    })
})