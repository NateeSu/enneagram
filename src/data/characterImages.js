import type1Female from '../assets/characters/type-1-reformer-female.webp'
import type1Male from '../assets/characters/type-1-reformer-male.webp'
import type2Female from '../assets/characters/type-2-helper-female.webp'
import type2Male from '../assets/characters/type-2-helper-male.webp'
import type3Female from '../assets/characters/type-3-achiever-female.webp'
import type3Male from '../assets/characters/type-3-achiever-male.webp'
import type4Female from '../assets/characters/type-4-individualist-female.webp'
import type4Male from '../assets/characters/type-4-individualist-male.webp'
import type5Female from '../assets/characters/type-5-investigator-female.webp'
import type5Male from '../assets/characters/type-5-investigator-male.webp'
import type6Female from '../assets/characters/type-6-loyalist-female.webp'
import type6Male from '../assets/characters/type-6-loyalist-male.webp'
import type7Female from '../assets/characters/type-7-enthusiast-female.webp'
import type7Male from '../assets/characters/type-7-enthusiast-male.webp'
import type8Female from '../assets/characters/type-8-challenger-female.webp'
import type8Male from '../assets/characters/type-8-challenger-male.webp'
import type9Female from '../assets/characters/type-9-peacemaker-female.webp'
import type9Male from '../assets/characters/type-9-peacemaker-male.webp'

export const characterImages = {
  1: { female: type1Female, male: type1Male },
  2: { female: type2Female, male: type2Male },
  3: { female: type3Female, male: type3Male },
  4: { female: type4Female, male: type4Male },
  5: { female: type5Female, male: type5Male },
  6: { female: type6Female, male: type6Male },
  7: { female: type7Female, male: type7Male },
  8: { female: type8Female, male: type8Male },
  9: { female: type9Female, male: type9Male },
}

export const genderOptions = [
  { value: 'female', label: 'หญิง', description: 'แสดงตัวละครเวอร์ชันผู้หญิงในผลลัพธ์' },
  { value: 'male', label: 'ชาย', description: 'แสดงตัวละครเวอร์ชันผู้ชายในผลลัพธ์' },
]

export function getCharacterImage(typeId, gender = 'female') {
  return characterImages[typeId]?.[gender] ?? characterImages[typeId]?.female
}
