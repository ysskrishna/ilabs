export interface MdxData {
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  source?: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
}

export enum FileType {
  TSX = "tsx",
  JSX = "jsx",
  JSON = "json",
  BASH = "bash",
  TXT = "txt",
}
