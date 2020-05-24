import validateDayParams from '../../src/App/Shared/Validator/validateDayParams'

describe('Validate Day Params Test', () => {
  test('Test invalid params string', async () => {
    const { isValid, data, error } = await validateDayParams('invalid')
    expect(isValid).toBeFalsy()
    expect(data).toBeUndefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('Test invalid params object', async () => {
    const { isValid, data, error } = await validateDayParams({
      date: '-1',
      month: '1',
      year: '2020',
    })
    expect(isValid).toBeFalsy()
    expect(data).toBeUndefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('Test validate params', async () => {
    const { isValid, data, error } = await validateDayParams({
      date: '22',
      month: '1',
      year: '2020',
    })
    expect(isValid).toBeTruthy()
    expect(data).toEqual({
      date: 22,
      month: 1,
      year: 2020,
    })
    expect(error).toBeUndefined()
  })
})
