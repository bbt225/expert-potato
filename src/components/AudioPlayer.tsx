'use client'

import { useState, useEffect } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

interface AudioPlayerProps {
  text: string
  audioUrl?: string
  lang?: string
}

export function AudioPlayer({ text, audioUrl, lang = 'es-ES' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)

  useEffect(() => {
    // Check if audio file exists
    if (audioUrl) {
      fetch(audioUrl, { method: 'HEAD' })
        .then(response => setHasAudio(response.ok))
        .catch(() => setHasAudio(false))
    }
  }, [audioUrl])

  const speak = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    // Try to play audio file first
    if (hasAudio && audioUrl) {
      const audio = new Audio(audioUrl)
      audio.play()
        .then(() => {
          setIsPlaying(true)
          audio.onended = () => setIsPlaying(false)
        })
        .catch(() => {
          // Fallback to speech synthesis
          useSpeechSynthesis()
        })
    } else {
      // Use speech synthesis
      useSpeechSynthesis()
    }
  }

  const useSpeechSynthesis = () => {
    if (!('speechSynthesis' in window)) {
      console.error('Speech synthesis not supported')
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.85 // Slower for learning
    utterance.pitch = 1
    utterance.volume = 1

    // Try to use Spanish voice if available
    const voices = window.speechSynthesis.getVoices()
    const spanishVoice = voices.find(voice =>
      voice.lang.startsWith('es') || voice.lang.includes('ES')
    )
    if (spanishVoice) {
      utterance.voice = spanishVoice
    }

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      onClick={speak}
      className={`p-3 rounded-lg transition-all ${
        isPlaying
          ? 'bg-primary-500 text-white'
          : 'hover:bg-neutral-100 text-primary-600'
      }`}
      title={isPlaying ? 'Остановить' : 'Прослушать'}
    >
      {isPlaying ? (
        <FiVolumeX className="w-6 h-6" />
      ) : (
        <FiVolume2 className="w-6 h-6" />
      )}
    </button>
  )
}
