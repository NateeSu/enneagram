import { getCharacterImage } from '../data/characterImages'

export default function TypeCharacter({ type, gender = 'female', size = 'large' }) {
  return (
    <img
      className={`type-character type-character--${size}`}
      src={getCharacterImage(type.id, gender)}
      alt={`${type.shortName} ${type.name} เวอร์ชัน${gender === 'male' ? 'ชาย' : 'หญิง'}`}
      loading="lazy"
    />
  )
}
