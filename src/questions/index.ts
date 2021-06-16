import { drunkDrive } from '@/questions/trafficCrime/drunkDrive';
import { hitAndRun } from '@/questions/trafficCrime/hitAndRun';
import { carInjury } from '@/questions/trafficCrime/carInjury';

import { fraud } from '@/questions/fraud/fraud';
import { embezzlement } from '@/questions/fraud/embezzlement';

export const questions = {
  // 교통범죄
  trafficCrime: {
    theme: '교통범죄',
    subjects: [drunkDrive, hitAndRun, carInjury],
  },
  // 사기ㆍ횡령
  fraud: {
    theme: '사기ㆍ횡령',
    subjects: [fraud, embezzlement],
  },
} as const;
