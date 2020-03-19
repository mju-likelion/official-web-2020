import React, { useState } from 'react';
import ApplyPresenter1 from './ApplyPresenter1';
import ApplyPresenter2 from './ApplyPresenter2';

export default function ApplyContainer() {
  const [action, setAction] = useState('personalInfo');

  function toNext(e: React.FormEvent) {
    e.preventDefault();

    setAction('application');
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return action === 'personalInfo' ? (
    <ApplyPresenter1 onSubmit={toNext} />
  ) : (
    <ApplyPresenter2 onSubmit={onSubmit} />
  );
}
