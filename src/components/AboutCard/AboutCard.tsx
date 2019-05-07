import React from 'react';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';

const { Meta } = Card;



const AboutCard = () =>{

  return (
    <>
      {/* <Switch checked={!loading} onChange={this.onChange} /> */}

      <Card style={{ width: 300, marginTop: 16 }} loading={false}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      </>

    );
}

export default AboutCard;