import "reflect-metadata";
export const metaDataFun = () => {
  const plane = {
    color: "Red",
  };

  const metaFun = () => {
    console.log("This is meta data function");
  };

  Reflect.defineMetadata("note", metaFun, plane);
  const note = Reflect.getMetadata("note", plane);
  note();
  console.log("🚀 ~ get the meta  ~ note", note);
};

/**************************************
 * Class MetaData Example
 **********************************/
@printMetaData
class Plane {
  color: string = "red";

  @markFunction
  @markFunctionPara("custom Secret function message")
  fly() {
    console.log("varrrrrrrr");
  }
}

function markFunction(target: any, key: string) {
  Reflect.defineMetadata("secret1", 123, target, key);
}

function markFunctionPara(secretInf: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata("secret2", secretInf, target, key);
  };
}

function printMetaData(targe: typeof Plane) {
  for (let key in targe.prototype) {
    const secret = Reflect.getMetadata("secret1", targe.prototype, key);
    console.log("🚀 ~ Print Meta data from class object", secret);
  }
}

export const makePlane = () => {
  //   const secret1 = Reflect.getMetadata("secret1", Plane.prototype, "fly");
  //   console.log("secret with hard code secrete message:--", secret1);
  //   const secret2 = Reflect.getMetadata("secret2", Plane.prototype, "fly");
  //   console.log("secret with custom message :--", secret2);
};
