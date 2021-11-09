import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGreetingThunk } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetingThunk());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingReducer.greetings);

  return (
    <div>
      <h1>
        {message}
      </h1>
    </div>
  );
};

export default Greeting;
