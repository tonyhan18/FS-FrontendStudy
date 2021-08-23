describe('expect test', () => {
	it('37 to equal 37', () => {
		expect(37).toBe(37)
	})
	it('{age: 39} to equal {age: 39}', () => {
		expect({age: 39}).toEqual({age: 39})
	})
	it('.toHaveLength', () => {
		expect('hello').toHaveLength(5)
	})
	it('.toHaveProperty', () => {
		expect({name: 'Mark'}).toHaveProperty('name')
		expect({name: 'Mark'}).toHaveProperty('name', 'Mark')
	})
	it('.toBeDefined', () => {
		expect({name: 'Mark'}.name).toBeDefined()
		//expect({name: 'Mark'}.age).toBeDefined()
	})
	it('.toBeFalsy', () => {
		expect(false).toBeFalsy()
		expect(0).toBeFalsy()
		expect(null).toBeFalsy()
		expect(NaN).toBeFalsy()
	})
	it('.toBeGreaterThan', () => {
		expect(10).toBeGreaterThan(9)
	})
	it('.toBeGreaterThanOrEqual', () => {
		expect(10).toBeGreaterThanOrEqual(10);
	});
	it('.toBeInstanceOf', () => {
		class Foo {}
		expect(new Foo()).toBeInstanceOf(Foo);
	});
	it('.toBeNull', () => {
		expect(null).toBeNull();
	});
	it('.toBeTruthy', () => {
		expect(true).toBeTruthy();
		expect(1).toBeTruthy();
		expect('hello').toBeTruthy();
		expect({}).toBeTruthy();
	});
	it('.toBeUndefined', () => {
		expect({ name: 'Mark' }.age).toBeUndefined();
	});
	it('.toBeNaN', () => {
		expect(NaN).toBeNaN();
	});
	it('.not.toBe', () => {
    expect(37).not.toBe(36);
  });

  it('.not.toBeFalsy', () => {
    expect(true).not.toBeFalsy();
    expect(1).not.toBeFalsy();
    expect('hello').not.toBeFalsy();
    expect({}).not.toBeFalsy();
  });

  it('.not.toBeGreaterThan', () => {
    expect(10).not.toBeGreaterThan(10);
  });
})


// async test
describe('use async test', () => {
  it('setTimeout without done', () => {
    setTimeout(() => {
      expect(37).toBe(36);
    }, 1000);
  });

  it('setTimeout with done', done => {
    setTimeout(() => {
      expect(37).toBe(36);
      done();
    }, 1000);
  });
});

/// promise
describe('use async test', () => {
  it('promise then', () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return p().then(data => expect(data).toBe(37));
  });

  it('promise catch', () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }
    return p().catch(e => expect(e).toBeInstanceOf(Error));
  });
});

describe('use async test', () => {
  it('promise .resolves', () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return expect(p()).resolves.toBe(37);
  });

  it('promise .rejects', () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }
    return expect(p()).rejects.toBeInstanceOf(Error);
  });
});

// async 키워드 사용이 가장 좋다
describe('use async test', () => {
  it('async-await', async () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }

    const data = await p();
    return expect(data).toBe(37);
  });
});

describe('use async test', () => {
  it('async-await, catch', async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }

    try {
      await p();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});