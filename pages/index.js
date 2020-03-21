import React from 'react';
import Head from 'next/head';

import Grid from '../components/composition/Grid';
import Card from '../components/canvas/Card';

import Img from '../components/content/Img';
/*
  Details:
    Video hangout
      6:30pm
      https://hangouts.google.com/call/DJ3L6zMHE0VE5AqjimGRAEEI
    Netflix party
      7pm
      The NeverEnding Story
      https://www.netflix.com/watch/60020917?tctx=0%2C0%2C%2C%2C
      Trailer: https://www.youtube.com/watch?v=VuKGHpWffiQ
    Food
      Fried chicken recommended

    It's
      Abi's remote birthday
    We're gonna
      Hang out on this video call
    Then
      Watch the neverending story
    And
      Eat fried chicken
    Watch
      The trailer
*/

export default function Home() {
  return (
    <>
      <Head>
        <title>Abi's Remote Birthday</title>
      </Head>
      <Grid>
        <Grid.Item>
          <Img src="/abi-birthday.png" alt="Abi's last birthday" />
        </Grid.Item>
        <Grid.Item>
          <Card theme="blue">
            <h1>Abi's Remote Birthday</h1>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Img src="/abi-mexican.png" alt="Abi being a mexican" />
        </Grid.Item>
        <Grid.Item>
          <Card theme="red">
            <h2>Video Hangout</h2>
            <p>6:30pm</p>
            <p>
              <a href="https://hangouts.google.com/call/DJ3L6zMHE0VE5AqjimGRAEEI" target="_blank" rel="noopener noreferrer">
                Join the call
              </a>
            </p>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Img src="/abi.png" alt="Abi" />
        </Grid.Item>
        <Grid.Item>
          <Card theme="green">
            <h2>NetFlix Party</h2>
            <p>7pm</p>
            <p>
              <a href="https://www.netflix.com/watch/60020917?tctx=0%2C0%2C%2C%2C" target="_blank" rel="noopener noreferrer">
                Watch the movie
              </a>
            </p>
          </Card>
        </Grid.Item>

        <Grid.Item>
          <Img src="/abi-nye.png" alt="Abi on NYE" />
        </Grid.Item>

        <Grid.Item>
          <Card theme="aqua">
            <h2>Recommended food</h2>
            <p>Fried chicken</p>
            <p>
              <a href="https://www.just-eat.co.uk/takeaway/nearme/chicken" target="_blank" rel="noopener noreferrer">
                Order chicken
              </a>
            </p>
          </Card>
        </Grid.Item>

        <Grid.Item>
          <Img src="/abi-underwater.png" alt="Abi is underwater" />
        </Grid.Item>

        <Grid.Item>
          <Card theme="black">
            <h2>What now?</h2>
            <p>Start getting excited</p>
            <p>
              <a href="https://www.youtube.com/watch?v=VuKGHpWffiQ" target="_blank" rel="noopener noreferrer">
                Watch the trailer
              </a>
            </p>
          </Card>
        </Grid.Item>

      </Grid>
    </>
  );
}
