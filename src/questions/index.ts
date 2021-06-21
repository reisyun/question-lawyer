import { drunkDrive } from '@/questions/trafficCrime/drunkDrive';
import { hitAndRun } from '@/questions/trafficCrime/hitAndRun';
import { carInjury } from '@/questions/trafficCrime/carInjury';

import { fraud } from '@/questions/fraud/fraud';
import { embezzlement } from '@/questions/fraud/embezzlement';

import { assault } from '@/questions/assault/assault';

import { insult } from '@/questions/insult/insult';

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
  // 폭행ㆍ상해
  assault: {
    theme: '폭행ㆍ상해',
    subjects: [assault],
  },
  // 모욕ㆍ명예훼손
  insult: {
    theme: '모욕ㆍ명예훼손',
    subjects: [insult],
  },
} as const;
