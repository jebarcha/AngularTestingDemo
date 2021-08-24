import { empty, from, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let servicio: any;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
        servicio = new MedicosService(spy)
    });

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: should get Medicos', () => {
        
        const medicos: string[] = ['medico1','medico2','medico3'];

        spyOn(servicio, 'getMedicos').and.callFake( () => {
             return from([medicos]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('should call the server to add a new medico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake( (medico:any) => {
            return empty();
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('should add a new Medico to the array of Medicos', () => {
        const medico = { id: 1, name: 'Juan'};

        spyOn(servicio, 'agregarMedico')
            .and.returnValue( from([medico]) );

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('should property of mensajeError equals to the error if the addition fails', () => {
        
        const myError = 'Cannot add medico';
        
        spyOn(servicio, 'agregarMedico').and
            .returnValue( throwError(myError) );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(myError);

    });

    it('should call server to delete a medico', () => {
        spyOn(window, 'confirm')
            .and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });

    it('should not call server to delete a medico when select No', () => {
        spyOn(window, 'confirm')
            .and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });
});
