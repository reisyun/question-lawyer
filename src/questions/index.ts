import { drunkDrive } from '@/questions/TrafficCrime/drunkDrive';
import { hitAndRun } from '@/questions/TrafficCrime/hitAndRun';
import { carInjury } from '@/questions/TrafficCrime/carInjury';

import { fraud } from '@/questions/Fraud/fraud';
import { embezzlement } from '@/questions/Fraud/embezzlement';

import { assault } from '@/questions/Assault/assault';

import { insult } from '@/questions/Insult/insult';

import { molestation } from '@/questions/SexOffense/molestation';
import { sexualAssault } from '@/questions/SexOffense/sexualAssault';
import { prostitution } from '@/questions/SexOffense/prostitution';
import { hiddenCamera } from '@/questions/SexOffense/hiddenCamera';
import { distributionOfPornography } from '@/questions/SexOffense/distributionOfPornography';
import { otherSexCrimes } from '@/questions/SexOffense/otherSexCrimes';

import { schoolViolence } from '@/questions/SchoolViolence/schoolViolence';
import { childAbuse } from '@/questions/SchoolViolence/childAbuse';

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
