import test from 'ava'
import RescueTime from '.'
import { apiKey } from './credentials.ignore'

const r = new RescueTime(apiKey)

test('RescueTime#dailySummary()', async (t) => {
  const result = await r.dailySummary()
  console.log(result)
  t.true(Array.isArray(result))
})