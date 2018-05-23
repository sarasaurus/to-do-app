// this will help us autobind our class methods
export default function autoBind(classComponent) {
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype); // this returns an array of whatever I pss to this object method's keys/methods
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this); // this is using [bracket] notation instead of dot notation so that we can access its properties regardless of how the name comes back-- names can come back as weird strings with dashes that would prevent you from using dot notation-- backet notation allows you to handle that.
    }
  });
}
