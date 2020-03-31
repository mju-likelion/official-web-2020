import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { VOLUNTEER } from './VolunteerDetailQueries';
import VolunteerDetailPresenter from './VolunteerDetailPresenter';
import Error from 'components/Error';

export default function VolunteerDetailContainer() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(VOLUNTEER, { variables: { id } });
  console.log(data);

  return error ? (
    <Error title='에러!' desc='오류가 발생했습니다. 다시 시도해주십시오.' />
  ) : data && data.volunteers.length === 0 ? (
    <Error title='에러!' desc='해당하는 지원서가 없습니다.' />
  ) : (
    <VolunteerDetailPresenter
      volunteer={data ? data.volunteers[0] : undefined}
      loading={loading}
    />
  );
}
