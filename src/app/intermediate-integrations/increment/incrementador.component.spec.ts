import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Integration tests - Incrementador Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show legend ', () => {
        component.leyenda = 'loading progress';

        fixture.detectChanges();

        const element: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(element.innerHTML).toContain('loading progress');
    });

    it('should show the progress value in the input element', () => {
        
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;
    
            expect(elem.value).toBe(55);
        } );

    });

    it('should increment/decrement 5 when click the button', () => {
        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary') );
        
        buttons[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        buttons[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);

    });

    it('should progress change in h3', () => {

        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary') );
        buttons[0].triggerEventHandler('click', null);
        
        fixture.detectChanges();

        const element: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(element.innerHTML).toContain('45');
    });

});
