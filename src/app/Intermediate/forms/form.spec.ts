import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';

describe('test in forms', () => {
    
    let component: FormRegister;

    beforeEach( () => {
        component = new FormRegister( new FormBuilder() );
    });

    it('should form contain two fields, email and password', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('should email be a required field', () => {
        const control = component.form.get('email');
        control?.setValue('');

        expect(control!.valid).toBeFalsy();
    });

    it('should email be a valid e-mail', () => {
        const control = component.form.get('email');
        control?.setValue('anything@email.com');

        expect(control!.valid).toBeTruthy();
    });
});