import { drunkDrive } from '@/questions/trafficCrime/drunkDrive';
import { hitAndRun } from '@/questions/trafficCrime/hitAndRun';
import { carInjury } from '@/questions/trafficCrime/carInjury';

import { dummy } from '@/questions/temporary/dummy';

export const questions = {
  // 교통범죄
  trafficCrime: {
    theme: '교통범죄',
    subjects: [drunkDrive, hitAndRun, carInjury],
  },
  // 임시
  temporary: {
    theme: '임시',
    subjects: [dummy],
  },
} as const;
