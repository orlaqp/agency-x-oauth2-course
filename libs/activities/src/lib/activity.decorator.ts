const Reflect = globalThis.Reflect;
const activityMetadata = {};

export interface IActivityProps {
    description: string;
}

export function Activity(props?: IActivityProps) {
    return function(target: Function) {
        activityMetadata[target.name] = target;
    }
}