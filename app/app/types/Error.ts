export type ErrorData = {
  date: string;
  data: Data;
};

export type Data = {
  lang: string;
  code: string;
  message: string;
  line: number;
  //rawData?: Diagnostic
};
