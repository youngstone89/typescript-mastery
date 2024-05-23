const fnA = (val: number | string): number => {
    return val as number;
}

const fnB = (val: number | string): number => {
    return typeof (val) === 'string' ? Number(val) : val;
}