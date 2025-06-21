
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageConfigs = {
  "grande_entreprise.webp": {
    "small": {
      "width": 400,
      "height": 300,
      "quality": 75
    },
    "medium": {
      "width": 600,
      "height": 450,
      "quality": 80
    },
    "large": {
      "width": 800,
      "height": 600,
      "quality": 85
    }
  },
  "patrimonial.webp": {
    "small": {
      "width": 350,
      "height": 280,
      "quality": 75
    },
    "medium": {
      "width": 500,
      "height": 400,
      "quality": 80
    },
    "large": {
      "width": 700,
      "height": 560,
      "quality": 85
    }
  },
  "image-MIKA.webp": {
    "small": {
      "width": 200,
      "height": 250,
      "quality": 80
    },
    "medium": {
      "width": 300,
      "height": 375,
      "quality": 85
    },
    "large": {
      "width": 400,
      "height": 500,
      "quality": 90
    }
  },
  "Container.webp": {
    "small": {
      "width": 300,
      "height": 200,
      "quality": 75
    },
    "medium": {
      "width": 450,
      "height": 300,
      "quality": 80
    },
    "large": {
      "width": 600,
      "height": 400,
      "quality": 85
    }
  },
  "Container2.webp": {
    "small": {
      "width": 300,
      "height": 200,
      "quality": 75
    },
    "medium": {
      "width": 450,
      "height": 300,
      "quality": 80
    },
    "large": {
      "width": 600,
      "height": 400,
      "quality": 85
    }
  },
  "Container3.webp": {
    "small": {
      "width": 300,
      "height": 400,
      "quality": 75
    },
    "medium": {
      "width": 450,
      "height": 600,
      "quality": 80
    },
    "large": {
      "width": 600,
      "height": 800,
      "quality": 85
    }
  },
  "57.avif": {
    "small": {
      "width": 300,
      "height": 200,
      "quality": 75
    },
    "medium": {
      "width": 450,
      "height": 300,
      "quality": 80
    },
    "large": {
      "width": 600,
      "height": 400,
      "quality": 85
    }
  },
  "19.webp": {
    "small": {
      "width": 250,
      "height": 167,
      "quality": 75
    },
    "medium": {
      "width": 375,
      "height": 250,
      "quality": 80
    },
    "large": {
      "width": 500,
      "height": 333,
      "quality": 85
    }
  },
  "21.webp": {
    "small": {
      "width": 250,
      "height": 167,
      "quality": 75
    },
    "medium": {
      "width": 375,
      "height": 250,
      "quality": 80
    },
    "large": {
      "width": 500,
      "height": 333,
      "quality": 85
    }
  },
  "6.webp": {
    "small": {
      "width": 250,
      "height": 167,
      "quality": 75
    },
    "medium": {
      "width": 375,
      "height": 250,
      "quality": 80
    },
    "large": {
      "width": 500,
      "height": 333,
      "quality": 85
    }
  }
};

async function optimizeImages() {
  console.log('🚀 Début de l\'optimisation des images avec Sharp...');
  
  for (const [filename, sizes] of Object.entries(imageConfigs)) {
    const basePath = filename.replace(/\.(webp|avif|jpg|jpeg|png)$/i, '');
    const originalPath = path.join(__dirname, '../src/assets/img/webp', filename);
    
    if (!fs.existsSync(originalPath)) {
      console.log(`⚠️  Image non trouvée: ${originalPath}`);
      continue;
    }
    
    console.log(`📸 Optimisation de ${filename}...`);
    
    for (const [size, config] of Object.entries(sizes)) {
      const suffix = size === 'small' ? '_s' : size === 'medium' ? '_m' : '_l';
      
      try {
        // Version WebP
        const webpOutput = path.join(__dirname, '../src/assets/img/webp', `${basePath}${suffix}.webp`);
        await sharp(originalPath)
          .resize(config.width, config.height, { 
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: config.quality })
          .toFile(webpOutput);
        
        // Version AVIF
        const avifOutput = path.join(__dirname, '../src/assets/img/webp', `${basePath}${suffix}.avif`);
        await sharp(originalPath)
          .resize(config.width, config.height, { 
            fit: 'cover',
            position: 'center'
          })
          .avif({ quality: config.quality })
          .toFile(avifOutput);
        
        console.log(`✅ ${size}: ${webpOutput} et ${avifOutput}`);
      } catch (error) {
        console.error(`❌ Erreur pour ${filename} (${size}):`, error.message);
      }
    }
  }
  
  console.log('🎉 Optimisation terminée!');
}

optimizeImages().catch(console.error);
