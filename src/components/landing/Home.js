import React from 'react';
import { FormattedMessage } from "react-intl";


const Home = () => (
  <div>
      <h2>
          <FormattedMessage
              id="home_message"
              defaultMessage="Home" />
      </h2>
  </div>
);

export default Home;
