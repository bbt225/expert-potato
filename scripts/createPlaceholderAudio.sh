#!/bin/bash

# Create placeholder audio files for all 660 lessons

echo "🎵 Creating placeholder audio files..."

# Create audio directory
mkdir -p public/audio

# Create a simple placeholder MP3 file (44 bytes silence)
# This is a minimal valid MP3 file
echo -e '\xFF\xFB\x90\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00' > public/audio/placeholder.mp3

# Basic level - 110 files
echo "📚 Creating audio for BASIC level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/basic-$i.mp3"
done
echo "✅ Created 110 files for BASIC"

# A1 level - 110 files
echo "📚 Creating audio for A1 level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/a1-$i.mp3"
done
echo "✅ Created 110 files for A1"

# A2 level - 110 files
echo "📚 Creating audio for A2 level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/a2-$i.mp3"
done
echo "✅ Created 110 files for A2"

# B1 level - 110 files
echo "📚 Creating audio for B1 level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/b1-$i.mp3"
done
echo "✅ Created 110 files for B1"

# B2 level - 110 files
echo "📚 Creating audio for B2 level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/b2-$i.mp3"
done
echo "✅ Created 110 files for B2"

# C1 level - 110 files
echo "📚 Creating audio for C1 level..."
for i in {1..110}; do
  cp public/audio/placeholder.mp3 "public/audio/c1-$i.mp3"
done
echo "✅ Created 110 files for C1"

# Count total files
total=$(ls -1 public/audio/*.mp3 | wc -l)
echo ""
echo "🎉 Audio generation complete!"
echo "   Total files: $total"
echo "   Location: public/audio/"
