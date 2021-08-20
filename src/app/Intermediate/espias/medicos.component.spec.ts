import { from, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: should get Medicos', () => {
        
        const medicos = ['medico1','medico2','medico3'];

         spyOn(servicio, 'getMedicos').and.callFake( () => {
             return from([medicos]);
         });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    // it('should call the server to add Medico', () => {
        
    //     const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) });
    //     const service = new MedicosService(spy);
        
    //     const espia = spyOn(service, 'agregarMedico').and.returnValue(of(''));

    //     expect(espia).toHaveBeenCalled();

    // });

    // it('should add a new Medico to the array of Medicos', () => {
    //     const medico = { id: 1, name: 'Juan'};

    //     spyOn(service, 'agregarMedico').and.returnValue( of([medico]) )

    //     //expect(component.medicos.length).toBe(1);
    //     expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    // });

    // it('should property of mensajeError equals to the error if the addition fails', () => {
        
    //     const myError = 'Cannot add medico';
        
    //     spyOn(service, 'agregarMedico').and
    //         .returnValue( throwError(myError) );

    //     component.agregarMedico();

    //     expect(component.mensajeError).toBe(myError);

    // });

    // it('should call server to delete a medico', () => {
    //     spyOn(window, 'confirm')
    //         .and.returnValue(true);

    //     const espia = spyOn(service, 'borrarMedico')
    //         .and.returnValue(of(''));

    //     component.borrarMedico('1');

    //     expect(espia).toHaveBeenCalledWith('1');
    // });
});
