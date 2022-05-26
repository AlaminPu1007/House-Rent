import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResponsiveFontSize} from './Responsive';
import Color from './Color';

const ColorValue = Color();

const PostTime = ({date}: any) => {
  const [time, setTime] = useState('Now');
  function Timing() {
    const msMin = 60 * 1000;
    const msH = msMin * 60;
    const msD = msH * 24;
    const msW = msD * 7;
    const msMon = msD * 30;
    const now = new Date();
    const then = new Date(date || null);
    const dif = now.getTime() - then.getTime();
    if (dif < msMin) {
      setTime('Now');
    } else if (dif < msH) {
      setTime(Math.round(dif / msMin) + ' min');
    } else if (dif < msD) {
      setTime(Math.round(dif / msH) + ' hour');
    } else if (dif < msW) {
      setTime(Math.round(dif / msD) + ' day');
    } else if (dif < msMon) {
      setTime(Math.round(dif / msW) + ' week');
    } else if (now.getFullYear() === then.getFullYear()) {
      setTime(
        new Date(date).toLocaleDateString('en-GB', {
          month: 'long',
          day: 'numeric',
        }),
      );
    } else {
      setTime(
        new Date(date).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      );
    }
  }
  useEffect(() => {
    let clearInt: any;
    let unmount = false;
    if (!unmount) {
      Timing();
      clearInt = setInterval(Timing, 60000);
    }
    return () => {
      unmount = true;
      clearInterval(clearInt);
    };
  }, []);

  return (
    <View>
      <Text style={styles.textStyle}>{time}</Text>
    </View>
  );
};

export default PostTime;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: ResponsiveFontSize(10),
    color: ColorValue.Active_Bottom,
  },
});
