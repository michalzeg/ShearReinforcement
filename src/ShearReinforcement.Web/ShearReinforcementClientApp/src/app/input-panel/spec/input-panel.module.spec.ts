import { InputPanelModule } from '../input-panel.module';

describe('InputPanelModule', () => {
  let inputPanelModule: InputPanelModule;

  beforeEach(() => {
    inputPanelModule = new InputPanelModule();
  });

  it('should create an instance', () => {
    expect(inputPanelModule).toBeTruthy();
  });
});
