import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import { UPDATE_VOLUNTEER } from './ApplyConfirmQueries';
import useInput from 'hooks/useInput';
import EditPresenter1 from './EditPresenter1';

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

  const history = useHistory();

  const [
    updateVolunteer,
    { loading: volLoading, error: volError }
  ] = useMutation(UPDATE_VOLUNTEER);

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
    // TODO: Application page need to be make.
  }

  return (
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
  );
}
