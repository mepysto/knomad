'use client'

import { Button } from '@/components/ui/button'
import { useFilter } from '@/contexts/FilterContext'

export default function FilterPresetButtons() {
  const { presets, applyPreset } = useFilter()

  // 기본 프리셋만 표시 (커스텀 제외)
  const basicPresets = presets.filter((p) => !p.isCustom)

  return (
    <div className="flex flex-wrap gap-2">
      {basicPresets.map((preset) => (
        <Button
          key={preset.id}
          variant="outline"
          size="sm"
          onClick={() => applyPreset(preset.id)}
          className="text-xs"
        >
          {preset.name}
        </Button>
      ))}
    </div>
  )
}
