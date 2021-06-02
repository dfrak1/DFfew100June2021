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
            x = 'tacos';

        });
    });

});