#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import googleTTS from 'google-tts-api'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const audioDir = path.join(__dirname, '../public/audio')

// Ensure audio directory exists
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true })
}

console.log('🎵 Starting audio generation for 660 lessons...\n')

// Generate audio for all lessons
async function generateLessonAudio(lessonId, text) {
  try {
    // Get TTS URL from Google
    const url = googleTTS.getAudioUrl(text, {
      lang: 'es',
      slow: false,
      host: 'https://translate.google.com',
    })

    // Download audio
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()

    // Save to file
    const filename = `${lessonId}.mp3`
    const filepath = path.join(audioDir, filename)
    fs.writeFileSync(filepath, Buffer.from(buffer))

    return true
  } catch (error) {
    console.error(`Error generating audio for ${lessonId}:`, error.message)
    return false
  }
}

// Generate sample audio content
const levels = {
  basic: { count: 110, prefix: 'basic' },
  a1: { count: 110, prefix: 'a1' },
  a2: { count: 110, prefix: 'a2' },
  b1: { count: 110, prefix: 'b1' },
  b2: { count: 110, prefix: 'b2' },
  c1: { count: 110, prefix: 'c1' },
}

const sampleTexts = {
  basic: 'Hola. Buenos días. Este es el alfabeto español. Practica la pronunciación.',
  a1: 'Yo soy estudiante. Tú eres español. Él es profesor. Practica el presente de indicativo.',
  a2: 'He comido. Has vivido. Ha hablado. Estudiamos el pretérito perfecto.',
  b1: 'Quiero que hables. Espero que vengas. Es importante que estudies. El subjuntivo presente.',
  b2: 'Si tuviera dinero, viajaría. Ojalá pudiera ayudarte. El subjuntivo imperfecto.',
  c1: 'Si hubiera sabido, no habría venido. Hubiera preferido que me lo dijeras. Pluscuamperfecto de subjuntivo.',
}

let successCount = 0
let totalCount = 0

async function generateAllAudio() {
  for (const [levelId, config] of Object.entries(levels)) {
    console.log(`📚 Generating audio for ${levelId.toUpperCase()} level (${config.count} lessons)...`)

    const text = sampleTexts[levelId]

    for (let i = 1; i <= config.count; i++) {
      const lessonId = `${config.prefix}-${i}`
      totalCount++

      // Add variation to text
      const variedText = `${text} Lección número ${i}.`

      const success = await generateLessonAudio(lessonId, variedText)

      if (success) {
        successCount++
        if (i % 10 === 0) {
          process.stdout.write(`  ✓ Generated ${i}/${config.count} audio files for ${levelId}\r`)
        }
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log(`  ✅ Completed ${config.count} audio files for ${levelId.toUpperCase()}\n`)
  }

  console.log(`\n🎉 Audio generation complete!`)
  console.log(`   Success: ${successCount}/${totalCount} files`)
  console.log(`   Location: ${audioDir}`)
}

generateAllAudio().catch(console.error)
