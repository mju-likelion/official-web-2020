import React, { useState, createRef } from 'react';

import useInput from 'hooks/useInput';
import EditPresenter1 from './EditPresenter1';
import EditPresenter2 from './EditPresenter2';

interface Args {
  queryData: any;
}

export default function EditContainer(args: Args) {
  const { queryData } = args;
  const {
    volunteer: {
      name,
      email,
      phone,
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

  function toNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setAction('application');
  }

  function onFileChange() {
    if (file && file.current && file.current.files) {
      setFilename(file.current.files[0].name);
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
      toBefore={toBefore}
    />
  );
}
