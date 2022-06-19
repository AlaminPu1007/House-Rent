import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ConstValue from '../../../component/ConstValue';
import Color from '../../../component/Color';
import {heightToDp} from '../../../component/Responsive';

const ColorValue = Color();

const PostDescription = ({data}: any) => {
  // define use state here
  const [activeMoreButton, setActiveMoreButton] = useState<number>(3);

  // get text total number of lines
  const onTextLayout = (e: any) => {
    const Lines = e.nativeEvent.lines.length;
    if (Lines > 3) {
      setActiveMoreButton(e.nativeEvent.lines.length);
    } else {
      setActiveMoreButton(3);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.descriptionButton}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={3}
          style={styles.descriptionText}>
          {data.description}
        </Text>
      </TouchableOpacity>
      {/* add more button */}
      <View>
        {activeMoreButton > 3 ? (
          <TouchableOpacity>
            <Text>More</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: heightToDp(0.5),
  },
  descriptionButton: {
    width: '100%',
  },
  descriptionText: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.BLACK,
  },
});
