export class Card {

  private readonly _title: string;
  private readonly _description: string;
  private readonly _iconUrl: string;
  private readonly _fon: string;
  private readonly _url: string;


  constructor(title: string, description: string, iconUrl: string, fon: string, url: string) {
    this._title = title;
    this._description = description;
    this._iconUrl = iconUrl;
    this._fon = fon;
    this._url = url;
  }


  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  get fon(): string {
    return this._fon;
  }

  get url(): string {
    return this._url;
  }
}
