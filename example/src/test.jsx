import React from 'react';
import { Page, Card, Progressbar } from 'framework7-react';
import '../css/lifelogStatus.scss';
import Test from '../icons/test.svg';

const LifelogStatus = () => {
  return (
    <Page>
      <div className="title-done-global">
        <p className="title-done">done</p>
        <p className="title-nodone"> no done</p>
      </div>
      <div className="card-life">
        <Card className="done">
          <div className="contain-progressbar">
            <p className="number-progressbar1">6</p>
            <Progressbar
              className="progressbar1"
              progress={95}
              id="demo-inline-progressbar"
            />
          </div>
        </Card>
        <div className="item-icon">
          <p className="text-header-life">hello</p>
          <img className="img-alcolhol" src={Test}></img>
        </div>
        <Card className="no-done">
          <div className="contain-progressbar-nodone">
            <p className="number-progressbar1-nodone">1</p>
            <Progressbar
              className="progressbar1-nodone"
              progress={20}
              id="demo-inline-progressbar"
            />
          </div>
        </Card>
      </div>
    </Page>
  );
};
export default LifelogStatus;
