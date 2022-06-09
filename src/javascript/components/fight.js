import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    const firstArenaFighter = createArenaFighter(
      firstFighter,
      createFighterConfigs(POSITIONS.LEFT),
    );
    const secondArenaFighter = createArenaFighter(
      secondFighter,
      createFighterConfigs(POSITIONS.RIGHT),
    );

    firstArenaFighter.restartCritPoints();
    secondArenaFighter.restartCritPoints();

    const pressedKeys = new Map();

    document.addEventListener('keydown', (e) => {
      if (e.repeat || !GAME_CONTROL_KEYS.some(key => key === e.code)) return;

      pressedKeys.set(e.code, true);

      processFightAction(firstArenaFighter, secondArenaFighter, pressedKeys, e.code);

      if (firstArenaFighter.currentHealth <= 0) {
        resolve(secondFighter);
      } else if (secondArenaFighter.currentHealth <= 0) {
        resolve(firstFighter);
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === controls.PlayerOneBlock) {
        firstArenaFighter.setIsBlocking(false);
      }
      if (e.code === controls.PlayerTwoBlock) {
        secondArenaFighter.setIsBlocking(false);
      }
      pressedKeys.delete(e.code);
    });
  });
}

function processFightAction(firstFighter, secondFighter, keyMap, currentCode) {
  if (currentCode === controls.PlayerOneBlock) {
    firstFighter.setIsBlocking(true);
  }
  if (currentCode === controls.PlayerTwoBlock) {
    secondFighter.setIsBlocking(true);
  }
  if (currentCode === controls.PlayerOneAttack) {
    applyFighterAttack(firstFighter, secondFighter, keyMap);
    return;
  }
  if (currentCode === controls.PlayerTwoAttack) {
    applyFighterAttack(secondFighter, firstFighter, keyMap);
    return;
  }
  if (controls.PlayerOneCriticalHitCombination.every(code => keyMap.has(code))) {
    firstFighter.doCritAttack(secondFighter);
    return;
  }
  if (controls.PlayerTwoCriticalHitCombination.every(code => keyMap.has(code))) {
    secondFighter.doCritAttack(firstFighter);
  }
}

export function getDamage(attacker, defender) {
  if(getBlockPower(defender) > getHitPower(attacker)) {
    return 0
  }
  return getHitPower - getBlockPower
}

export function getHitPower(fighter) {
  let criticalHitChance = Math.random() + 1;
  return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
  const dodgeChance = getRandomFloatFromRange(1, 2);
  return fighter.defense * dodgeChance;
}
