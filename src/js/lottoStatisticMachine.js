import { LOTTO_RULES } from './constant/index.js';

class LottoStatisticMachine {
  #winningNumbers = new Array(LOTTO_RULES.BALL_COUNT).fill(null);

  #bonusNumber = null;

  #winningCounts = new Array(5).fill(null);

  #earningsRate = null;

  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];

  calculateWinningCounts(lottos, winningNumbers, bonumsNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonumsNumber;

    const winningCounts = new Array(5).fill(0);

    lottos.forEach((lotto) => {
      const hitCount = this.#calculateHitCount(lotto);
      const isHitBonusNumber = this.#checkHitBonusNumber(lotto);

      if (hitCount >= 3) {
        const rank = this.#convertHitCountToRank(hitCount, isHitBonusNumber);

        winningCounts[rank - 1] += 1;
      }
    });

    this.#winningCounts = winningCounts.reverse();
    return this.#winningCounts;
  }

  #calculateHitCount(lotto) {
    return lotto.reduce((hitCount, lottoNumber) => {
      if (this.#winningNumbers.includes(lottoNumber)) {
        return hitCount + 1;
      }

      return hitCount;
    }, 0);
  }

  #checkHitBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  #convertHitCountToRank(hitCount, isHitBonusNumber) {
    if (hitCount === 3) {
      return 5;
    }

    if (hitCount === 4) {
      return 4;
    }

    if (hitCount === 5) {
      if (isHitBonusNumber) {
        return 2;
      }

      return 3;
    }

    return 1;
  }

  calculateEarningsRate(fare, winningCounts) {
    const earnings = this.#calculateEarnings(winningCounts);

    this.#earningsRate = ((earnings - fare) * 100) / fare;
    return this.#earningsRate;
  }

  #calculateEarnings(winningCounts) {
    return winningCounts.reduce(
      (earnings, winningCount, index) => earnings + this.#prizeMoney[index] * winningCount,
      0,
    );
  }
}

const lottoStatisticMachine = new LottoStatisticMachine();

export default lottoStatisticMachine;
