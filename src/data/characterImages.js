import type1Female from '../assets/characters/type-1-reformer-female.png'
import type1Male from '../assets/characters/type-1-reformer-male.png'
import type2Female from '../assets/characters/type-2-helper-female.png'
import type2Male from '../assets/characters/type-2-helper-male.png'
import type3Female from '../assets/characters/type-3-achiever-female.png'
import type3Male from '../assets/characters/type-3-achiever-male.png'
import type4Female from '../assets/characters/type-4-individualist-female.png'
import type4Male from '../assets/characters/type-4-individualist-male.png'
import type5Female from '../assets/characters/type-5-investigator-female.png'
import type5Male from '../assets/characters/type-5-investigator-male.png'
import type6Female from '../assets/characters/type-6-loyalist-female.png'
import type6Male from '../assets/characters/type-6-loyalist-male.png'
import type7Female from '../assets/characters/type-7-enthusiast-female.png'
import type7Male from '../assets/characters/type-7-enthusiast-male.png'
import type8Female from '../assets/characters/type-8-challenger-female.png'
import type8Male from '../assets/characters/type-8-challenger-male.png'
import type9Female from '../assets/characters/type-9-peacemaker-female.png'
import type9Male from '../assets/characters/type-9-peacemaker-male.png'

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
