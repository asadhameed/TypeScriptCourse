type callback = () => void;

export class Eventing {
  private events: { [key: string]: callback[] } = {};

  on = (eventName: string, callback: callback): void => {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  };
  trigger = (eventName: string): void => {
    // const handler = this.events[eventName] || [];
    const handler = this.events[eventName];
    if (!handler || handler.length === 0) {
      return;
    }
    handler.forEach((cl) => cl());
  };
}
