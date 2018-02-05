export interface Attribute {
  name: string;
  value: number;
}

export interface Item {
  text?: string; // TODO: Make this not optional
  attributes: Attribute[];
}
