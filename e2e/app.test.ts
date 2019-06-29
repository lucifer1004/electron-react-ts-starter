import {Application} from 'spectron'

describe('Basic functions: ', () => {
  let app: Application

  beforeEach(async () => {
    app = new Application({
      path:
        './out/type-relectron-darwin-x64/type-relectron.app/Contents/MacOS/type-relectron',
    })
    await app.start()
  })

  afterEach(async () => {
    await app.stop()
  })

  it('Browser window should be visible', async () => {
    expect(app.browserWindow.isVisible()).toBeTruthy()
  })
})
