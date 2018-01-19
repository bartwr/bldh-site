import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

export default class Landing extends Component {
 
  render() {
    return (
      <div style={s.base}>

        <h1>
          blockchain lab den haag
        </h1>

        <p>
          an ecosystem where early-tech adopters, developers,
          industry experts and blockchain ethusiasts <em>connect</em>
        </p>

        <p>
          we provide a lab where you can develop your ideas on
          blockchain technology in collaboration with others
        </p>

        <h2>location</h2>

        <a href="https://www.thehaguetech.nl">The Hague Tech</a><br />

        <h2>join us</h2>

        <p>
          every friday from 10 -
          be welcome!
        </p>

        <a href="https://www.meetup.com/Ethereum-Cowork-NL/">Meetup</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/bartwr/bldh-site">GitHub</a>

      </div>
    );
  }
}

var s = {
  base: {
    // backgroundColor: 'yellow',
    // padding: '15rem 0 12rem 0'
  },
}
