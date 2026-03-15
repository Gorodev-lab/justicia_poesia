export interface Vocablo {
  id: number;
  vocablo: string;
  fonetica: string;
  significado: string;
}

export interface SavedPhrase {
  id: string;
  authorUid: string;
  originalText: string;
  generatedPhrase: string;
  ttsText: string;
  createdAt: any;
}
