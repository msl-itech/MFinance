/**
 * Module de remplacement pour @popperjs/core
 * Résout les problèmes de compatibilité avec vite/esbuild
 */

// Import direct depuis les fichiers spécifiques pour éviter les problèmes de résolution
import * as PopperDefault from '@popperjs/core/dist/umd/popper.js';

// Réexporter les éléments nécessaires
export const createPopperLite = PopperDefault.createPopper;
export const flip = PopperDefault.modifiers.flip;
export const preventOverflow = PopperDefault.modifiers.preventOverflow;
export const arrow = PopperDefault.modifiers.arrow;
export const offset = PopperDefault.modifiers.offset;

// Exporter le module complet par défaut
export default PopperDefault;
