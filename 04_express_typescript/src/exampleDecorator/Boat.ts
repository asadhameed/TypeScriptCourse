@classDecorator
export class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `this boat colors is ${this.color}`;
  }
  @logError("Oops, Boat was sunk")
  pilot(
    @parameterDecorator speed?: number,
    @parameterDecorator name?: string
  ): void {
    throw new Error();
    console.log("swish");
  }
}

function classDecorator(construct: typeof Boat) {
  // ====  function classDecorator(construct:Function)
  console.log(
    "🚀 ~ file: Boat.ts ~ line 18 ~ classDecorator ~ construct",
    construct
  );
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(
    "🚀 ~ file: Boat.ts ~ line 15 ~ parameterDecorator ~ index",
    index
  );
  console.log("🚀 ~ file: Boat.ts ~ line 15 ~ parameterDecorator ~ key", key);
}

function testDecorator(target: any, key: string): void {
  console.log("🚀 ~ file: Boat.ts ~ line 15 ~ testDecorator ~ key", key);
}

function logError(errMessage: string) {
  return function (target: any, key: string, des: PropertyDescriptor): void {
    const method = des.value;
    des.value = () => {
      try {
        method();
      } catch (error) {
        console.log(errMessage);
      }
    };
  };
}
