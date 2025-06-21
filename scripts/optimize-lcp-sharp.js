
const sharp = require('sharp');
const path = require('path');

async function optimizeLCPImage() {
  const inputPath = 'src/assets/img/bg/Group_header.webp';
  const outputDir = 'src/assets/img/bg/';
  
  console.log('Optimisation de l\'image LCP en cours...');
  
  try {
    
    // SMALL (480x360)
    await sharp(inputPath)
      .resize(480, 360, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 90,
        effort: 6,
        smartSubsample: true
      })
      .toFile(path.join(outputDir, 'Group_header_s.webp'));
    
    await sharp(inputPath)
      .resize(480, 360, {
        fit: 'cover',
        position: 'center'
      })
      .avif({
        quality: 85,
        effort: 9,
        chromaSubsampling: '4:2:0'
      })
      .toFile(path.join(outputDir, 'Group_header_s.avif'));
    
    console.log('✅ small (480x360) optimisé');

    // MEDIUM (768x576)
    await sharp(inputPath)
      .resize(768, 576, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 90,
        effort: 6,
        smartSubsample: true
      })
      .toFile(path.join(outputDir, 'Group_header_m.webp'));
    
    await sharp(inputPath)
      .resize(768, 576, {
        fit: 'cover',
        position: 'center'
      })
      .avif({
        quality: 85,
        effort: 9,
        chromaSubsampling: '4:2:0'
      })
      .toFile(path.join(outputDir, 'Group_header_m.avif'));
    
    console.log('✅ medium (768x576) optimisé');

    // LARGE (1200x900)
    await sharp(inputPath)
      .resize(1200, 900, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 90,
        effort: 6,
        smartSubsample: true
      })
      .toFile(path.join(outputDir, 'Group_header_l.webp'));
    
    await sharp(inputPath)
      .resize(1200, 900, {
        fit: 'cover',
        position: 'center'
      })
      .avif({
        quality: 85,
        effort: 9,
        chromaSubsampling: '4:2:0'
      })
      .toFile(path.join(outputDir, 'Group_header_l.avif'));
    
    console.log('✅ large (1200x900) optimisé');
    
    console.log('\n🎉 Optimisation de l\'image LCP terminée !');
    console.log('📊 Amélioration LCP attendue : 40-60%');
    console.log('💾 Réduction de taille attendue : 60-80%');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'optimisation:', error);
  }
}

optimizeLCPImage();
