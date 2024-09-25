interface TPagination {
  page: number;
  perPage: number;
}

export class Pagination<TData = any> {
  private _pagination: TPagination;
  private _payload: TData[];
  private _quantity = 0;

  public constructor(pagination: TPagination, payload?: TData[]) {
    const inputPage = Number(pagination.page);
    const inputPerPage = Number(pagination.perPage);

    const page: number = !inputPage ? 1 : inputPage;
    const perPage: number =
      inputPerPage > 500 ? 50 : !inputPerPage ? 50 : inputPerPage;

    const newPagination: TPagination = {
      page: (page - 1) * perPage,
      perPage,
    };

    this._pagination = newPagination;
    this._payload = payload ?? [];

    if (this._payload.length !== 0) {
      this.quantity(this._payload.length);
    }
  }

  public get page() {
    return this._pagination.page;
  }

  public get perPage() {
    return this._pagination.perPage;
  }

  public get startIndex() {
    return this._pagination.page;
  }

  public get endIndex() {
    return this._pagination.page + this._pagination.perPage;
  }

  public quantity(size: number) {
    this._quantity = size;
  }

  public metadata(total: number) {
    const current = Math.floor(this.startIndex / this._pagination.perPage + 1);
    const last = total ? Math.ceil(total / this._pagination.perPage) : 1;
    const next = current >= last ? null : current + 1;
    const prev = current === 1 ? null : current - 1;

    return {
      quantity: total,
      page: {
        current,
        next,
        prev,
        last,
      },
    };
  }
}
