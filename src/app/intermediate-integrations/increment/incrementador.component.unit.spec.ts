import { Component } from '@angular/core';
import { IncrementadorComponent } from './incrementador.component';

describe('Increment component Unit test', () => {
    let component: IncrementadorComponent;

    beforeEach(() => {
        component = new IncrementadorComponent();
    });
    
    it('should progress not be greater than 100', () => {
        component.progreso = 50;
        component.cambiarValor(5);

        expect(component.progreso).toBe(55);
    });
});