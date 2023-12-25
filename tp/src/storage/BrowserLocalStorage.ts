<<<<<<< HEAD
import { AbstractStorage } from "./AbstractStorage";

export class BrowserlocalStorage<
  Value extends { id: Id },
  Id extends string | number
> extends AbstractStorage<Value, Id> {
=======
import { AbstractStorage } from './AbstractStorage';

export class BrowserLocalStorage<Value extends { id: Id }, Id extends string | number> extends AbstractStorage<Value, Id> {
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
  readonly #storageKey: string;
  readonly #idGenerator: () => Id;

  constructor(storageKey: string, idGenerator: () => Id) {
    super();
    this.#storageKey = storageKey;
    this.#idGenerator = idGenerator;
  }

<<<<<<< HEAD
  get(id: Id): Promise<Value | null> {
    return this.ready.then(() => {
      const data = this.#extractDataFromStorage();

      return data[id] ?? null;
    });
=======
  async get(id: Id): Promise<Value | null> {
    await this.ready;
    const data = this.#extractDataFromStorage();

    return data[id] ?? null;
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
  }

  async getAll(): Promise<Value[]> {
    await this.ready;
    const data = this.#extractDataFromStorage();

    return Object.values(data);
  }
<<<<<<< HEAD
  async write(value: Omit<Value, "id"> & { id?: Id }, id?: Id): Promise<Id> {
=======

  async write(value: Omit<Value, 'id'> & { id?: Id }, id?: Id): Promise<Id> {
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
    await this.ready;
    const data = this.#extractDataFromStorage();
    const definedId = value.id ?? id ?? this.#idGenerator();

    this.#saveDataToStorage({
      ...data,
<<<<<<< HEAD
      [definedId]: { ...value, id: definedId },
=======
      [definedId]: {
        ...value,
        id: definedId,
      },
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
    });

    return definedId;
  }
<<<<<<< HEAD
=======

>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
  async delete(id: Id): Promise<void> {
    await this.ready;
    const data = this.#extractDataFromStorage();

    delete data[id];
    this.#saveDataToStorage(data);
  }

  #extractDataFromStorage(): Record<Id, Value> {
    const storageData = localStorage.getItem(this.#storageKey);

    return storageData ? JSON.parse(storageData) : {};
  }

<<<<<<< HEAD
  #saveDataToStorage(data: Record<Id, Value>): void {
=======
  #saveDataToStorage(data: Record<Id, Value>): void  {
>>>>>>> 1ee20797a4fcb7e5074b5e96422e89d7ea1c9eeb
    const jsonData = JSON.stringify(data);

    localStorage.setItem(this.#storageKey, jsonData);
  }
}
