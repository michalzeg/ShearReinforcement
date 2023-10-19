import { OutputPanelModule } from '../output-panel.module';

describe('OutputPanelModule', () => {
  let outputPanelModule: OutputPanelModule;

  beforeEach(() => {
    outputPanelModule = new OutputPanelModule();
  });

  it('should create an instance', () => {
    expect(outputPanelModule).toBeTruthy();
  });
});
