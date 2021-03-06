import {TennisGame} from './TennisGame';

class Score {
  player1Score: number = 0;
  player2Score: number = 0;

  addPlayer1Score (): void {
    this.player1Score += 1;
  }

  addPlayer2Score (): void {
    this.player2Score += 1;
  }

  isTieScore (): boolean {
    return this.player1Score === this.player2Score;
  }

  isWinnerOrAdvantageScore (): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  getScoreDiff (): number {
    return this.player1Score - this.player2Score;
  }
}

export class TennisGame1 implements TennisGame {
  private playersScore: Score = new Score();
  private player1Name: string;
  private player2Name: string;

  constructor (
    player1Name: string,
    player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint (playerName: string): void {
    if (playerName === 'player1') {
      this.playersScore.addPlayer1Score();
      return;
    }

    this.playersScore.addPlayer2Score()
  }

  getScore (): string {
    if (this.playersScore.isTieScore()) {
      return this.getTieScoreText();
    }

    if (this.playersScore.isWinnerOrAdvantageScore()) {
      return this.getWinnerOrAdvantagePlayerText();
    }
    return this.getScoreText();
  }

  private getScoreText (): string {
    return this.convertNumberToTextScore(this.playersScore.player1Score) +
      '-' +
      this.convertNumberToTextScore(this.playersScore.player2Score);
  }

  private convertNumberToTextScore (tempScore: number) {
    switch (tempScore) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      case 3:
        return 'Forty';
    }
  }

  private getWinnerOrAdvantagePlayerText (): string {
    const scoreDiff: number = this.playersScore.getScoreDiff();
    if (scoreDiff === 1) {
      return 'Advantage player1';
    }
    if (scoreDiff === -1) {
      return 'Advantage player2';
    }
    if (scoreDiff >= 2) {
      return 'Win for player1';
    }
    return 'Win for player2';
  }

  private getTieScoreText (): string {
    switch (this.playersScore.player1Score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }
}
