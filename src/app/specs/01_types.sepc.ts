import { stringify } from "@angular/compiler/src/util";

describe('types in typescript', () => {

    describe('variables and constraints in typescript', () => {
        it('using let to declare a variable', () => {
            let x;
            x = 3.14;
            expect(x).toBe(3.14);
            expect(typeof (x)).toBe('number');
            x = 'tacos';
            expect(x).toBe('tacos');
            expect(typeof (x)).toBe('string');

        });
        it('using let with a tpe in typescript', () => {
            let x: number;
            x = 3.14;
            x = 12;
            x = 121_456_789;
            // x = 'tacos';

        });
        it('union types in typescript', () => {
            let x: number | string;

            x = 'dog';

            x = 12;
        });
        it('intializing variable with let', () => {
            let name = 'Joe';

            let age: string | number = 'old';

            age = 42;

        });
    });
    describe('using const', () => {
        it('const allows you to declare a name for a vlue that cannot be reassinged', () => {
            const PI = 3.14; //const must be intialized and cannot be redefined
            //PI = 22;
            const favoriteNumbers = [9, 20, 108];
            //favoriteNumbers =[2,4];
            favoriteNumbers[0] = 2;
            const movie = {
                title: 'Thor',
                director: 'Taika Waititi',
                yearReleased: 2022
            };
            movie.title = 'Thor: Love and Thunder';
        });

        describe('details of some data types', () => {


        });


    });
});