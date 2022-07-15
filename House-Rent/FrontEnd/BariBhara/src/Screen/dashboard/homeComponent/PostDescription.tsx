import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import ConstValue from '../../../component/ConstValue';
import Color from '../../../component/Color';
import {heightToDp} from '../../../component/Responsive';

const ColorValue = Color();

const PostDescription = ({data}: any) => {
  // define use state here
  const [activeMoreButton, setActiveMoreButton] = useState<boolean>(false);
  const [textShown, setTextShown] = useState<boolean>(false);

  // get text total number of lines

  const onTextLayout = useCallback((e: any) => {
    setActiveMoreButton(e.nativeEvent.lines.length > 3); //to check the text is more than 3 lines or not
  }, []);

  // Expand description
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.descriptionButton}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 3}
          style={styles.descriptionText}>
          {data.description}
        </Text>
      </TouchableOpacity>
      {/* add more button */}
      <View style={styles.moreView}>
        {activeMoreButton ? (
          <TouchableOpacity activeOpacity={0.5} onPress={toggleNumberOfLines}>
            <Text style={styles.moreText}> {textShown ? 'Less' : 'More'}</Text>
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
    paddingBottom: heightToDp(0.5),
  },
  descriptionButton: {
    width: '100%',
  },
  descriptionText: {
    fontSize: ConstValue.regularFontSize,
    color: ColorValue.BLACK,
  },
  moreView: {
    width: '100%',
  },
  moreText: {
    color: ColorValue.Activity_Color,
    paddingTop: heightToDp(1),
    fontSize: ConstValue.regularFontSize,
  },
});
