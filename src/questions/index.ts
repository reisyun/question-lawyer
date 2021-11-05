import { drunkDrive } from '@/questions/trafficCrime/drunkDrive';
import { hitAndRun } from '@/questions/trafficCrime/hitAndRun';
import { carInjury } from '@/questions/trafficCrime/carInjury';

import { fraud } from '@/questions/fraud/fraud';
import { embezzlement } from '@/questions/fraud/embezzlement';

import { assault } from '@/questions/assault/assault';

import { insult } from '@/questions/insult/insult';

import { molestation } from '@/questions/sexOffense/molestation';
import { sexualAssault } from '@/questions/sexOffense/sexualAssault';
import { prostitution } from '@/questions/sexOffense/prostitution';
import { hiddenCamera } from '@/questions/sexOffense/hiddenCamera';
import { distributionOfPornography } from '@/questions/sexOffense/distributionOfPornography';
import { otherSexCrimes } from '@/questions/sexOffense/otherSexCrimes';

import { schoolViolence } from '@/questions/schoolViolence/schoolViolence';
import { childAbuse } from '@/questions/schoolViolence/childAbuse';

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
  // 모욕ㆍ명예훼손
  sexOffense: {
    theme: '성범죄',
    subjects: [
      molestation,
      sexualAssault,
      prostitution,
      hiddenCamera,
      distributionOfPornography,
      otherSexCrimes,
    ],
  },
  schoolViolence: {
    theme: '학교폭력ㆍ아동학대',
    subjects: [schoolViolence, childAbuse],
  },
} as const;
