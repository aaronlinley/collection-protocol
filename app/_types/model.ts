export interface ModelType {
  id: number;
  name: string;
  description: string;
  set: string;
  image: string;
  pack: {
    info: {
      title: string;
      value: string;
    }[]
  }
}
