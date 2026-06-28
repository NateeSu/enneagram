import { describe, expect, it } from 'vitest'
import { characterImages, getCharacterImage } from './characterImages'

describe('character image catalog', () => {
  it('provides male and female character art for every Enneagram type', () => {
    for (let type = 1; type <= 9; type += 1) {
      expect(characterImages[type].male).toMatch(/type-\d-.+-male\./)
      expect(characterImages[type].female).toMatch(/type-\d-.+-female\./)
    }
  })

  it('falls back to female artwork when no gender is selected', () => {
    expect(getCharacterImage(5)).toBe(characterImages[5].female)
  })

  it('uses optimized webp artwork in the UI catalog', () => {
    for (let type = 1; type <= 9; type += 1) {
      expect(characterImages[type].male).toMatch(/\.webp$/)
      expect(characterImages[type].female).toMatch(/\.webp$/)
    }
  })
})
