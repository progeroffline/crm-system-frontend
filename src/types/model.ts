// src/types/model.ts

export type Status = 'работает' | 'ушла' | 'блок' | 'удалена';

export interface Questionnaire {
  vaginalMasturbationToys: boolean;
  vaginalMasturbationFingers: boolean;
  analMasturbationToys: boolean;
  analMasturbationFingers: boolean;
  sexWithMan: boolean;
  oralSexToy: boolean;
  squirtVideo: boolean;
  feet: boolean;
  peeVideo: boolean;
  periodVideo: boolean;
  minEnglish: boolean;
  notReadyFor: string;
  sexToys: string;
  customs: boolean;
  videoCalls: boolean;
}

export interface Model {
  id: number | null;
  avatar: string;
  ml: string;
  status: Status;
  mailing: boolean;
  questionnaire: Questionnaire;
}
