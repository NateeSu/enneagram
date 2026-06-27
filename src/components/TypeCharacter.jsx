import { characterImages } from '../data/characterImages'

export default function TypeCharacter({ type, size = 'large' }) {
  return (
    <img
      className={`type-character type-character--${size}`}
      src={characterImages[type.id]}
      alt={`${type.shortName} ${type.name}`}
      loading="lazy"
    />
  )
}
