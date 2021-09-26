export class Ticker {
  private _tickers: Function[] = [];

  constructor() {
    requestAnimationFrame(this.handleFrame.bind(this));
  }

  handleFrame() {
    this._tickers.forEach((ticker) => {
      ticker();
    });
    requestAnimationFrame(this.handleFrame.bind(this));
  }

  addTicker(ticker: Function) {
    this._tickers.push(ticker);
  }
}
