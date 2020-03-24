import React, { useState, createRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';
import { toast } from 'react-toastify';

import { UPDATE_VOLUNTEER, UPDATE_APPLICATION } from './ApplyConfirmQueries';
import useInput from 'hooks/useInput';
import EditPresenter1 from './EditPresenter1';
import EditPresenter2 from './EditPresenter2';

interface Args {
  queryData: any;
  refetch: any;
}

export default function EditContainer(args: Args) {
  const { queryData, refetch } = args;
  const {
    volunteer: {
      id,
      name,
      email,
      password,
      phone,
      sid,
      grade,
      college,
      major,
      application: {
        motive,
        spec,
        activity,
        experience,
        wannaMakeDesc,
        wannaMakeImageUrl
      }
    }
  } = queryData;

  const [
    updateVolunteer,
    { loading: volLoading, error: volError }
  ] = useMutation(UPDATE_VOLUNTEER);
  const [
    updateApplication,
    { loading: appLoading, error: appError }
  ] = useMutation(UPDATE_APPLICATION);
  const [axiosLoading, setAxiosLoading] = useState(false);

  const [action, setAction] = useState('personalInfo');

  const nameInput = useInput(name);
  const emailInput = useInput(email);
  const phoneInput = useInput(phone);
  const gradeInput = useInput(grade);
  const collegeInput = useInput(college);
  const majorInput = useInput(major);

  const motiveInput = useInput(motive);
  const specInput = useInput(spec);
  const activityInput = useInput(activity);
  const experienceInput = useInput(experience);
  const wannaMakeDescInput = useInput(wannaMakeDesc);
  const file = createRef<HTMLInputElement>();
  const [filename, setFilename] = useState('');

  async function onPersonalInfoEdit(e: React.MouseEvent) {
    try {
      await updateVolunteer({
        variables: {
          id,
          name: nameInput.value,
          email: emailInput.value,
          password,
          phone: phoneInput.value,
          sid,
          grade: gradeInput.value,
          college: collegeInput.value,
          major: majorInput.value
        }
      });
      if (volError) throw Error(volError.message);
      toast.success('수정 성공.');
      await refetch({ variables: { sid, password } });
    } catch (e) {
      toast.error(
        `수정 실패. 문제가 지속될 경우 관리자에게 메일 주세요. 에러코드: ${e}`
      );
    }
  }

  function toNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setAction('application');
  }

  function onFileChange() {
    if (file && file.current && file.current.files) {
      setFilename(file.current.files[0].name);
    }
  }

  async function onApplicationEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();
    let filelocation;
    if (file && file.current && file.current.files && file.current.files[0]) {
      data.append('file', file.current.files[0]);
      setAxiosLoading(true);
      const { data: result } = await axios.post(
        'https://mju-likelion-official-server.herokuapp.com/api/upload',
        data,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      );
      filelocation = result;
      setAxiosLoading(false);
    }

    try {
      await updateApplication({
        variables: {
          motive: motiveInput.value,
          spec: specInput.value,
          activity: activityInput.value,
          experience: experienceInput.value,
          wannaMakeDesc: wannaMakeDescInput.value,
          wannaMakeImageUrl: filelocation === '' ? null : filelocation,
          volunteerEmail: email,
          volunteerPassword: password
        }
      });
      if (appError) throw Error(appError.message);
      toast.success('수정 성공.');
      await refetch({ variables: { sid, password } });
    } catch (e) {
      toast.error(
        `수정 실패. 문제가 지속될 경우 관리자에게 메일 주세요. 에러코드: ${e}`
      );
    }
  }

  function toBefore(e: React.MouseEvent) {
    e.preventDefault();

    setAction('personalInfo');
  }

  return action === 'personalInfo' ? (
    <EditPresenter1
      name={nameInput}
      email={emailInput}
      phone={phoneInput}
      grade={gradeInput}
      college={collegeInput}
      major={majorInput}
      loading={volLoading}
      onEdit={onPersonalInfoEdit}
      onSubmit={toNext}
    />
  ) : (
    <EditPresenter2
      motive={motiveInput}
      spec={specInput}
      activity={activityInput}
      experience={experienceInput}
      wannaMakeDesc={wannaMakeDescInput}
      wannaMakeImageUrl={wannaMakeImageUrl}
      file={file}
      filename={filename}
      onFileChange={onFileChange}
      axiosLoading={axiosLoading}
      loading={appLoading}
      onEdit={onApplicationEdit}
      toBefore={toBefore}
    />
  );
}
