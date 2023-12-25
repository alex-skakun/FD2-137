<<<<<<< HEAD
export abstract class AbstractStorage<
  Value,
  Id extends number | string,
  Init = void
> {
=======

export abstract class AbstractStorage<Value extends { id: Id }, Id extends number | string, Init = void> {
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
  readonly #ready: Promise<Init>;

  constructor() {
    this.#ready = this.init();
  }

  get ready(): Promise<Init> {
    return this.#ready;
  }

  init(): Promise<Init> {
    return Promise.resolve() as Promise<Init>;
  }

  abstract get(id: Id): Promise<Value | null>;

  abstract getAll(): Promise<Value[]>;

<<<<<<< HEAD
  abstract write(data: Value, id?: Id): Promise<Id>;

  abstract delete(id: Id): Promise<void>;
=======
  abstract write(data: Omit<Value, 'id'> & { id?: Id }, id?: Id): Promise<Id>;

  abstract delete(id: Id): Promise<void>;

>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
}
