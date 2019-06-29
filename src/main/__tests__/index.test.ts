import {createWindow} from '..'

describe('Test basic functions:', () => {
  beforeAll(() => {
    ;(global as any).MAIN_WINDOW_WEBPACK_ENTRY = '/src/renderer'
  })

  it('MainWindow can be created', () => {
    expect(createWindow).not.toThrow()
  })
})
