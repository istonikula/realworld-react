import { expect, test } from 'vitest'
import { helloVitest } from './App.tsx'

test('hello', () => {
  expect(helloVitest()).toBe('Hello vitest!')
})