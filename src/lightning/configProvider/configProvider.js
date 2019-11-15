
export function getIconSvgTemplates() {
    
}

const tokens = {
    'lightning.actionSprite': 'assets/icons/action-sprite/svg/symbols.svg',
    'lightning.actionSpriteRtl': 'assets/icons/action-sprite/svg/symbols.svg',
    'lightning.customSprite': 'assets/icons/custom-sprite/svg/symbols.svg',
    'lightning.customSpriteRtl': 'assets/icons/custom-sprite/svg/symbols.svg',
    'lightning.doctypeSprite': 'assets/icons/doctype-sprite/svg/symbols.svg',
    'lightning.doctypeSpriteRtl':
        'assets/icons/doctype-sprite/svg/symbols.svg',
    'lightning.standardSprite': 'assets/icons/standard-sprite/svg/symbols.svg',
    'lightning.standardSpriteRtl':
        'assets/icons/standard-sprite/svg/symbols.svg',
    'lightning.utilitySprite': 'assets/icons/utility-sprite/svg/symbols.svg',
    'lightning.utilitySpriteRtl': 'assets/icons/utility-sprite/svg/symbols.svg'
}

export function getToken(name) {
    return tokens[name]    
}

export function getPathPrefix() {
    return '';    
}
