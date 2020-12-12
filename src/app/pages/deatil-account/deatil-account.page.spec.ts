import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeatilAccountPage } from './deatil-account.page';

describe('DeatilAccountPage', () => {
  let component: DeatilAccountPage;
  let fixture: ComponentFixture<DeatilAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeatilAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeatilAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
