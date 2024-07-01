// Basic subclasses - Adam and Eve
class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
    return [new Man(), new Woman()];
  }
}
// code
class Human {
  constructor() {}
}

class Man extends Human {
  constructor() {
    super();
  }
}

class Woman extends Human {
  constructor() {
    super();
  }
}
