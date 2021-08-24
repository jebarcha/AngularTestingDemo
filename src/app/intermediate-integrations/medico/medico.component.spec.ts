import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './medico.component';
import { MedicoService } from '../medico.service';

describe('Integration tests - Medico Component', () => {
  
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [ MedicoService ],
      imports: [ HttpClientModule ]
    });

    fixture = TestBed.createComponent( MedicoComponent );
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return the name', () => {
    const name = 'Juan';
    const result = component.greetMedico(name);

    expect(result).toContain(name);
  });
  

});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MedicoComponent } from './medico.component';

// describe('MedicoComponent', () => {
//   let component: MedicoComponent;
//   let fixture: ComponentFixture<MedicoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MedicoComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MedicoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
