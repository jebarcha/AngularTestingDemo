import { ROUTES } from './app.routes';
import { MedicoComponent } from '../../intermediate-integrations/medico/medico.component';

describe('Main routes', () => {

    it('should exists route /medico/:id', () => {
        
        expect(ROUTES).toContain({ 
            path: 'medico/:id', 
            component: MedicoComponent
        });

    });

});