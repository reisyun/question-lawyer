import { QuestionTheme } from '@/questions/common/model';
import { drunkDriveQuestions } from '@/questions/trafficCrime/drunkDrive';
import { hitAndRunQuestions } from '@/questions/trafficCrime/hitAndRun';
import { carInjuryQuestions } from '@/questions/trafficCrime/carInjury';

export const trafficCrime: QuestionTheme = {
  theme: '교통범죄',
  subjects: [drunkDriveQuestions, hitAndRunQuestions, carInjuryQuestions],
};
