import lottoManager from '../models/lottoManager.js';
import lottoStatisticMachine from '../models/lottoStatisticMachine.js';
import lottoGameView from '../views/index.js';
import { $ } from '../utils/index.js';
import { validator } from '../validation/index.js';

const onClickRestartButton = () => {
  lottoManager.reset();
  lottoStatisticMachine.reset();
  lottoGameView.reset();
};

const onClickResultButton = (winningNumbers, bonusNumber) => {
  try {
    validator.validateWinningNumbers(winningNumbers);
    validator.validateBonusNumber(winningNumbers, bonusNumber);
  } catch (error) {
    alert(error.message);
    return;
  }

  const lottos = lottoManager.getLottos();
  const fare = lottoManager.getFare();
  const winningCounts = lottoStatisticMachine.calculateWinningCounts(
    lottos,
    winningNumbers,
    bonusNumber,
  );
  const earningsRate = lottoStatisticMachine.calculateEarningsRate(fare, winningCounts);

  lottoGameView.renderWinningStatisticModal(winningCounts, earningsRate);
  lottoGameView.bindWinningStatisticModalEvent(onClickRestartButton);
};

export const onSubmitFareForm = (e) => {
  e.preventDefault();
  const fare = $('#fare-input').value;

  try {
    validator.validateFare(fare);
    lottoManager.setFare(fare);
  } catch (error) {
    alert(error.message);
  }

  const lottoCount = lottoManager.calculateLottoCount(fare);
  const lottoList = lottoManager.createLottos(lottoCount);

  lottoGameView.deactivateFareForm();
  lottoGameView.renderLottoList(lottoList);
  lottoGameView.renderLottoMatchSection();
  lottoGameView.bindLottoMatchViewEvent(onClickResultButton);
};

export const onToggleLottoViewerController = () => {
  $('#lottos-container').classList.toggle('detail');
};
