import Image from 'next/image'
import { icons } from '@/lib/icons'

interface TechnologyIconProps {
  name: string
  className?: string
}

export function TechnologyIcon({ name, className = "" }: TechnologyIconProps) {
  const icon = icons[name]
  
  if (!icon) {
    return null
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={icon}
        alt={`${name} icon`}
        fill
        className="object-contain"
      />
    </div>
  )
} 