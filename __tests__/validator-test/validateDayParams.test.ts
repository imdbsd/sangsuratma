import validateDayParams from '../../src/App/Shared/Validator/validateDayParams'

describe('Validate Day Params Test', () => {
  test('Test invalid params string', async () => {
    try {
      await validateDayParams('invalid')
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  test('Test invalid params object', async () => {
    try {
      await validateDayParams({
        date: '-1',
        month: '1',
        year: '2020',
      })
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  test('Test validate params', async () => {
    const isValid = await validateDayParams({
      date: '22',
      month: '1',
      year: '2020',
    })
    expect(isValid).toBeTruthy()
  })
})
