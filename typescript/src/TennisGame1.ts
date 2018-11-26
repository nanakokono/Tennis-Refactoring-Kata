import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') {
      this.player1Score += 1;
      return;
    }

    this.player2Score += 1;
  }

  getScore(): string {
    if (this.player1Score === this.player2Score) {
      return this.getTieScoreText();
    }
    if (this.player1Score >= 4 || this.player2Score >= 4) {
      return this.getWinnerOrAdvantagePlayerText();
    }
    return this.getScoreText();
  }

  private getScoreText (): string {
    let score = '';
    let tempScore: number = 0;
    for (let i = 1; i < 3; i++) {
      if (i === 1){
        tempScore = this.player1Score;
      } else {
        score += '-';
        tempScore = this.player2Score;
      }
      score += this.convertNumberToTextScore(tempScore);
    }
    return score;
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
    const scoreDiff: number = this.player1Score - this.player2Score;
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

  private getTieScoreText(): string {
    switch (this.player1Score) {
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
