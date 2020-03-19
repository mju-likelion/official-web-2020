import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import { CREATE_VOLUNTEER, CREATE_APPLICATION } from './ApplyQueries';
import useInput from 'hooks/useInput';
import ApplyPresenter1 from './ApplyPresenter1';
import ApplyPresenter2 from './ApplyPresenter2';

export default function ApplyContainer({ history }: any) {
  const [action, setAction] = useState('personalInfo');

  const name = useInput('');
  const email = useInput('');
  const password = useInput('');
  const phone = useInput('');
  const sid = useInput('');
  const grade = useInput('');
  const college = useInput('');
  const major = useInput('');

  const motive = useInput('');
  const spec = useInput('');
  const activity = useInput('');
  const experience = useInput('');
  const wannaMakeDesc = useInput('');

  const [
    createVolunteer,
    { loading: volLoading, error: volError }
  ] = useMutation(CREATE_VOLUNTEER);
  const [createApp, { loading: appLoading, error: appError }] = useMutation(
    CREATE_APPLICATION
  );

  function toNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setAction('application');
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await createVolunteer({
        variables: {
          name: name.value,
          email: email.value,
          password: password.value,
          phone: phone.value,
          sid: sid.value,
          grade: grade.value,
          college: college.value,
          major: major.value
        }
      });
      if (volError) throw Error(volError.message);
      await createApp({
        variables: {
          motive: motive.value,
          spec: spec.value,
          activity: activity.value,
          experience: experience.value,
          wannaMakeDesc: wannaMakeDesc.value,
          volunteerEmail: email.value,
          volunteerPassword: password.value
        }
      });
      if (appError) throw Error(appError.message);
      toast.success('업로드 성공. 지원해주셔서 감사합니다!');
    } catch (e) {
      toast.error(
        `업로드 실패. 문제가 지속될 경우 관리자에게 메일 주세요. 에러코드: ${e}`
      );
    } finally {
      history.push('/');
    }
  }

  return action === 'personalInfo' ? (
    <ApplyPresenter1
      name={name}
      email={email}
      password={password}
      phone={phone}
      sid={sid}
      grade={grade}
      college={college}
      major={major}
      onSubmit={toNext}
    />
  ) : (
    <ApplyPresenter2
      motive={motive}
      spec={spec}
      activity={activity}
      experience={experience}
      wannaMakeDesc={wannaMakeDesc}
      volLoading={volLoading}
      appLoading={appLoading}
      onSubmit={onSubmit}
    />
  );
}
